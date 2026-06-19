import type { KeyInsight } from "../../types/insight.types";

interface InsightKeyInsightsProps {
    insights: KeyInsight[];
}

export default function InsightKeyInsights({ insights }: InsightKeyInsightsProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {insights.map((insight, i) => (
                <div
                    key={insight.id}
                    className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 hover:border-zinc-700 transition-colors duration-200"
                >
                    <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-base">
                            {insight.icon || "💡"}
                        </div>
                        <div className="min-w-0">
                            <p className="text-sm font-medium text-white leading-snug">
                                {insight.label}
                            </p>
                            <p className="mt-1.5 text-[13px] text-zinc-500 leading-relaxed">
                                {insight.content}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}