import NextAuth, { NextAuthOptions } from "next-auth";
import KeycloakProvider, { KeycloakProfile } from "next-auth/providers/keycloak";

export const authOptions: NextAuthOptions = {
    providers: [
        KeycloakProvider<KeycloakProfile>({
            clientId: process.env.KEYCLOAK_ID as string,
            clientSecret: process.env.KEYCLOAK_SECRET as string,
            issuer: process.env.KEYCLOAK_ISSUER,
            httpOptions: {
                timeout: 40000,
            },
        })
    ],
    secret: process.env.JWT_SECRET,
    callbacks: {
        // async signIn({ account, user }) {
        //     if(!account) return false;
        //     const url = `${process.env.SERVER_URL}/auth`
        //     const body = {
        //         user, account
        //     }
        //     const response = await fetch(url, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': `Bearer ${account.access_token}`
        //         },
        //         body: JSON.stringify(body),
        //     })
        //     const data = await response.json();
        //     return true;
        // },
        async jwt({token, user, account, profile, isNewUser}) {
            if(account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({ session, token, user }) {
            session.token = token
            return session
          },
    },
}
export default NextAuth(authOptions);