import NextAuth from "next-auth";
import KeycloakProvider, { KeycloakProfile } from "next-auth/providers/keycloak";
export default NextAuth({
    providers: [
        KeycloakProvider<KeycloakProfile>({
            clientId: process.env.KEYCLOAK_ID as string,
            clientSecret: process.env.KEYCLOAK_SECRET as string,
            issuer: process.env.KEYCLOAK_ISSUER,
        })
    ],
});
