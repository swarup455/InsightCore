import { Sparkles, Shield, TrendingUp, TrendingDown, Minus } from "lucide-react";
import type { Insight } from "../../types/insight.types";

const SENTIMENT_CONFIG: Record<
    string,
    { label: string; icon: typeof TrendingUp; color: string }
> = {
    positive: { label: "Positive", icon: TrendingUp, color: "text-emerald-400" },
    negative: { label: "Negative", icon: TrendingDown, color: "text-red-400" },
    neutral: { label: "Neutral", icon: Minus, color: "text-zinc-400" },
    mixed: { label: "Mixed", icon: Minus, color: "text-amber-400" },
};

interface InsightSummaryCardProps {
    insight: Insight;
}

export default function InsightSummaryCard({ insight }: InsightSummaryCardProps) {
    const sentiment = SENTIMENT_CONFIG[insight.sentiment] || SENTIMENT_CONFIG.neutral;
    const SentimentIcon = sentiment.icon;

    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <Sparkles size={14} className="text-zinc-400" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                        AI Summary
                    </span>
                </div>

                {/* Credibility + sentiment pills */}
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900 px-2.5 py-1">
                        <Shield size={11} className="text-zinc-500" />
                        <span className="text-[11px] text-zinc-400">
                            {insight.credibilityScore}% credible
                        </span>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900 px-2.5 py-1">
                        <SentimentIcon size={11} className={sentiment.color} />
                        <span className="text-[11px] text-zinc-400">{sentiment.label}</span>
                    </div>
                </div>
            </div>

            <p className="text-[15px] text-zinc-300 leading-relaxed">{insight.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2">
                {insight.tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full bg-zinc-800 px-2.5 py-1 text-[11px] text-zinc-400"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}