import { useNavigate } from "react-router-dom";
import { Clock } from "lucide-react";
import type { Article } from "../../types/article.types";

interface WideArticleCardProps {
    article: Article;
}

export default function WideArticleCard({ article }: WideArticleCardProps) {
    const navigate = useNavigate();

    const timeAgo = (dateStr: string) => {
        const diff = Date.now() - new Date(dateStr).getTime();
        const hours = Math.floor(diff / 3600000);
        if (hours < 1) return "Just now";
        if (hours < 24) return `${hours}h ago`;
        return `${Math.floor(hours / 24)}d ago`;
    };

    return (
        <div
            className="group flex gap-4 rounded-xl border border-zinc-800 bg-zinc-950 p-4 cursor-pointer hover:border-zinc-700 transition-colors"
            onClick={() => navigate(`/article/${article.id}`)}
        >
            {/* Thumbnail */}
            <div className="relative w-24 h-20 shrink-0 overflow-hidden rounded-lg">
                <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-medium uppercase tracking-wide text-zinc-600">
                        {article.category}
                    </span>
                </div>
                <h3 className="text-sm font-medium text-white leading-snug line-clamp-2 group-hover:text-zinc-300 transition-colors">
                    {article.title}
                </h3>
                <p className="mt-1 text-xs text-zinc-600 line-clamp-1">
                    {article.summary}
                </p>
                <div className="mt-2 flex items-center gap-2.5">
                    <span className="text-[11px] text-zinc-600">{article.sourceName}</span>
                    <span className="text-zinc-800">·</span>
                    <span className="flex items-center gap-1 text-[11px] text-zinc-600">
                        <Clock size={10} />
                        {timeAgo(article.publishedAt)}
                    </span>
                </div>
            </div>
        </div>
    );
}