import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
    Search,
    Brain,
    FileText,
    TrendingUp,
    Radio,
    FileBarChart,
    ArrowRight,
    Play,
    Menu,
    X,
    Mail,
    Newspaper,
    BookOpen,
    MessageSquare,
    LineChart,
    Globe,
    Check,
    Loader2,
    Lightbulb,
    AlertCircle,
    Target,
    Microscope,
    GraduationCap,
    Code2,
    Rocket,
    Cpu,
    Sparkles,
} from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
/* ----------------------------- Types ----------------------------- */

interface NavLinkItem {
    label: string;
    href: string;
}

interface FeatureItem {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface SourceItem {
    icon: LucideIcon;
    name: string;
}

interface InsightItem {
    icon: LucideIcon;
    label: string;
    description: string;
    tag: string;
}

interface UseCaseItem {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface FooterLinkItem {
    icon: LucideIcon;
    label: string;
    href: string;
}

/* ----------------------------- Data ----------------------------- */

const NAV_LINKS: NavLinkItem[] = [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Use Cases", href: "#use-cases" },
];

const FEATURES: FeatureItem[] = [
    {
        icon: Brain,
        title: "AI Research Engine",
        description:
            "Autonomous agents investigate a topic across multiple sources and synthesize the findings for you.",
    },
    {
        icon: Search,
        title: "Multi-Source Search",
        description:
            "Query news, research papers, GitHub, Reddit, markets, and the open web in a single request.",
    },
    {
        icon: FileText,
        title: "Intelligent Summaries",
        description:
            "Condense long-form content into clear, structured takeaways in a matter of seconds.",
    },
    {
        icon: TrendingUp,
        title: "Trend Detection",
        description:
            "Spot emerging patterns and shifts across sources before they become headlines.",
    },
    {
        icon: Radio,
        title: "Real-Time Intelligence",
        description:
            "Analysis stays current as new information appears, so you're never working from a stale view.",
    },
    {
        icon: FileBarChart,
        title: "Report Generation",
        description:
            "Turn raw findings into polished, shareable reports without writing a single paragraph.",
    },
];

const SOURCES: SourceItem[] = [
    { icon: Newspaper, name: "News" },
    { icon: BookOpen, name: "Research" },
    { icon: Github, name: "GitHub" },
    { icon: MessageSquare, name: "Reddit" },
    { icon: LineChart, name: "Markets" },
    { icon: Globe, name: "Web" },
];

const ANALYSIS_STEPS: { label: string; status: "done" | "active" }[] = [
    { label: "Cross-referencing 6 sources", status: "done" },
    { label: "Identifying key themes", status: "done" },
    { label: "Ranking findings by relevance", status: "active" },
];

const INSIGHTS: InsightItem[] = [
    {
        icon: TrendingUp,
        label: "Capital inflows accelerating",
        description: "Funding velocity in the sector is up sharply quarter over quarter.",
        tag: "High confidence",
    },
    {
        icon: AlertCircle,
        label: "Supply constraints emerging",
        description: "Multiple sources flag the same bottleneck independently.",
        tag: "Worth watching",
    },
    {
        icon: Target,
        label: "Sentiment shift on GitHub",
        description: "Issue activity suggests a pivot in developer priorities.",
        tag: "Medium confidence",
    },
];

const USE_CASES: UseCaseItem[] = [
    {
        icon: Microscope,
        title: "Researchers",
        description: "Synthesize papers and reports into clear, citable takeaways.",
    },
    {
        icon: GraduationCap,
        title: "Students",
        description: "Turn dense readings into concise study notes in minutes.",
    },
    {
        icon: Newspaper,
        title: "Journalists",
        description: "Surface story leads by cross-referencing fast-moving sources.",
    },
    {
        icon: LineChart,
        title: "Investors",
        description: "Track market sentiment and signals as they emerge.",
    },
    {
        icon: Code2,
        title: "Developers",
        description: "Monitor GitHub activity and technical discourse at scale.",
    },
    {
        icon: Rocket,
        title: "Founders",
        description: "Stay ahead of competitors and industry shifts effortlessly.",
    },
];

const FOOTER_LINKS: FooterLinkItem[] = [
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Mail, label: "Contact", href: "mailto:hello@insightcore.ai" },
    { icon: FileText, label: "Privacy", href: "#" },
];

/* --------------------------- Animation --------------------------- */

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: EASE },
    },
};

