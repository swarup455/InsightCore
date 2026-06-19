import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, ExternalLink, Sparkles, BookOpen } from "lucide-react";
import WideArticleCard from "../../components/article/WideArticleCard";
import { getArticleById, getRelatedArticles } from "../../data/mockData";

export default function ArticlePage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const article = id ? getArticleById(id) : undefined;

    if (!article) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-6">
                <p className="text-4xl">🔍</p>
                <h2 className="text-lg font-semibold text-white">Article not found</h2>
                <p className="text-sm text-zinc-500">This piece may have been removed or the link is incorrect.</p>
                <button
                    onClick={() => navigate("/dashboard")}
                    className="mt-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-200 transition-colors"
                >
                    Back to Dashboard
                </button>
            </div>
        );
    }

    const related = getRelatedArticles(article);

    const timeAgo = (dateStr: string) => {
        const diff = Date.now() - new Date(dateStr).getTime();
        const hours = Math.floor(diff / 3600000);
        if (hours < 1) return "Just now";
        if (hours < 24) return `${hours}h ago`;
        return `${Math.floor(hours / 24)}d ago`;
    };

    const formattedDate = new Date(article.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="max-w-5xl mx-auto px-6 py-8 pb-16">
            {/* Back button */}
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-8"
            >
                <ArrowLeft size={15} />
                Back
            </button>

            {/* Category + meta */}
            <div className="flex items-center gap-3 mb-4">
                <span className="rounded-full border border-zinc-700 bg-zinc-900 px-2.5 py-1 text-[11px] font-medium text-zinc-300">
                    {article.category}
                </span>
                <span className="text-xs text-zinc-600">
                    {article.sourceName}
                </span>
                <span className="text-zinc-800">·</span>
                <span className="flex items-center gap-1 text-xs text-zinc-600">
                    <Clock size={11} />
                    {timeAgo(article.publishedAt)}
                </span>
                <span className="text-zinc-800">·</span>
                <span className="flex items-center gap-1 text-xs text-zinc-600">
                    <BookOpen size={11} />
                    {article.readTime} min read
                </span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight mb-4">
                {article.title}
            </h1>

            {/* Summary lead */}
            <p className="text-base text-zinc-400 leading-relaxed mb-6 border-l-2 border-zinc-700 pl-4">
                {article.summary}
            </p>

            {/* Cover image */}
            <div className="relative overflow-hidden rounded-xl border border-zinc-800 mb-8">
                <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-64 sm:h-80 object-cover"
                />
            </div>

            {/* AI Summary Box */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 mb-8">
                <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={14} className="text-zinc-400" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                        AI Summary
                    </span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                    {article.aiSummary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-zinc-800 px-2.5 py-1 text-[11px] text-zinc-400"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Full content */}
            <article className="prose-custom">
                {article.content.split("\n\n").map((paragraph, i) => (
                    <p
                        key={i}
                        className="text-[15px] text-zinc-400 leading-[1.8] mb-5"
                    >
                        {paragraph}
                    </p>
                ))}
            </article>

            {/* Source link */}
            <div className="mt-8 flex items-center gap-2 border-t border-zinc-800 pt-6">
                <span className="text-xs text-zinc-600">Originally published by</span>
                <a
                    href={article.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors"
                >
                    {article.sourceName}
                    <ExternalLink size={11} />
                </a>
                <span className="ml-auto text-xs text-zinc-600">{formattedDate}</span>
            </div>

            {/* Related Articles */}
            {related.length > 0 && (
                <section className="mt-12">
                    <div className="flex items-center gap-2 mb-5">
                        <div className="h-px flex-1 bg-zinc-800" />
                        <span className="text-xs font-medium uppercase tracking-widest text-zinc-600 px-3">
                            Related Intelligence
                        </span>
                        <div className="h-px flex-1 bg-zinc-800" />
                    </div>
                    <div className="flex flex-col gap-3">
                        {related.map((r) => (
                            <WideArticleCard key={r.id} article={r} />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}