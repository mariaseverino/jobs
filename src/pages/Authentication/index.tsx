import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { UserContextType, useUserContext } from '../../context/user-context';
import './styles.css';
import './../../colors.css';

export function Authentication() {
    const { login }: UserContextType = useUserContext();

    function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        login(provider);
    }

    function signInWithGitHub() {
        const provider = new GithubAuthProvider();
        login(provider);
    }
    return (
        <div className="auth_view">
            <header>
                <span className="logo">Jobs</span>
                <div className="actions">
                    <button className="signin" onClick={() => {}}>
                        Sign In
                    </button>
                    <button className="premium">Premium</button>
                </div>
            </header>
            <div className="auth_wrapper">
                <div className="auth_card">
                    <div className="text">
                        <p className="title">Bem Vindo(a) de volta!</p>
                        <p className="message">
                            Simplifique sua rotina, gerencie seus projetos e
                            clientes em um só lugar
                        </p>
                    </div>

                    <div className="btns">
                        <span>Entre com</span>
                        <button onClick={signInWithGoogle}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" />
                            Google
                        </button>
                        <button onClick={signInWithGitHub}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                            Github
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
