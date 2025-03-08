import { Progress } from '../Progress';

interface ProjectItemProps {
    title: string;
    status: string;
    client: string;
    progress: string;
}

export function ProjectItem({
    title,
    status,
    client,
    progress,
}: ProjectItemProps) {
    const StatusColor = {
        Pago: '#1bcfb4',
        'Pagamento parcial': '#ffc100',
        Pendente: '#ff0854',
    };

    return (
        <div className=" rounded-xl flex flex-col gap-5 items-center border  shadow-sm p-5 bg-white">
            <div className="flex flex-col items-center mb-5">
                <span className="font-bold text-center">{title}</span>
                <span className="font-medium text-center">{client}</span>
            </div>
            <div className="flex w-full flex-col gap-2">
                <div className="flex justify-between">
                    <span className="text-sm">Progresso</span>
                    <span className="text-sm">{progress}</span>
                </div>
                <Progress progress="50%" color="var(--secondary-color)" />
            </div>
            <div className="flex w-full justify-between">
                <span className="relative rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 text-xs">
                    R$555,00
                </span>
                <span
                    style={{
                        color: StatusColor[status],
                        borderColor: StatusColor[status],
                    }}
                    className="relative rounded-full px-3 py-1.5 font-medium text-white text-xs bg-gray-50 text-center"
                >
                    {status}
                </span>
            </div>
        </div>
    );
}
