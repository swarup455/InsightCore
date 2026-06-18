import { useNavigate } from "react-router-dom";
import type { Article } from "../../types/article.types";

interface SquareArticleCardProps {
    article: Article;
}

export default function SquareArticleCard({ article }: SquareArticleCardProps) {
    const navigate = useNavigate();

    return (
        <div
            className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 cursor-pointer hover:border-zinc-700 transition-colors aspect-square"
            onClick={() => navigate(`/article/${article.id}`)}
        >
            {/* Image */}
            <img
                src={article.imageUrl}
                alt={article.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="text-[10px] font-medium uppercase tracking-wide text-zinc-400">
                    {article.sourceName}
                </span>
                <h3 className="mt-0.5 text-sm font-medium text-white leading-snug line-clamp-2">
                    {article.title}
                </h3>
            </div>
        </div>
    );
}