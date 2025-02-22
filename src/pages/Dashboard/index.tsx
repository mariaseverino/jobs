import { UserContextType, useUserContext } from '../../context/user-context';
import './styles.css';

export function Dashboard() {
    const { user }: UserContextType = useUserContext();
    return (
        <>
            <h1>{user?.displayName}</h1>
        </>
    );
}
