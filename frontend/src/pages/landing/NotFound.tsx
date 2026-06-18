import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
    Search,
    ArrowRight,
    Undo2,
    Newspaper,
    BookOpen,
    MessageSquare,
    LineChart,
    Globe,
    X,
} from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";

/* --------------------------- Animation --------------------------- */

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const staggerContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

/* ----------------------------- Data ----------------------------- */

const QUERIES = [
    "Searching news...",
    "Searching research papers...",
    "Searching GitHub...",
    "Searching Reddit...",
    "Searching the web...",
    "Page not found anywhere.",
];

const SOURCES = [
    { icon: Newspaper, name: "News" },
    { icon: BookOpen, name: "Research" },
    { icon: Github, name: "GitHub" },
    { icon: MessageSquare, name: "Reddit" },
    { icon: LineChart, name: "Markets" },
    { icon: Globe, name: "Web" },
];

/* --------------------------- Typewriter --------------------------- */

function useTypewriter(lines: string[], speed = 35, pause = 900) {
    const [text, setText] = useState("");
    const [lineIndex, setLineIndex] = useState(0);

    useEffect(() => {
        if (lineIndex >= lines.length - 1 && text === lines[lines.length - 1]) return;

        const current = lines[lineIndex];
        if (text.length < current.length) {
            const t = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
            return () => clearTimeout(t);
        }
        if (lineIndex < lines.length - 1) {
            const t = setTimeout(() => {
                setText("");
                setLineIndex((i) => i + 1);
            }, pause);
            return () => clearTimeout(t);
        }
    }, [text, lineIndex, lines, speed, pause]);

    return { text, isFinal: lineIndex === lines.length - 1 };
}

/* ----------------------------- Component ----------------------------- */

export default function NotFoundPage() {
    const navigate = useNavigate();
    const { text, isFinal } = useTypewriter(QUERIES);
    const checkedCount = QUERIES.indexOf(text) >= 0 ? QUERIES.indexOf(text) : 0;

    return (
        <div className="flex min-h-screen flex-col bg-black font-sans text-white antialiased selection:bg-white selection:text-black">
            <main className="relative flex flex-1 items-center justify-center overflow-hidden px-6 py-20">
                <div
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-1/3 h-[480px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-800/20 blur-3xl"
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="relative mx-auto max-w-xl text-center"
                >
                    <motion.p
                        variants={fadeUp}
                        className="text-7xl font-semibold tracking-tight text-white sm:text-8xl"
                    >
                        404
                    </motion.p>

                    <motion.h1
                        variants={fadeUp}
                        className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                    >
                        Looks like you're lost
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="mx-auto mt-4 max-w-md text-base leading-relaxed text-zinc-400 sm:text-lg"
                    >
                        We checked every source we know. This page still isn't there.
                    </motion.p>

                    {/* Animated search mockup, reused from the hero */}
                    <motion.div variants={fadeUp} className="mt-9 text-left">
                        <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-300">
                            <Search size={15} className="shrink-0 text-zinc-500" />
                            <span className={isFinal ? "text-zinc-500" : ""}>
                                {text}
                                <span className="ml-0.5 inline-block h-4 w-px animate-pulse bg-zinc-500 align-middle" />
                            </span>
                        </div>

                        <div className="mt-3 flex flex-wrap justify-center gap-2">
                            {SOURCES.map((source, i) => {
                                const checked = isFinal || i < checkedCount;
                                return (
                                    <span
                                        key={source.name}
                                        className="flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-400"
                                    >
                                        <source.icon size={12} />
                                        {source.name}
                                        {checked && (
                                            <X size={11} className="text-zinc-500" />
                                        )}
                                    </span>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
                    >
                        <button
                            onClick={() => navigate("/")}
                            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
                        >
                            Back to Home
                            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                        </button>
                        <button
                            onClick={() => navigate(-1)}
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-900"
                        >
                            <Undo2 size={14} />
                            Go Back
                        </button>
                    </motion.div>
                </motion.div>
            </main>

            <footer className="px-6 py-6">
                <p className="text-center text-xs text-zinc-500">
                    © {new Date().getFullYear()} InsightCore. All rights reserved.
                </p>
            </footer>
        </div>
    );
}