const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08 },
    },
};

/* ----------------------------- Helpers ----------------------------- */

function SectionHeading({
    eyebrow,
    title,
    description,
}: {
    eyebrow: string;
    title: string;
    description?: string;
}) {
    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto max-w-2xl text-center"
        >
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                {eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {title}
            </h2>
            {description && (
                <p className="mt-4 text-base leading-relaxed text-zinc-400">{description}</p>
            )}
        </motion.div>
    );
}

/* ----------------------------- Component ----------------------------- */

export default function LandingPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const scrollTo = (href: string) => {
        setMenuOpen(false);
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-black font-sans text-white antialiased selection:bg-white selection:text-black">
            {/* ----------------------------- Navbar ----------------------------- */}
            <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-md">
                <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                    <a href="#top" className="flex items-center gap-2.5">
                        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white">
                            <span className="h-1.5 w-1.5 rounded-full bg-black" />
                        </span>
                        <span className="text-[15px] font-semibold tracking-tight text-white">
                            InsightCore
                        </span>
                    </a>

                    <div className="hidden items-center gap-8 md:flex">
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => scrollTo(link.href)}
                                className="text-sm text-zinc-400 font-semibold transition-colors hover:text-white"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    <div className="hidden items-center gap-3 md:flex">
                        <button onClick={() => navigate("/login")} className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-zinc-200">
                            Get Started
                        </button>
                    </div>

                    <button
                        onClick={() => setMenuOpen((v) => !v)}
                        className="p-1 text-zinc-300 md:hidden"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </nav>

                {menuOpen && (
                    <div className="flex flex-col gap-1 border-t border-zinc-800 bg-black px-6 py-4 md:hidden">
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => scrollTo(link.href)}
                                className="py-2 text-left text-sm text-zinc-400 transition-colors hover:text-white"
                            >
                                {link.label}
                            </button>
                        ))}
                        <div className="mt-2 flex flex-col gap-2 border-t border-zinc-800 pt-3">
                            <button onClick={() => navigate("/login")} className="rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black">
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {/* ----------------------------- Hero ----------------------------- */}
            <section id="top" className="relative overflow-hidden px-6 pb-24 pt-20 sm:pt-28">
                <div
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[800px] -translate-x-1/2 rounded-full bg-zinc-800/20 blur-3xl"
                />

                <div className="relative mx-auto max-w-3xl text-center">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-400"
                    >
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-zinc-500 opacity-75" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-zinc-400" />
                        </span>
                        AI-powered intelligence engine
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.05 }}
                        className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
                    >
                        Turn Information Into Intelligence
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.1 }}
                        className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
                    >
                        Search, analyze, and understand information from news, research, GitHub,
                        Reddit, markets, and the web using AI-powered workflows.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.15 }}
                        className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
                    >
                        <button onClick={() => navigate("/login")} className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200">
                            Get Started
                            <ArrowRight
                                size={15}
                                className="transition-transform group-hover:translate-x-0.5"
                            />
                        </button>
                        <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-900">
                            <Play size={14} />
                            Watch Demo
                        </button>
                    </motion.div>
                </div>

                {/* Dashboard preview */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.25 }}
                    className="relative mx-auto mt-16 max-w-5xl"
                >
                    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/40">
                        <div className="flex items-center gap-3 border-b border-zinc-800 px-4 py-3">
                            <div className="flex gap-1.5">
                                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                            </div>
                            <div className="mx-auto flex items-center gap-1.5 rounded-md bg-zinc-900 px-3 py-1 text-xs text-zinc-500">
                                <Globe size={11} />
                                insightcore.ai/dashboard
                            </div>
                        </div>

                        <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-[200px_1fr]">
                            <div className="hidden flex-col gap-2 md:flex">
                                {[Search, Brain, FileBarChart, TrendingUp].map((Icon, i) => (
                                    <div
                                        key={i}
                                        className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs ${i === 0
                                            ? "bg-zinc-800 text-white"
                                            : "text-zinc-500"
                                            }`}
                                    >
                                        <Icon size={14} />
                                        {["Search", "Analysis", "Reports", "Trends"][i]}
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-300">
                                    <Search size={15} className="text-zinc-500" />
                                    What's driving the AI infrastructure boom in 2026?
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {SOURCES.map((source) => (
                                        <span
                                            key={source.name}
                                            className="flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-400"
                                        >
                                            <source.icon size={12} />
                                            {source.name}
                                        </span>
                                    ))}
                                </div>
                                <div className="space-y-2 rounded-lg border border-zinc-800 bg-zinc-900 p-4">
                                    <div className="h-2 w-3/4 rounded-full bg-zinc-800" />
                                    <div className="h-2 w-full rounded-full bg-zinc-800" />
                                    <div className="h-2 w-5/6 rounded-full bg-zinc-800" />
                                    <div className="h-2 w-2/3 rounded-full bg-zinc-800" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ----------------------------- Features ----------------------------- */}
            <section id="features" className="border-t border-zinc-800 px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    <SectionHeading
                        eyebrow="Capabilities"
                        title="Built for deep, fast understanding"
                        description="Six tools that work together so you spend less time gathering information and more time using it."
                    />

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {FEATURES.map((feature) => (
                            <motion.div
                                key={feature.title}
                                variants={fadeUp}
                                className="group rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition-colors hover:border-zinc-700"
                            >
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-white transition-colors group-hover:bg-zinc-700">
                                    <feature.icon size={19} />
                                </div>
                                <h3 className="text-[15px] font-medium text-white">{feature.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ----------------------------- Product Preview ----------------------------- */}
            <section className="border-t border-zinc-800 px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    <SectionHeading
                        eyebrow="Inside InsightCore"
                        title="From a single question to a complete picture"
                        description="Watch how a query moves through search, analysis, and synthesis into something you can actually act on."
                    />

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="mt-14 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950"
                    >
                        <div className="flex items-center gap-3 border-b border-zinc-800 px-5 py-3">
                            <div className="flex gap-1.5">
                                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                            </div>
                            <span className="text-xs text-zinc-500">Research workspace</span>
                            <span className="ml-auto flex items-center gap-1.5 rounded-full border border-zinc-800 px-2.5 py-1 text-[11px] text-zinc-500">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-zinc-500 opacity-75" />
                                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-zinc-400" />
                                </span>
                                Live
                            </span>
                        </div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-80px" }}
                            className="grid grid-cols-1 gap-6 p-6 sm:p-8 lg:grid-cols-12"
                        >
                            {/* Search + Sources */}
                            <motion.div variants={fadeUp} className="space-y-5 lg:col-span-4">
                                <div>
                                    <p className="mb-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-zinc-500">
                                        <Search size={12} /> Search
                                    </p>
                                    <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3 text-sm text-zinc-300">
                                        What's driving the AI infrastructure boom in 2026?
                                    </div>
                                </div>
                                <div>
                                    <p className="mb-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-zinc-500">
                                        <Globe size={12} /> Sources
                                    </p>
                                    <div className="grid grid-cols-2 gap-2">
                                        {SOURCES.map((source) => (
                                            <div
                                                key={source.name}
                                                className="flex items-center justify-between gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-2.5 py-2 text-xs text-zinc-300"
                                            >
                                                <span className="flex items-center gap-1.5">
                                                    <source.icon size={13} className="text-zinc-500" />
                                                    {source.name}
                                                </span>
                                                <Check size={12} className="text-zinc-500" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* AI Analysis + Summary */}
                            <motion.div variants={fadeUp} className="space-y-5 lg:col-span-4">
                                <div>
                                    <p className="mb-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-zinc-500">
                                        <Cpu size={12} /> AI Analysis
                                    </p>
                                    <div className="space-y-2 rounded-lg border border-zinc-800 bg-zinc-900 p-3">
                                        {ANALYSIS_STEPS.map((step) => (
                                            <div
                                                key={step.label}
                                                className="flex items-center gap-2 text-xs text-zinc-400"
                                            >
                                                {step.status === "done" ? (
                                                    <Check size={13} className="text-zinc-500" />
                                                ) : (
                                                    <Loader2 size={13} className="animate-spin text-zinc-500" />
                                                )}
                                                <span className={step.status === "active" ? "text-zinc-300" : ""}>
                                                    {step.label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="mb-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-zinc-500">
                                        <FileText size={12} /> Generated Summary
                                    </p>
                                    <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3 text-sm leading-relaxed text-zinc-400">
                                        Investment in AI infrastructure is being driven by three converging
                                        factors: falling compute costs, a wave of enterprise adoption, and
                                        intensifying competition among providers to secure long-term
                                        capacity.
                                    </div>
                                </div>
                            </motion.div>

                            {/* Insights */}
                            <motion.div variants={fadeUp} className="lg:col-span-4">
                                <p className="mb-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-zinc-500">
                                    <Lightbulb size={12} /> Insights
                                </p>
                                <div className="space-y-2">
                                    {INSIGHTS.map((insight) => (
                                        <div
                                            key={insight.label}
                                            className="rounded-lg border border-zinc-800 bg-zinc-900 p-3"
                                        >
                                            <div className="flex items-start gap-2.5">
                                                <insight.icon size={15} className="mt-0.5 shrink-0 text-zinc-500" />
                                                <div className="min-w-0">
                                                    <p className="text-sm font-medium text-white">{insight.label}</p>
                                                    <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                                                        {insight.description}
                                                    </p>
                                                    <span className="mt-2 inline-flex rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-400">
                                                        {insight.tag}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ----------------------------- Use Cases ----------------------------- */}
            <section id="use-cases" className="border-t border-zinc-800 px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    <SectionHeading
                        eyebrow="Who it's for"
                        title="Built for how you think"
                        description="One workflow, adapted to whatever you're trying to figure out."
                    />

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {USE_CASES.map((useCase) => (
                            <motion.div
                                key={useCase.title}
                                variants={fadeUp}
                                className="flex items-start gap-3.5 rounded-xl border border-zinc-800 p-5 transition-colors hover:bg-zinc-900"
                            >
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-zinc-300">
                                    <useCase.icon size={16} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-white">{useCase.title}</h3>
                                    <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                                        {useCase.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ----------------------------- Final CTA ----------------------------- */}
            <section className="border-t border-zinc-800 px-6 py-24">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="mx-auto max-w-3xl rounded-2xl border border-zinc-800 bg-zinc-950 px-8 py-16 text-center sm:px-16"
                >
                    <Sparkles size={20} className="mx-auto mb-5 text-zinc-500" />
                    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        Stop Reading More. Understand More.
                    </h2>
                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <button onClick={() => navigate("/login")} className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200">
                            Get Started
                            <ArrowRight size={15} />
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* ----------------------------- Footer ----------------------------- */}
            <footer id="about" className="border-t border-zinc-800 px-6 py-12">
                <div className="mx-auto max-w-6xl">
                    <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
                        <div className="max-w-sm">
                            <div className="flex items-center gap-2.5">
                                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white">
                                    <span className="h-1.5 w-1.5 rounded-full bg-black" />
                                </span>
                                <span className="text-sm font-semibold tracking-tight text-white">
                                    InsightCore
                                </span>
                            </div>
                            <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                                InsightCore turns scattered information from across the web into clear,
                                actionable intelligence.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-x-6 gap-y-3">
                            {FOOTER_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-white"
                                >
                                    <link.icon size={14} />
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10 border-t border-zinc-800 pt-6">
                        <p className="text-xs text-zinc-500">
                            © {new Date().getFullYear()} InsightCore. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}