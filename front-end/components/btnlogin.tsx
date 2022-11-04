import { useSession, signIn, signOut } from "next-auth/react";

export default function BtnLogin() {
    const { data: session } = useSession();
    console.log("🚀 ~ file: btnlogin.tsx ~ line 5 ~ BtnLogin ~ session", session)
    if (session && session.user) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        );
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn('keycloak')}>Sign in</button>
        </>
    );
}
