import { useNavigate } from "react-router-dom";
import { ExternalLink, Clock } from "lucide-react";
import type { Insight } from "../../types/insight.types";

const SOURCE_TYPE_COLORS: Record<string, string> = {
    reddit: "text-orange-400 bg-orange-400/10 border-orange-400/20",
    twitter: "text-sky-400 bg-sky-400/10 border-sky-400/20",
    github: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    research: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    blog: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    news: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    linkedin: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    social: "text-pink-400 bg-pink-400/10 border-pink-400/20",
};

interface InsightHistoryCardProps {
    insight: Insight;
    showSummary?: boolean;
}

function timeAgo(dateStr: string): string {
    const diff = Date.now() - new Date(dateStr).getTime();
    const hours = Math.floor(diff / 3600000);
    if (hours < 1) return "Just now";
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days === 1) return "Yesterday";
    return `${days}d ago`;
}

export default function InsightHistoryCard({
    insight,
    showSummary = false,
}: InsightHistoryCardProps) {
    const navigate = useNavigate();
    const typeColor =
        SOURCE_TYPE_COLORS[insight.sourceType] ||
        "text-zinc-400 bg-zinc-400/10 border-zinc-400/20";

    return (
        <button
            onClick={() => navigate(`/dashboard/analyze/${insight.id}`)}
            className="group w-full text-left rounded-xl border border-zinc-800 bg-zinc-950 p-4 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-200"
        >
            <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                    {/* Source badge + time */}
                    <div className="flex items-center gap-2 mb-2">
                        <span
                            className={`rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${typeColor}`}
                        >
                            {insight.sourceType}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-zinc-600">
                            <Clock size={10} />
                            {timeAgo(insight.createdAt)}
                        </span>
                    </div>

                    {/* Title */}
                    <p className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors leading-snug line-clamp-2">
                        {insight.title}
                    </p>

                    {/* Source domain */}
                    <div className="mt-1.5 flex items-center gap-1 text-[11px] text-zinc-600">
                        <ExternalLink size={10} />
                        {insight.sourceDomain}
                    </div>

                    {/* Summary — only on history page */}
                    {showSummary && (
                        <p className="mt-2.5 text-xs text-zinc-500 leading-relaxed line-clamp-2">
                            {insight.summary}
                        </p>
                    )}
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 mt-1">
                    <div className="h-6 w-6 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-700 group-hover:border-zinc-600 group-hover:text-zinc-400 transition-all">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path
                                d="M2 5h6M5.5 2.5L8 5l-2.5 2.5"
                                stroke="currentColor"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </button>
    );
}