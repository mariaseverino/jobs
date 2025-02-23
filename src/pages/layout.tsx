import { SideBar } from '../components/SideBar';

export function Layout() {
    return (
        <div className="flex h-screen bg-amber-600">
            <SideBar />
            <main>conteudo</main>
        </div>
    );
}
