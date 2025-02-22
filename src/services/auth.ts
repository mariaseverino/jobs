import {
    GoogleAuthProvider,
    signInWithPopup,
    GithubAuthProvider,
    fetchSignInMethodsForEmail,
} from 'firebase/auth';
import { auth } from '../firebase/firebase-config';
import { User } from '../context/user-context';

export async function signIn(
    provider: GoogleAuthProvider | GithubAuthProvider
): Promise<User | undefined> {
    try {
        const userCredential = await signInWithPopup(auth, provider);
        const { displayName, photoURL } = userCredential.user;

        if (displayName && photoURL) {
            return { displayName, photoURL };
        }
    } catch (error: any) {
        if (error.code === 'auth/account-exists-with-different-credential') {
            const email = error.customData.email;

            if (email) {
                const signInMethods = await fetchSignInMethodsForEmail(
                    auth,
                    email
                );

                console.log({ teste: signInMethods });
            }
        }
    }
}
