import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import { useState } from "react";
import InsightHistoryCard from "../../components/analyze/AnalyzeHistoryCard";
import { MOCK_INSIGHTS } from "../../data/mockInsights";

export default function InsightHistoryPage() {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");

    const sorted = [...MOCK_INSIGHTS].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    const filtered = query.trim()
        ? sorted.filter(
            (i) =>
                i.title.toLowerCase().includes(query.toLowerCase()) ||
                i.source.toLowerCase().includes(query.toLowerCase()) ||
                i.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
        )
        : sorted;

    return (
        <div className="max-w-5xl mx-auto px-6 py-8 pb-16">
            {/* Back */}
            <button
                onClick={() => navigate("/dashboard/insight")}
                className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-8"
            >
                <ArrowLeft size={15} />
                Back to Insight
            </button>

            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-semibold text-white tracking-tight mb-1.5">
                    Analysis History
                </h1>
                <p className="text-sm text-zinc-500">
                    {MOCK_INSIGHTS.length} URLs analyzed across all sources
                </p>
            </div>

            {/* Search filter */}
            <div className="mb-6 relative">
                <Search
                    size={14}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-600"
                />
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Filter by title, source, or tag..."
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 py-2.5 pl-9 pr-4 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-zinc-700 transition-colors"
                />
            </div>

            {/* List */}
            {filtered.length > 0 ? (
                <div className="flex flex-col gap-3">
                    {filtered.map((insight) => (
                        <InsightHistoryCard key={insight.id} insight={insight} showSummary />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
                    <p className="text-3xl">🔍</p>
                    <p className="text-sm text-zinc-500">No analyses match "{query}"</p>
                </div>
            )}
        </div>
    );
}