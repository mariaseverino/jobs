import { Route, Routes } from 'react-router';
import { Authentication } from './pages/Authentication';
import { Dashboard } from './pages/Dashboard';
import { UserProvider } from './context/user-context';

export default function Router() {
    return (
        <UserProvider>
            <Routes>
                <Route path="/" element={<Authentication />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </UserProvider>
    );
}
