import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    Clock,
    ExternalLink,
    Lightbulb,
    Share2,
    Check,
    Search,
} from "lucide-react";
import InsightSummaryCard from "../../components/insight/InsightSummaryCard";
import InsightKeyInsights from "../../components/insight/InsightKeyInsights";
import RelatedArticles from "../../components/insight/RelatedArticles";
import RelatedWebSources from "../../components/insight/RelatedWebSources";
import { getInsightById } from "../../data/mockInsights";
import { generateShareLink } from "../../utils/generateShareLink";

export default function InsightDetailsPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const insight = id ? getInsightById(id) : undefined;
    const [copied, setCopied] = useState(false);

    if (!insight) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-6">
                <p className="text-4xl">🔍</p>
                <h2 className="text-lg font-semibold text-white">Analysis not found</h2>
                <p className="text-sm text-zinc-500">
                    This report may have expired or the link is incorrect.
                </p>
                <button
                    onClick={() => navigate("/dashboard/insight")}
                    className="mt-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-200 transition-colors"
                >
                    Analyze a New URL
                </button>
            </div>
        );
    }

    const formattedDate = new Date(insight.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const handleShare = async () => {
        const link = generateShareLink(insight.id);
        try {
            await navigator.clipboard.writeText(link);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // clipboard unavailable — no-op
        }
    };

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
            <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="rounded-full border border-zinc-700 bg-zinc-900 px-2.5 py-1 text-[11px] font-medium text-zinc-300 uppercase">
                    {insight.sourceType}
                </span>
                <span className="text-xs text-zinc-600">{insight.source}</span>
                <span className="text-zinc-800">·</span>
                <span className="flex items-center gap-1 text-xs text-zinc-600">
                    <Clock size={11} />
                    {insight.readTime} min read
                </span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight mb-6">
                {insight.title}
            </h1>

            {/* Summary */}
            <div className="mb-6">
                <InsightSummaryCard insight={insight} />
            </div>

            {/* Why It Matters */}
            <section className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                    <Lightbulb size={14} className="text-zinc-400" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                        Why It Matters
                    </span>
                </div>
                <p className="text-[15px] text-zinc-400 leading-relaxed border-l-2 border-zinc-700 pl-4">
                    {insight.whyItMatters}
                </p>
            </section>

            {/* Key Insights */}
            <section className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                    <div className="h-px flex-1 bg-zinc-800" />
                    <span className="text-xs font-medium uppercase tracking-widest text-zinc-600 px-3">
                        Key Insights
                    </span>
                    <div className="h-px flex-1 bg-zinc-800" />
                </div>
                <InsightKeyInsights insights={insight.keyInsights} />
            </section>

            {/* Source link */}
            <div className="flex items-center gap-2 border-t border-zinc-800 pt-6 mb-10">
                <span className="text-xs text-zinc-600">Originally found at</span>
                <a
                    href={insight.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors truncate"
                >
                    {insight.sourceDomain}
                    <ExternalLink size={11} />
                </a>
                <span className="ml-auto text-xs text-zinc-600 whitespace-nowrap">
                    {formattedDate}
                </span>
            </div>

            {/* Related Articles */}
            {insight.relatedArticles.length > 0 && (
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-5">
                        <div className="h-px flex-1 bg-zinc-800" />
                        <span className="text-xs font-medium uppercase tracking-widest text-zinc-600 px-3">
                            Related Intelligence
                        </span>
                        <div className="h-px flex-1 bg-zinc-800" />
                    </div>
                    <RelatedArticles articles={insight.relatedArticles} />
                </section>
            )}

            {/* Related Web Sources */}
            {insight.relatedWebSources.length > 0 && (
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-5">
                        <div className="h-px flex-1 bg-zinc-800" />
                        <span className="text-xs font-medium uppercase tracking-widest text-zinc-600 px-3">
                            Related Web Sources
                        </span>
                        <div className="h-px flex-1 bg-zinc-800" />
                    </div>
                    <RelatedWebSources sources={insight.relatedWebSources} />
                </section>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 border-t border-zinc-800 pt-6">
                <button
                    onClick={handleShare}
                    className="flex items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm font-medium text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                >
                    {copied ? (
                        <>
                            <Check size={14} className="text-emerald-400" />
                            Link Copied
                        </>
                    ) : (
                        <>
                            <Share2 size={14} />
                            Share Analysis
                        </>
                    )}
                </button>
                <button
                    onClick={() => navigate("/dashboard/insight")}
                    className="flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black hover:bg-zinc-200 transition-colors"
                >
                    <Search size={14} />
                    Search Another URL
                </button>
            </div>
        </div>
    );
}