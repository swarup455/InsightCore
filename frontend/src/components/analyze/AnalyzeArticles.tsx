import { ExternalLink, Clock } from "lucide-react";
import type { RelatedArticle } from "../../types/insight.types";

interface RelatedArticlesProps {
    articles: RelatedArticle[];
}

function timeAgo(dateStr: string): string {
    const diff = Date.now() - new Date(dateStr).getTime();
    const hours = Math.floor(diff / 3600000);
    if (hours < 1) return "Just now";
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
    if (articles.length === 0) return null;

    return (
        <div className="flex flex-col gap-3">
            {articles.map((article) => (
                <a
                    key={article.id}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-950 p-4 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-200"
                >
                    {article.imageUrl && (
                        <img
                            src={article.imageUrl}
                            alt={article.title}
                            className="h-14 w-14 flex-shrink-0 rounded-lg object-cover border border-zinc-800"
                        />
                    )}
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors leading-snug line-clamp-1">
                            {article.title}
                        </p>
                        <p className="mt-1 text-xs text-zinc-500 leading-relaxed line-clamp-1">
                            {article.snippet}
                        </p>
                        <div className="mt-1.5 flex items-center gap-2 text-[11px] text-zinc-600">
                            <span>{article.source}</span>
                            <span className="text-zinc-800">·</span>
                            <span className="flex items-center gap-1">
                                <Clock size={10} />
                                {timeAgo(article.publishedAt)}
                            </span>
                        </div>
                    </div>
                    <ExternalLink
                        size={14}
                        className="flex-shrink-0 text-zinc-700 group-hover:text-zinc-400 transition-colors"
                    />
                </a>
            ))}
        </div>
    );
}