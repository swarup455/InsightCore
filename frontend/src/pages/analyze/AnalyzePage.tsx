import { useNavigate } from "react-router-dom";
import { History, ArrowRight } from "lucide-react";
import InsightHero from "../../components/analyze/AnalyzeHero";
import InsightHistoryCard from "../../components/analyze/AnalyzeHistoryCard";
import { getRecentInsights } from "../../data/mockInsights";

export default function InsightPage() {
    const navigate = useNavigate();
    const recent = getRecentInsights(3);

    return (
        <div className="max-w-5xl mx-auto px-6 pb-16">
            {/* Hero */}
            <InsightHero freeRemaining={5} />

            {/* Secondary action — History */}
            <div className="flex items-center justify-center mb-12">
                <button
                    onClick={() => navigate("/dashboard/analyze/history")}
                    className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                >
                    <History size={14} />
                    History
                </button>
            </div>

            {/* Recent Analyses */}
            <section>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <h2 className="text-sm font-semibold text-zinc-300">Recent Analyses</h2>
                        <span className="text-xs text-zinc-600">{recent.length}</span>
                    </div>
                    <button
                        onClick={() => navigate("/dashboard/analyze/history")}
                        className="flex items-center gap-1 text-xs text-zinc-500 hover:text-white transition-colors"
                    >
                        View All History
                        <ArrowRight size={12} />
                    </button>
                </div>

                <div className="flex flex-col gap-3">
                    {recent.map((insight) => (
                        <InsightHistoryCard key={insight.id} insight={insight} />
                    ))}
                </div>
            </section>
        </div>
    );
}