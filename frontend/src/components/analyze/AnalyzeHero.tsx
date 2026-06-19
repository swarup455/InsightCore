import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ArrowRight, Clock, AlertCircle } from "lucide-react";
import { isValidUrl, detectSourceType } from "../../utils/urlValidator";

const EXAMPLE_URLS = [
    "https://reddit.com/r/MachineLearning/...",
    "https://x.com/karpathy/status/...",
    "https://github.com/openai/whisper",
    "https://arxiv.org/abs/2410.21276",
];

const SOURCE_ICONS: Record<string, string> = {
    reddit: "🟠",
    twitter: "🐦",
    github: "⚙️",
    arxiv: "📄",
    linkedin: "💼",
    blog: "✍️",
    news: "📰",
    unknown: "🔗",
};

interface InsightHeroProps {
    freeRemaining?: number;
}

export default function InsightHero({ freeRemaining = 5 }: InsightHeroProps) {
    const [url, setUrl] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [focused, setFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const detectedSource = url.trim() ? detectSourceType(url) : null;

    const handleAnalyze = async () => {
        if (!url.trim()) {
            setError("Please paste a URL to analyze.");
            return;
        }
        if (!isValidUrl(url)) {
            setError("Please enter a valid URL (e.g. https://...)");
            return;
        }
        setError("");
        setLoading(true);

        // Simulate analysis delay, then navigate to first mock insight
        await new Promise((r) => setTimeout(r, 1800));
        navigate("/dashboard/analyze/analyze-001");
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") handleAnalyze();
    };

    return (
        <div className="flex flex-col items-center text-center px-4 py-16 sm:py-20">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-medium uppercase tracking-widest text-zinc-500">
                    AI Intelligence Engine
                </span>
            </div>

            {/* Headline */}
            <h1 className="mb-4 flex flex-col xl:flex-row items-center gap-2 max-w-5xl text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.12]">
                Turn Articles Into
                <span className="flex items-center gap-2 text-red-500">
                    AI-Powered
                    <span className="block text-white">
                        Intelligence.
                    </span>
                </span>
            </h1>

            {/* Description */}
            <p className="mb-10 max-w-5xl text-[15px] text-zinc-500 leading-relaxed">
                Paste a news article, Reddit discussion, social media post, GitHub
                repository, research paper, or blog URL and instantly generate a
                structured intelligence report powered by AI.
            </p>

            {/* Search bar */}
            <div className="w-full max-w-5xl">
                <div
                    className={`relative flex items-center rounded-2xl border transition-all duration-200 bg-zinc-950 ${error
                        ? "border-red-500/50 shadow-[0_0_0_3px_rgba(239,68,68,0.08)]"
                        : focused
                            ? "border-zinc-600 shadow-[0_0_0_3px_rgba(255,255,255,0.04)]"
                            : "border-zinc-800 hover:border-zinc-700"
                        }`}
                >
                    {/* Source icon or search icon */}
                    <div className="pl-4 pr-2 text-zinc-600 flex-shrink-0">
                        {detectedSource && !error ? (
                            <span className="text-base leading-none">
                                {SOURCE_ICONS[detectedSource]}
                            </span>
                        ) : (
                            <Search size={16} className={error ? "text-red-500/70" : ""} />
                        )}
                    </div>

                    <input
                        ref={inputRef}
                        type="url"
                        value={url}
                        onChange={(e) => {
                            setUrl(e.target.value);
                            if (error) setError("");
                        }}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        onKeyDown={handleKeyDown}
                        placeholder="Paste a URL to analyze..."
                        className="flex-1 bg-transparent py-4 text-[15px] text-white placeholder:text-zinc-600 outline-none min-w-0"
                        autoComplete="off"
                        spellCheck={false}
                    />

                    <div className="pr-2 flex-shrink-0">
                        <button
                            onClick={handleAnalyze}
                            disabled={loading}
                            className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black transition-all hover:bg-zinc-200 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <>
                                    <span className="h-3.5 w-3.5 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                                    Analyzing
                                </>
                            ) : (
                                <>
                                    Analyze URL
                                    <ArrowRight size={14} />
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Error */}
                {error && (
                    <div className="mt-2.5 flex items-center gap-1.5 text-sm text-red-400">
                        <AlertCircle size={13} />
                        {error}
                    </div>
                )}

                {/* Example URLs */}
                {!url && !error && (
                    <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                        <span className="text-xs text-zinc-700">Try:</span>
                        {EXAMPLE_URLS.map((ex) => (
                            <button
                                key={ex}
                                onClick={() => {
                                    setUrl(ex.replace("...", ""));
                                    inputRef.current?.focus();
                                }}
                                className="rounded-full border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-[11px] text-zinc-500 hover:text-zinc-300 hover:border-zinc-700 transition-colors"
                            >
                                {ex}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Free limit */}
            <div className="mt-6 flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1.5">
                <Clock size={11} className="text-zinc-600" />
                <span className="text-[11px] text-zinc-600">
                    <span className="text-zinc-400 font-medium">{freeRemaining} free analyses</span>{" "}
                    remaining today
                </span>
            </div>
        </div>
    );
}