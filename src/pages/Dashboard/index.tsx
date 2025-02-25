// import { Graphic } from '../../components/Graphic';
import { Card } from '../../components/Card';
import { Graphic } from '../../components/Graphic';
import { OngoingProjectsList } from '../../components/OngoingProjectsList';
import { useUserContext } from '../../context/user-context';
import './styles.css';

export function Dashboard() {
    const { user } = useUserContext();

    const data = new Date();

    const formatador = {
        day: 'numeric',
        month: 'long',
    };

    console.log(data.toLocaleDateString('pt-BR', formatador));

    return (
        <div className="mb-5">
            <div className="flex justify-between items-center mb-8 mt-8 md:mt-6">
                <div>
                    <h1 className="text-xl font-bold">
                        Olá, {user?.displayName}
                    </h1>
                    <p className="mt-3 ">
                        Acompanhe como esta a situcao dos seus projetos e
                        clientes
                    </p>
                </div>
                <div className="hidden lg:flex items-center gap-2">
                    <span>{data.toLocaleDateString('pt-BR', formatador)}</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                        />
                    </svg>
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
                <Card
                    title="Clientes Ativos"
                    value="12"
                    percentage_change="12%"
                    color="#fe9496"
                />
                <Card
                    title="Projetos em andamento"
                    value="5"
                    percentage_change="12%"
                    color="#4bcbeb"
                />
                <Card
                    title="Tarefas pendentes"
                    value="2"
                    percentage_change="12%"
                    color="#1bcfb4"
                />
                <Card
                    title="Faturas a receber"
                    value="3"
                    percentage_change="12%"
                    color="#9e58ff"
                />
            </div>

            <div className="grid xl:grid-cols-2 gap-2 mt-5">
                <Graphic />
                <OngoingProjectsList />
            </div>
        </div>
    );
}
