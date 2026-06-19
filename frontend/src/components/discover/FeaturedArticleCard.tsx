import { useNavigate } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import type { Article } from "../../types/article.types";

interface FeaturedArticleCardProps {
    article: Article;
}

export default function FeaturedArticleCard({ article }: FeaturedArticleCardProps) {
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
            className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 cursor-pointer group"
            onClick={() => navigate(`/dashboard/discover/article/${article.id}`)}
        >
            {/* Image */}
            <div className="relative h-64 sm:h-80 overflow-hidden">
                <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                    <span className="rounded-full border border-zinc-700 bg-zinc-900/80 px-2.5 py-1 text-[11px] font-medium text-zinc-300 backdrop-blur-sm">
                        {article.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h2 className="text-lg font-semibold text-white leading-snug group-hover:text-zinc-200 transition-colors line-clamp-2">
                    {article.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500 line-clamp-2">
                    {article.summary}
                </p>

                <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-xs text-zinc-600">{article.sourceName}</span>
                        <span className="text-zinc-800">·</span>
                        <span className="flex items-center gap-1 text-xs text-zinc-600">
                            <Clock size={11} />
                            {timeAgo(article.publishedAt)}
                        </span>
                    </div>
                    <button
                        className="flex items-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-xs font-medium text-black hover:bg-zinc-200 transition-colors"
                        onClick={(e) => { e.stopPropagation(); navigate(`/dashboard/discover/article/${article.id}`); }}
                    >
                        Read More
                        <ArrowRight size={11} />
                    </button>
                </div>
            </div>
        </div>
    );
}