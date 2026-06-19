import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
    return (
        <div className="group rounded-xl border border-zinc-800 bg-zinc-950 p-6 transition-colors hover:border-zinc-700">
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 transition-colors group-hover:border-zinc-700">
                <Icon size={16} className="text-zinc-400" />
            </div>
            <h3 className="mb-1.5 text-sm font-medium text-white">{title}</h3>
            <p className="text-sm leading-relaxed text-zinc-500">{description}</p>
        </div>
    );
}