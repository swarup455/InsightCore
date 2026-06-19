import type { Insight } from "../types/insight.types";

export const MOCK_INSIGHTS: Insight[] = [
    {
        id: "insight-001",
        url: "https://openai.com/blog/gpt-4o-system-card",
        title: "OpenAI Releases GPT-4o System Card: Safety Measures and Capability Overview",
        source: "OpenAI Blog",
        sourceType: "blog",
        sourceDomain: "openai.com",
        summary:
            "OpenAI's GPT-4o system card outlines the safety evaluations, risk assessments, and mitigation strategies applied to their latest flagship multimodal model. The document reveals how the model was stress-tested across biological, chemical, radiological, and nuclear (CBRN) domains, as well as cybersecurity and persuasion tasks. Evaluators found GPT-4o at medium risk for CBRN uplift, prompting additional guardrails. The card also addresses model behavior, jailbreak resistance, and the new real-time voice API's safety constraints.",
        whyItMatters:
            "GPT-4o represents the current frontier of commercial AI. Its system card sets precedent for how labs publicly communicate model risks—shaping regulatory expectations, competitor behavior, and public trust in AI systems. Understanding what OpenAI disclosed (and didn't) gives researchers, policymakers, and developers a clearer picture of where AI safety discourse is headed.",
        keyInsights: [
            {
                id: "ki-001-1",
                label: "Medium CBRN Risk Flagged",
                content:
                    "Internal red-teaming classified GPT-4o at medium risk for providing meaningful uplift in biological and chemical weapon domains, triggering additional content filters.",
                icon: "⚠️",
            },
            {
                id: "ki-001-2",
                label: "Voice Mode Has Separate Guardrails",
                content:
                    "The real-time voice API ships with its own safety stack, separate from the text model, to address unique risks like emotional manipulation and impersonation.",
                icon: "🎙️",
            },
            {
                id: "ki-001-3",
                label: "Jailbreak Resistance Improved",
                content:
                    "GPT-4o showed measurable improvement over GPT-4 Turbo in resisting prompt injection and jailbreak attempts across standardized evaluation suites.",
                icon: "🔒",
            },
            {
                id: "ki-001-4",
                label: "Transparency as Strategy",
                content:
                    "The detailed disclosure appears timed ahead of anticipated EU AI Act enforcement, positioning OpenAI as proactively compliant with emerging transparency requirements.",
                icon: "📋",
            },
            {
                id: "ki-001-5",
                label: "Multimodal Risks Underexplored",
                content:
                    "Critics note the card dedicates less attention to risks from combined vision and audio inputs, an area where novel attack surfaces are emerging.",
                icon: "🔍",
            },
        ],
        relatedArticles: [
            {
                id: "ra-001-1",
                title: "Anthropic Publishes Comparable Safety Card for Claude 3.5",
                source: "TechCrunch",
                url: "https://techcrunch.com",
                snippet:
                    "Anthropic's evaluation methodology for Claude 3.5 Sonnet shares structural similarities with OpenAI's approach but diverges on persuasion risk thresholds.",
                publishedAt: "2024-11-10T08:00:00Z",
            },
            {
                id: "ra-001-2",
                title: "EU AI Act's Frontier Model Requirements Take Shape",
                source: "MIT Technology Review",
                url: "https://technologyreview.com",
                snippet:
                    "Regulators are using system cards from major labs as informal templates for what frontier model documentation must include under the Act.",
                publishedAt: "2024-11-08T12:30:00Z",
            },
        ],
        relatedWebSources: [
            {
                id: "rws-001-1",
                title: "GPT-4o Full System Card (PDF)",
                description:
                    "The complete 60-page technical document including all evaluation tables, red-team methodology, and mitigation details.",
                url: "https://openai.com/index/gpt-4o-system-card",
                domain: "openai.com",
            },
            {
                id: "rws-001-2",
                title: "AI Safety Levels Explained — METR Benchmarks",
                description:
                    "METR's public benchmark suite used by multiple labs to evaluate autonomous replication and adaptation risks.",
                url: "https://metr.org",
                domain: "metr.org",
            },
            {
                id: "rws-001-3",
                title: "Frontier Model Forum Safety Standards",
                description:
                    "The joint industry body's evolving baseline requirements for safety documentation across member organizations.",
                url: "https://frontiermodelforum.org",
                domain: "frontiermodelforum.org",
            },
        ],
        tags: ["OpenAI", "GPT-4o", "AI Safety", "System Card", "LLM"],
        createdAt: "2024-11-12T14:22:00Z",
        readTime: 7,
        sentiment: "neutral",
        credibilityScore: 94,
    },
    {
        id: "insight-002",
        url: "https://reddit.com/r/MachineLearning/comments/1g8xk2p/discussion_are_we_in_an_ai_bubble",
        title: "r/MachineLearning: Are We in an AI Bubble? The Community Weighs In",
        source: "Reddit · r/MachineLearning",
        sourceType: "reddit",
        sourceDomain: "reddit.com",
        summary:
            "A high-engagement Reddit thread in r/MachineLearning with over 2,400 upvotes and 380 comments debates whether current AI valuations and hype cycles resemble the dot-com bubble. Top comments from researchers and engineers split sharply: one camp argues that unlike 2000, there are real revenue-generating products and infrastructure buildout; the other warns that most AI startups have no defensible moat and that hyperscaler capex is unsustainable. The thread surfaces nuanced technical arguments about compute scaling laws hitting diminishing returns.",
        whyItMatters:
            "The r/MachineLearning community includes a high concentration of active researchers and senior engineers from leading labs and companies. When this demographic debates bubble dynamics, it signals internal industry anxiety that often precedes broader market sentiment shifts. The scaling law debate in particular has direct implications for investment theses built on continued capability gains.",
        keyInsights: [
            {
                id: "ki-002-1",
                label: "Consensus: Real Products, Uncertain Moats",
                content:
                    "Unlike 2000, most top commenters acknowledge real revenue exists — but argue that margins will compress as models commoditize and API pricing races to zero.",
                icon: "📊",
            },
            {
                id: "ki-002-2",
                label: "Scaling Law Skepticism Growing",
                content:
                    "Several high-karma researchers argue pre-training scaling returns are flattening, meaning the next capability leap requires fundamental breakthroughs, not just more compute.",
                icon: "📉",
            },
            {
                id: "ki-002-3",
                label: "Infrastructure vs. Application Layer Divide",
                content:
                    "Strong community consensus that infrastructure (NVIDIA, cloud) is the safer bet; application-layer AI startups face brutal competition with no lock-in.",
                icon: "🏗️",
            },
            {
                id: "ki-002-4",
                label: "Hyperscaler Capex Called Into Question",
                content:
                    "Multiple engineers cite reports that Microsoft and Google data center buildout timelines are slipping, raising questions about whether demand justifies the investment.",
                icon: "💸",
            },
        ],
        relatedArticles: [
            {
                id: "ra-002-1",
                title: "Goldman Sachs: AI Capex May Not Deliver Expected ROI",
                source: "Bloomberg",
                url: "https://bloomberg.com",
                snippet:
                    "The bank's technology analysts argue that $1T in planned AI infrastructure spend will need decades to recoup through productivity gains.",
                publishedAt: "2024-11-05T09:00:00Z",
            },
        ],
        relatedWebSources: [
            {
                id: "rws-002-1",
                title: "Epoch AI — Compute Scaling Trends",
                description:
                    "Quantitative analysis of training compute growth and frontier model capability benchmarks over time.",
                url: "https://epochai.org",
                domain: "epochai.org",
            },
            {
                id: "rws-002-2",
                title: "AI Index Report 2024 — Stanford HAI",
                description:
                    "Annual report tracking AI investment, adoption, and research output across industries and geographies.",
                url: "https://aiindex.stanford.edu",
                domain: "aiindex.stanford.edu",
            },
        ],
        tags: ["AI Bubble", "Machine Learning", "Venture Capital", "Scaling Laws", "Reddit"],
        createdAt: "2024-11-11T09:45:00Z",
        readTime: 5,
        sentiment: "mixed",
        credibilityScore: 78,
    },
    {
        id: "insight-003",
        url: "https://github.com/anthropics/anthropic-sdk-python",
        title: "anthropics/anthropic-sdk-python — Official Python SDK for the Anthropic API",
        source: "GitHub",
        sourceType: "github",
        sourceDomain: "github.com",
        summary:
            "The official Anthropic Python SDK provides type-safe bindings for the Messages API, streaming responses, tool use, vision inputs, and the new batch processing endpoint. The repository has seen rapid growth in contributors and stars since Claude 3 launched. Recent commits focus on async support improvements, improved error handling ergonomics, and a new helper for structured output parsing. The library follows an explicit async-first pattern and ships with full type stubs for IDE integration.",
        whyItMatters:
            "The Python SDK is the primary integration path for the majority of Claude API consumers. Its design decisions — async patterns, error handling, streaming abstractions — directly shape how thousands of production applications interact with Claude. Changes here ripple across the ecosystem, making it a leading indicator of where the API is headed.",
        keyInsights: [
            {
                id: "ki-003-1",
                label: "Batch API Now First-Class",
                content:
                    "The SDK's new batch module lets developers submit up to 10,000 requests per job at 50% cost reduction — a major unlock for bulk processing use cases.",
                icon: "⚡",
            },
            {
                id: "ki-003-2",
                label: "Type Safety Throughout",
                content:
                    "Full Pydantic models for every API response object mean type errors surface at development time, not in production — a significant DX improvement over older SDKs.",
                icon: "🔷",
            },
            {
                id: "ki-003-3",
                label: "Streaming Redesigned",
                content:
                    "The new streaming interface uses async generators rather than callback patterns, making it composable with modern Python async frameworks like FastAPI and asyncio.",
                icon: "🌊",
            },
            {
                id: "ki-003-4",
                label: "Active Community Contribution",
                content:
                    "Over 60 external contributors in the last 90 days, with maintainers actively merging community PRs — an unusually open posture for a commercial AI SDK.",
                icon: "👥",
            },
        ],
        relatedArticles: [
            {
                id: "ra-003-1",
                title: "Comparing Anthropic, OpenAI, and Google SDKs for Python",
                source: "Towards Data Science",
                url: "https://towardsdatascience.com",
                snippet:
                    "A developer's breakdown of ergonomics, type safety, and feature parity across the three major LLM provider Python libraries.",
                publishedAt: "2024-11-01T10:00:00Z",
            },
        ],
        relatedWebSources: [
            {
                id: "rws-003-1",
                title: "Anthropic API Reference — Messages Endpoint",
                description:
                    "Full documentation for the /v1/messages endpoint including all parameters, response formats, and examples.",
                url: "https://docs.anthropic.com/en/api/messages",
                domain: "docs.anthropic.com",
            },
            {
                id: "rws-003-2",
                title: "PyPI — anthropic Package",
                description: "The official package listing with installation instructions, version history, and download stats.",
                url: "https://pypi.org/project/anthropic",
                domain: "pypi.org",
            },
        ],
        tags: ["Anthropic", "Python", "SDK", "API", "Open Source", "GitHub"],
        createdAt: "2024-11-10T16:30:00Z",
        readTime: 4,
        sentiment: "positive",
        credibilityScore: 96,
    },
    {
        id: "insight-004",
        url: "https://arxiv.org/abs/2410.21276",
        title: "Scaling LLM Test-Time Compute Optimally Can Be More Effective Than Scaling Parameters",
        source: "arXiv · cs.LG",
        sourceType: "research",
        sourceDomain: "arxiv.org",
        summary:
            "This paper from DeepMind researchers argues that intelligently allocating compute at inference time — rather than exclusively scaling training-time parameters — can yield equivalent or superior performance improvements for certain task categories. The authors introduce a framework for adaptive compute allocation using process reward models (PRMs) and beam search over reasoning chains. On math and coding benchmarks, their approach matches models 3x larger, challenging the assumption that capability improvements always require larger training runs.",
        whyItMatters:
            "If test-time compute scaling holds as a general result, it fundamentally changes the economics of frontier AI development. Companies with smaller models but smart inference strategies could close capability gaps against labs with vastly larger compute budgets. This also has direct implications for OpenAI's o1/o3 and similar 'thinking' model approaches, validating their architectural bets.",
        keyInsights: [
            {
                id: "ki-004-1",
                label: "Test-Time Scaling Is Real",
                content:
                    "The paper provides rigorous empirical evidence that compute allocated after training — during inference — can substitute for significant parameter-scaling on hard reasoning tasks.",
                icon: "🧪",
            },
            {
                id: "ki-004-2",
                label: "Process Reward Models Are Key",
                content:
                    "PRMs, which evaluate intermediate reasoning steps rather than just final outputs, are essential to making adaptive inference allocation work effectively.",
                icon: "🎯",
            },
            {
                id: "ki-004-3",
                label: "Not Universal — Domain Dependent",
                content:
                    "Benefits are strongest in math and formal reasoning; the approach shows weaker gains on open-ended generation and factual recall tasks.",
                icon: "⚖️",
            },
            {
                id: "ki-004-4",
                label: "Economic Implications for AI Labs",
                content:
                    "Smaller labs can potentially compete on hard benchmarks without billion-dollar training runs by investing in smarter inference-time search.",
                icon: "💰",
            },
            {
                id: "ki-004-5",
                label: "Validates o1-Style Architectures",
                content:
                    "The findings provide theoretical grounding for OpenAI's reasoning model approach and suggest this paradigm will spread rapidly across the industry.",
                icon: "✅",
            },
        ],
        relatedArticles: [
            {
                id: "ra-004-1",
                title: "OpenAI o3 Benchmarks Shatter Records on ARC-AGI",
                source: "The Verge",
                url: "https://theverge.com",
                snippet:
                    "OpenAI's latest reasoning model demonstrates the practical ceiling of test-time compute scaling on the field's hardest abstract reasoning benchmark.",
                publishedAt: "2024-12-20T11:00:00Z",
            },
        ],
        relatedWebSources: [
            {
                id: "rws-004-1",
                title: "arXiv Paper — Full PDF",
                description: "Direct link to the complete paper including methodology, experimental setup, and appendices.",
                url: "https://arxiv.org/pdf/2410.21276",
                domain: "arxiv.org",
            },
            {
                id: "rws-004-2",
                title: "DeepMind Research Blog",
                description:
                    "DeepMind's official commentary on the paper and its relationship to their broader scaling research agenda.",
                url: "https://deepmind.google/research",
                domain: "deepmind.google",
            },
        ],
        tags: ["Research", "LLM", "Inference", "Scaling", "DeepMind", "arXiv"],
        createdAt: "2024-11-09T11:00:00Z",
        readTime: 9,
        sentiment: "positive",
        credibilityScore: 91,
    },
    {
        id: "insight-005",
        url: "https://x.com/karpathy/status/1826872718436131000",
        title: "Andrej Karpathy on the Future of AI Education and 'Vibe Coding'",
        source: "X (Twitter) · @karpathy",
        sourceType: "twitter",
        sourceDomain: "x.com",
        summary:
            "Andrej Karpathy's viral thread coining 'vibe coding' — the practice of building software through natural language prompts rather than direct code writing — sparked intense debate across the AI and developer communities. Karpathy argues this represents a genuine new paradigm, not just a productivity hack, where the programmer's role shifts from syntax execution to intent specification and output validation. The thread accumulated over 28,000 likes and generated hundreds of quote-posts from developers sharing experiences.",
        whyItMatters:
            "Karpathy remains one of the most influential voices bridging academic AI research and practitioner communities. When he names a new paradigm, the term tends to propagate rapidly into industry vocabulary and shapes how developers, educators, and product teams think about AI-assisted development. 'Vibe coding' is already appearing in job descriptions and curriculum planning discussions.",
        keyInsights: [
            {
                id: "ki-005-1",
                label: "New Mental Model for Development",
                content:
                    "Karpathy frames vibe coding not as autocomplete on steroids but as a fundamentally different cognitive workflow — intention-first rather than syntax-first programming.",
                icon: "🧠",
            },
            {
                id: "ki-005-2",
                label: "Validation Becomes the Core Skill",
                content:
                    "When AI writes the code, the critical developer skill shifts from generation to discernment — knowing when generated code is correct, safe, and aligned with intent.",
                icon: "🔬",
            },
            {
                id: "ki-005-3",
                label: "Education Systems Unprepared",
                content:
                    "The thread implies CS education curricula focused on syntax mastery are increasingly misaligned with how software is actually being built in 2024.",
                icon: "🎓",
            },
            {
                id: "ki-005-4",
                label: "Significant Community Pushback",
                content:
                    "Many experienced engineers in replies argue that understanding code generation requires understanding code — vibe coding produces unauditable, fragile systems.",
                icon: "💬",
            },
        ],
        relatedArticles: [
            {
                id: "ra-005-1",
                title: "Is 'Vibe Coding' the Future or a Liability?",
                source: "Hacker News",
                url: "https://news.ycombinator.com",
                snippet:
                    "The Hacker News discussion of Karpathy's thread surfaces both genuine enthusiasm and pointed technical objections from senior engineers.",
                publishedAt: "2024-11-07T14:00:00Z",
            },
        ],
        relatedWebSources: [
            {
                id: "rws-005-1",
                title: "Original Thread on X",
                description: "The full thread including Karpathy's follow-up clarifications and responses to top replies.",
                url: "https://x.com/karpathy",
                domain: "x.com",
            },
            {
                id: "rws-005-2",
                title: "GitHub Copilot Developer Satisfaction Study",
                description:
                    "Microsoft's internal study on how AI coding assistants change perceived productivity and code quality metrics.",
                url: "https://github.blog",
                domain: "github.blog",
            },
        ],
        tags: ["Karpathy", "Vibe Coding", "AI Development", "Programming", "Twitter", "Education"],
        createdAt: "2024-11-08T18:15:00Z",
        readTime: 4,
        sentiment: "mixed",
        credibilityScore: 82,
    },
];

export const getInsightById = (id: string): Insight | undefined =>
    MOCK_INSIGHTS.find((i) => i.id === id);

export const getRecentInsights = (count = 3): Insight[] =>
    [...MOCK_INSIGHTS]
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, count);