import { Route, Routes } from 'react-router';
import { Authentication } from './pages/Authentication';
import { Dashboard } from './pages/Dashboard';
import { UserProvider } from './context/user-context';
import { Layout } from './pages/layout';
import { Projects } from './pages/Projects';

export default function Router() {
    return (
        <UserProvider>
            <Routes>
                <Route path="/" element={<Authentication />} />
                <Route element={<Layout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/projects" element={<Projects />} />
                </Route>
            </Routes>
        </UserProvider>
    );
}
