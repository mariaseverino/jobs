interface CardProps {
    title: string;
    value: string;
    percentage_change: string;
    color: string;
}

export function Card({ title, value, percentage_change, color }: CardProps) {
    return (
        <div
            style={{ backgroundColor: color }}
            className="p-5 flex flex-col rounded-xl gap-2 text-(--secondary-color) border shadow-sm"
        >
            <span className="text-sm font-medium">{title}</span>
            <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold">{value}</span>
                <p className="text-xs text-(--primary-color)">
                    {percentage_change} maior que o ultimo mes
                </p>
            </div>
        </div>
    );
}
