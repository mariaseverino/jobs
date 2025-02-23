import { Graphic } from '../../components/Graphic';
import { UserContextType, useUserContext } from '../../context/user-context';
import './styles.css';

export function Dashboard() {
    const { user }: UserContextType = useUserContext();
    return (
        <>
            <div>{user?.displayName}</div>
            {/* <Graphic /> */}
        </>
    );
}
