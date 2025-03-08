import { Outlet } from 'react-router';
import { SideBar } from '../components/SideBar';

export function Layout() {
    return (
        <div className="flex h-screen bg-(--back-color)">
            <SideBar />
            <main className=" w-full p-6 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
}
