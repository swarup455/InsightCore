interface SectionHeaderProps {
    title: string;
    count?: number;
    action?: string;
    onAction?: () => void;
}

export default function SectionHeader({ title, count, action, onAction }: SectionHeaderProps) {
    return (
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
                <h2 className="text-sm font-semibold text-white tracking-tight">{title}</h2>
                {count !== undefined && (
                    <span className="text-xs text-zinc-600 font-medium">{count}</span>
                )}
            </div>
            {action && (
                <button
                    onClick={onAction}
                    className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                    {action}
                </button>
            )}
        </div>
    );
}