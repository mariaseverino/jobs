interface ProgressProps {
    progress: string;
    color: string;
}

export function Progress({ progress, color }: ProgressProps) {
    return (
        <div className="w-full h-2 bg-gray-300 rounded-full">
            <div
                style={{ backgroundColor: color, width: `${progress}` }}
                className="h-2 rounded-l-full"
            ></div>
        </div>
    );
}
