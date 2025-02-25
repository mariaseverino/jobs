interface OngoingProjectProps {
    name: string;
    client: string;
    status: string;
    value: string;
}

export function OngoingProject({
    name,
    client,
    status,
    value,
}: OngoingProjectProps) {
    const StatusColor = {
        Pago: '#1bcfb4',
        'Pagamento parcial': '#ffc100',
        Pendente: '#ff0854',
    };

    return (
        <div className="flex justify-between py-4 border-b-1 border-(--muted-foreground) last:border-b-0">
            <div className="flex flex-col">
                <span className="">{name}</span>
                <span className="text-sm text-(--muted-foreground)">
                    {client}
                </span>
            </div>
            <div className="w-auto lg:w-72 justify-between items-center hidden md:flex">
                <span
                    style={{ backgroundColor: StatusColor[status] }}
                    className="px-4 py-1 rounded-full font-medium text-sm text-(--primary-color) hidden lg:inline-block"
                >
                    {status}
                </span>
                <span className="text-right">{value}</span>
            </div>
        </div>
    );
}
