import { ExternalLink, Globe } from "lucide-react";
import type { RelatedWebSource } from "../../types/insight.types";

interface RelatedWebSourcesProps {
    sources: RelatedWebSource[];
}

export default function RelatedWebSources({ sources }: RelatedWebSourcesProps) {
    if (sources.length === 0) return null;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {sources.map((source) => (
                <a
                    key={source.id}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-xl border border-zinc-800 bg-zinc-950 p-4 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-200"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <div className="h-5 w-5 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                            <Globe size={10} className="text-zinc-500" />
                        </div>
                        <span className="text-[11px] text-zinc-600">{source.domain}</span>
                    </div>
                    <p className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors leading-snug line-clamp-1">
                        {source.title}
                    </p>
                    <p className="mt-1 text-xs text-zinc-500 leading-relaxed line-clamp-2">
                        {source.description}
                    </p>
                    <div className="mt-2.5 flex items-center gap-1 text-[11px] text-zinc-600 group-hover:text-zinc-400 transition-colors">
                        Visit source
                        <ExternalLink size={10} />
                    </div>
                </a>
            ))}
        </div>
    );
}