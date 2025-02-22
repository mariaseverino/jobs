import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';
import { signIn } from '../services/auth';
import { useNavigate } from 'react-router-dom';

export type User = {
    displayName: string;
    photoURL: string;
};
export interface UserContextType {
    user: User | undefined;
    login: (provider: GoogleAuthProvider | GithubAuthProvider) => void;
}

interface UserContextProps {
    children: ReactNode;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: UserContextProps) {
    useEffect(() => {
        function getUserFromStorage() {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        }

        getUserFromStorage();
    }, []);

    const [user, setUser] = useState<User>();
    const navigate = useNavigate();

    async function login(provider: GoogleAuthProvider | GithubAuthProvider) {
        const userData = await signIn(provider);
        setUser(userData);

        localStorage.setItem('user', JSON.stringify(userData));

        navigate('/dashboard');
    }

    return (
        <UserContext.Provider value={{ user, login }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => {
    return useContext<UserContextType | undefined>(UserContext);
};
