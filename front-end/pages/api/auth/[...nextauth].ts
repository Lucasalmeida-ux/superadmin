import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import KeycloakProvider, { KeycloakProfile } from "next-auth/providers/keycloak";
import prisma from "../../../lib/prismadb"

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        KeycloakProvider<KeycloakProfile>({
            clientId: process.env.KEYCLOAK_ID as string,
            clientSecret: process.env.KEYCLOAK_SECRET as string,
            issuer: process.env.KEYCLOAK_ISSUER,
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            console.log("🚀 ~ file: [...nextauth].ts ~ line 13 ~ signIn ~ { user, account, profile, email, credentials }", { user, account, profile, email, credentials })
            return true
        },
        async session({ session, user, token }) {
            console.log("🚀 ~ file: [...nextauth].ts ~ line 21 ~ session ~ { session, user, token }", { session, user, token })
            return session
        }
    }
};

export default NextAuth(authOptions);