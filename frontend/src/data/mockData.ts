import type { Article } from "../types/article.types";

export const MOCK_ARTICLES: Article[] = [
    {
        id: "1",
        title: "The Quiet Infrastructure War Reshaping AI in 2026",
        summary:
            "Three converging forces — falling compute costs, surging enterprise adoption, and hyperscaler rivalry — are redrawing the map of AI infrastructure faster than anyone anticipated.",
        content: `The numbers are hard to argue with. Compute costs per token have dropped by a factor of ten since early 2024, and the pace of decline shows no sign of slowing. That compression is doing something unexpected: instead of simply making AI cheaper, it is expanding the scope of what organizations think they can build.

Enterprise adoption has followed a pattern that mirrors the early cloud era. A handful of early movers demonstrated ROI, risk appetites widened, and procurement cycles that once measured in quarters now measure in weeks. Infrastructure teams that once spent months evaluating providers are making decisions in days.

The competition among hyperscalers has grown sharp enough to feel personal. Microsoft, Google, and Amazon are each making infrastructure bets that assume the others will blink. So far, no one has. The result is a capital deployment cycle that has few historical parallels outside of wartime industrial mobilization.

What gets less attention is the secondary layer: the startups and mid-sized operators building the connective tissue between raw compute and usable AI. Networking hardware, inference optimization, cooling systems, power contracts — each of these has become a bottleneck at some point in the last eighteen months, and each has attracted a wave of well-funded challengers.

The talent dynamics are quietly shifting as well. Researchers who might have joined academic labs five years ago are now choosing infrastructure companies, attracted by the scale of the engineering problems and compensation packages that universities cannot match.

The open question is whether the current rate of investment is building durable competitive moats or setting up a correction. Capital markets have been patient, but patience has limits, and the profitability timelines being projected by some operators require a lot of things to go right simultaneously.`,
        category: "News",
        source: "News",
        sourceName: "The Information",
        sourceUrl: "https://theinformation.com",
        publishedAt: "2026-06-17T08:30:00Z",
        readTime: 6,
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
        tags: ["AI", "Infrastructure", "Cloud", "Investment"],
        aiSummary:
            "AI infrastructure investment is accelerating due to falling compute costs (10x drop since 2024), rapid enterprise adoption mirroring early cloud patterns, and intensifying hyperscaler competition. Secondary markets in networking, inference optimization, and cooling are emerging as critical bottlenecks, attracting significant venture capital.",
        relatedIds: ["2", "3", "4"],
    },
    {
        id: "2",
        title: "Attention Is Not All You Need: A Case for Hybrid Architectures",
        summary:
            "New research out of MIT and DeepMind argues that pure transformer stacks are hitting a ceiling — and that blending attention with state-space models may be the next step.",
        content: `The transformer architecture has dominated language modeling for nearly a decade. Its success has been so complete that the field has largely stopped asking whether it is the right tool for every problem. A new paper co-authored by researchers at MIT and DeepMind is asking that question again.

The core argument is straightforward: transformers scale well with data and compute, but their quadratic attention complexity creates practical limits when context windows stretch into the hundreds of thousands of tokens. State-space models, which process sequences in linear time, handle long contexts more efficiently but have historically underperformed transformers on tasks requiring fine-grained recall.

The hybrid approach described in the paper alternates attention layers with selective state-space layers at a ratio tuned to the task. On long-document benchmarks, the hybrid model matches transformer performance while using roughly 40% less compute. The gains are less pronounced on shorter contexts, which the authors acknowledge.

Early reaction from the research community has been cautious but interested. Several groups have noted that hybrid architectures have been tried before without producing results that displaced pure transformers at scale. The authors counter that the quality of state-space implementations has improved substantially, and that previous comparisons were not testing the right architectural ratios.

The practical implications, if the findings hold, are significant. Training runs that currently require weeks could be compressed. Inference costs for long-context applications could drop substantially. And the optimization dynamics might be different enough that current scaling laws would need to be recalibrated.

The paper will be presented at NeurIPS later this year. Several labs have already begun internal replications.`,
        category: "Research",
        source: "Research",
        sourceName: "arXiv",
        sourceUrl: "https://arxiv.org",
        publishedAt: "2026-06-16T14:00:00Z",
        readTime: 8,
        imageUrl: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80",
        tags: ["ML", "Transformers", "Architecture", "Research"],
        aiSummary:
            "MIT and DeepMind researchers propose hybrid transformer + state-space architectures that match transformer performance on long-document tasks while using 40% less compute. The work challenges the dominance of pure attention-based models and could reshape inference economics if findings replicate at scale.",
        relatedIds: ["1", "5", "6"],
    },
    {
        id: "3",
        title: "Vercel's New Runtime Changes How Teams Think About Edge Compute",
        summary:
            "The latest Edge Runtime update lets developers push Python workloads to Vercel's edge network — a move that could eat into Lambda's dominance for latency-sensitive applications.",
        content: `Vercel shipped a quiet but significant update to its Edge Runtime this week: Python support. The change sounds incremental. It is not.

For the past several years, Vercel's edge compute offering has been JavaScript-first. Teams building Python backends had to route through separate infrastructure — typically AWS Lambda or Google Cloud Functions — adding latency and operational complexity. The new runtime collapses that gap.

The implementation uses a compiled Python interpreter running in a V8 isolate, which is a different model than the CPython runtime most Python developers are used to. Not all Python code runs correctly in this environment: packages that rely on C extensions or system calls need modifications or alternatives. Vercel has published a compatibility guide, and the list of supported packages covers the most common ML inference and API use cases.

The latency numbers from Vercel's own benchmarks are striking. For cold-start-sensitive applications, the edge runtime is showing improvements of 60–80% compared to regional Lambda deployments. Teams building recommendation endpoints or lightweight inference wrappers have been waiting for something like this.

The competitive implications for AWS are real but limited. Lambda handles workloads that require more compute, longer execution times, or access to VPC resources that Vercel's edge network cannot provide. The real pressure is on the category of "glue code" — the lightweight functions that translate, route, or filter requests before they reach a heavier backend.

The GitHub repository for the runtime has accumulated 2,400 stars in 72 hours. Several large Vercel customers have already begun migration pilots.`,
        category: "Developers",
        source: "GitHub",
        sourceName: "Vercel Blog",
        sourceUrl: "https://vercel.com/blog",
        publishedAt: "2026-06-16T10:15:00Z",
        readTime: 5,
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
        tags: ["Vercel", "Edge", "Python", "Serverless"],
        aiSummary:
            "Vercel added Python support to its Edge Runtime, running compiled Python in V8 isolates for 60–80% cold-start latency improvements over regional Lambda. C-extension packages require alternatives, but coverage for common ML/API use cases is strong. Significant developer interest with 2,400 GitHub stars in 72 hours.",
        relatedIds: ["4", "7", "8"],
    },
    {
        id: "4",
        title: "BTC Breaks $180K as Sovereign Wealth Funds Enter Direct Custody",
        summary:
            "Bitcoin crossed a historic threshold this week as two sovereign wealth funds disclosed direct holdings, bypassing ETF structures for the first time.",
        content: `Bitcoin crossed $180,000 on Tuesday as two sovereign wealth funds disclosed direct BTC holdings in regulatory filings, bypassing the ETF structures that have historically been the entry point for institutional capital.

The filings, from a Gulf-state fund and a Nordic pension vehicle, represent a meaningful shift in how institutional capital is approaching digital assets. Previous sovereign exposure has come through BlackRock's iShares Bitcoin Trust and similar products. Direct custody signals a level of conviction — and operational sophistication — that marks a new phase of institutional adoption.

The mechanics matter. Direct custody requires a custodian relationship, key management infrastructure, and internal risk frameworks that most institutions spent the past two years building. The fact that multiple sovereign vehicles have now completed that buildout and are deploying is a data point the market is reading as structural rather than tactical.

On-chain analytics firms noted an unusual pattern in the 72 hours before the disclosures: large tranches of BTC moving from exchange cold storage to new wallets with custody provider fingerprints. The movement was visible but not widely interpreted at the time.

Altcoin markets have responded with their typical amplification. ETH is up 18% on the week; Solana crossed $600 for the first time. Derivative markets are showing elevated open interest but not the overleveraged structure that preceded previous corrections.

The macro context is supportive. Dollar weakness has continued through Q2, real yields remain slightly negative, and the Fed has signaled no rate changes before year-end. That combination has historically been constructive for hard-cap assets.`,
        category: "Finance",
        source: "Markets",
        sourceName: "Bloomberg",
        sourceUrl: "https://bloomberg.com",
        publishedAt: "2026-06-17T06:00:00Z",
        readTime: 4,
        imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=1200&q=80",
        tags: ["Bitcoin", "Crypto", "Institutional", "Markets"],
        aiSummary:
            "Bitcoin broke $180K after two sovereign wealth funds disclosed direct BTC custody positions — a first. The move signals completion of institutional custody infrastructure buildout. On-chain data shows pre-disclosure wallet movements consistent with custody provider fingerprints. Macro environment (dollar weakness, slightly negative real yields) remains supportive.",
        relatedIds: ["1", "9", "10"],
    },
    {
        id: "5",
        title: "OpenAI's New Reasoning Model Scores 98.2% on MATH-500",
        summary:
            "The latest model from OpenAI achieves near-perfect performance on the MATH-500 benchmark, narrowing the gap between AI and expert mathematicians to an uncomfortable margin.",
        content: `OpenAI's latest reasoning model has achieved a score of 98.2% on the MATH-500 benchmark, a set of competition-level mathematics problems that has served as a proxy for mathematical reasoning capability since 2021.

The previous record was 94.1%, set by Google's Gemini Ultra in March. The jump represents the largest single improvement on the benchmark in its history.

MATH-500 includes problems from AMC, AIME, and competition-level pre-calculus and calculus. The problems are designed to require multi-step reasoning rather than pattern matching, which is why the benchmark has remained informative even as models have improved.

The model's performance on geometry and combinatorics subsets is notably stronger than on number theory, which the OpenAI team attributes to differences in training data density rather than architectural factors.

Separately, the model scores 72% on a subset of IMO problems that have been informally circulated among researchers. IMO problems have not been solved reliably by AI systems, and 72% on a subset is a long way from general mathematical capability at that level — but researchers who have studied the outputs say the model's proof structures are coherent rather than numerically coincidental.

The practical implications for scientific research applications are considerable. Several pharmaceutical and materials science teams have been running closed pilots using earlier versions of the model for theorem-proving and formula derivation tasks. Results from those pilots have not been published, but the teams involved have renewed their contracts.`,
        category: "Research",
        source: "Research",
        sourceName: "OpenAI Blog",
        sourceUrl: "https://openai.com/blog",
        publishedAt: "2026-06-15T16:00:00Z",
        readTime: 5,
        imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80",
        tags: ["OpenAI", "Reasoning", "Math", "Benchmarks"],
        aiSummary:
            "OpenAI's new reasoning model scores 98.2% on MATH-500 — a 4.1 point jump over the previous record. The model shows particular strength in geometry and combinatorics. 72% performance on informal IMO subsets suggests emerging but not yet general mathematical capability. Pharmaceutical and materials science teams running closed pilots have renewed contracts.",
        relatedIds: ["2", "6", "1"],
    },
    {
        id: "6",
        title: "llama.cpp Hits 1M GitHub Stars — What It Means for Local AI",
        summary:
            "The inference engine that made running LLMs on consumer hardware practical has reached a milestone that says something about where the industry is heading.",
        content: `llama.cpp crossed one million GitHub stars on Saturday, becoming the third project in GitHub's history to reach that number.

The library, originally written by Georgi Gerganov in a weekend to run LLaMA models on a MacBook, has grown into the de facto standard for local inference. It supports quantized versions of most major open-weight model families, runs on CPU without GPU requirements, and has been ported to iOS, Android, and a range of embedded targets.

The milestone is worth examining beyond the vanity metric. llama.cpp's growth curve tracks closely with consumer interest in local AI: the idea that inference does not need to happen in a data center, does not need an internet connection, and does not require sending data to a third party.

Privacy has been the dominant driver according to the project's own issue tracker. The most active contributor discussions over the past year have centered on healthcare, legal, and enterprise use cases where data residency requirements or confidentiality concerns make cloud inference impractical or prohibited.

The model ecosystem has kept pace. Quantized versions of models that run acceptably on an M-series MacBook now include several that would have required a full server rack two years ago. The quality gap between local and cloud inference has narrowed enough that for many tasks it is no longer a meaningful consideration.

The project maintainer posted a brief note: "This started as a curiosity project. It became something else. Thank you."`,
        category: "Developers",
        source: "GitHub",
        sourceName: "GitHub",
        sourceUrl: "https://github.com/ggerganov/llama.cpp",
        publishedAt: "2026-06-17T11:00:00Z",
        readTime: 4,
        imageUrl: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80",
        tags: ["llama.cpp", "Local AI", "Open Source", "GitHub"],
        aiSummary:
            "llama.cpp reached 1M GitHub stars — the third project ever to do so. Privacy and data residency concerns are the primary drivers of local inference adoption, particularly in healthcare and legal sectors. The quality gap between local and cloud inference has narrowed significantly, with M-series MacBooks now running models that required server racks two years ago.",
        relatedIds: ["3", "5", "7"],
    },
    {
        id: "7",
        title: "Rust Overtakes Go in Backend Adoption Survey for Third Consecutive Year",
        summary:
            "The annual State of Backend Engineering survey shows Rust climbing steadily in production adoption, with performance and memory safety cited as the primary drivers.",
        content: `Rust has overtaken Go in production backend adoption for the third consecutive year according to the annual State of Backend Engineering survey, which sampled 12,000 developers across 84 countries.

The headline number: 31% of respondents report Rust in production, up from 24% the year before. Go sits at 28%, down slightly. The gap is small and the confidence intervals overlap, but the direction has been consistent.

The reasons cited by respondents have also been consistent. Performance and memory safety account for 67% of Rust adoption decisions. In the Go column, simplicity and hiring availability remain the dominant factors.

The survey's methodology distinguishes between experimental use and production traffic, which matters. Rust's learning curve is well documented, and previous surveys have shown a pattern of organizations experimenting for longer before committing. The sustained growth in production numbers suggests that cohort is now graduating.

Tooling has improved substantially. The async ecosystem has stabilized, the compiler's error messages have gotten better, and the IDE integration is now comparable to Go's. Several large companies that have made the investment in internal Rust expertise have begun publishing results from rewrites of performance-critical services, and the numbers have been compelling enough to move procurement decisions.

The data point that may matter most for the next few years: Rust is now the most common language taught in systems programming university courses in North America, ahead of C and C++. The hiring market will follow.`,
        category: "Developers",
        source: "Research",
        sourceName: "Stack Overflow",
        sourceUrl: "https://stackoverflow.com",
        publishedAt: "2026-06-14T09:00:00Z",
        readTime: 4,
        imageUrl: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1200&q=80",
        tags: ["Rust", "Go", "Backend", "Survey"],
        aiSummary:
            "Rust (31%) overtook Go (28%) in production backend adoption for the third consecutive year. Performance and memory safety drive Rust adoption; simplicity and hiring ease favor Go. Improved async tooling and IDE integration are reducing the onboarding barrier. Rust is now the leading systems programming language in North American universities.",
        relatedIds: ["3", "6", "8"],
    },
    {
        id: "8",
        title: "The Reddit Thread That Predicted the Nvidia Supply Crunch Six Months Ago",
        summary:
            "r/hardware users pieced together supply chain signals in December that analysts only confirmed last week — a case study in collective intelligence.",
        content: `In December 2025, a post on r/hardware titled "Something's off in the H100 supply chain" accumulated 847 comments and was largely dismissed by the mainstream technology press. Six months later, the supply crunch it described is front-page news.

The original poster, a data center procurement manager who posts under a pseudonym, laid out a set of observations: unusual lead time increases from multiple TSMC suppliers, a pattern of capacity reservation amendments visible in Taiwan customs data, and a cluster of job postings from Nvidia's memory team that collectively implied a yield problem.

No single observation was conclusive. The thread's value came from aggregation: dozens of commenters with domain-specific expertise filled in gaps, corrected errors, and added corroborating signals. A supply chain analyst noted unusual shipping weight patterns on known Nvidia logistics routes. A memory engineer flagged specific part numbers that were showing extended lead times.

The collective picture that emerged was specific enough to have been actionable for anyone paying attention. Several commenters reported using the thread's findings to adjust procurement timelines. At least one small cloud provider claimed in a later post that the analysis had led them to pre-purchase capacity that was now unavailable to competitors.

The episode is a useful data point in a debate that has become more relevant as AI tools for information synthesis improve: whether collective human intelligence operating in public forums produces better signal than formal analyst structures operating in private.

The original post's author was offered, and declined, consulting contracts from three firms after the crunch became public.`,
        category: "Community",
        source: "Reddit",
        sourceName: "Reddit",
        sourceUrl: "https://reddit.com/r/hardware",
        publishedAt: "2026-06-13T19:30:00Z",
        readTime: 5,
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
        tags: ["Reddit", "Supply Chain", "Nvidia", "Collective Intelligence"],
        aiSummary:
            "A December 2025 r/hardware thread accurately predicted the Nvidia H100 supply crunch six months before mainstream coverage. Domain experts aggregated Taiwan customs data, shipping weight anomalies, and job posting patterns to construct a coherent early warning. Multiple cloud operators acted on the thread's findings to secure capacity that later became unavailable.",
        relatedIds: ["1", "4", "9"],
    },
    {
        id: "9",
        title: "Apple's Vision Pro 2 Leaked Specs Point to a Consumer Pivot",
        summary:
            "Regulatory filings and supply chain reports suggest the second-generation Vision Pro trades enterprise ambitions for mainstream price targets.",
        content: `Regulatory filings in South Korea and Taiwan, combined with supply chain reports from multiple Asian manufacturers, are painting a consistent picture of Apple's second-generation Vision Pro: lighter, cheaper, and deliberately aimed at a different buyer than the original.

The original Vision Pro launched at $3,499 and positioned itself as a professional spatial computing device. Sales were solid among early adopters and enterprise pilots but fell short of the projections that had justified the product's reported $5 billion development cost.

The second-generation device, which internal Apple documents referenced in a Korean filing call "VP2," appears to target a $1,799–$1,999 price point. The weight reduction — estimated at 35% based on battery and display component specs — addresses the most common complaint from existing users.

Display resolution appears unchanged, which surprised some analysts who had expected Apple to use next-generation micro-OLED panels. The battery life improvement comes from a new chip architecture rather than increased capacity, which is consistent with weight reduction goals.

The developer ecosystem has matured enough that a consumer push is more defensible than it was in 2024. The App Store's spatial computing category has grown from a few dozen titles at launch to several thousand, and several productivity applications have achieved adoption rates that suggest genuine utility rather than novelty.

A consumer price point also puts VP2 in direct competition with Meta's Quest 4, which launched in April at $799. The gap remains significant, but the dynamics are different than the gap between the original Vision Pro and anything that existed at the time.`,
        category: "News",
        source: "News",
        sourceName: "9to5Mac",
        sourceUrl: "https://9to5mac.com",
        publishedAt: "2026-06-12T08:00:00Z",
        readTime: 5,
        imageUrl: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=1200&q=80",
        tags: ["Apple", "Vision Pro", "AR/VR", "Consumer Tech"],
        aiSummary:
            "Vision Pro 2 leaks suggest a $1,799–$1,999 consumer pivot with 35% weight reduction. Resolution appears unchanged; battery improvements come from new chip architecture. Developer ecosystem has grown to several thousand spatial computing apps. Competes directly with Meta Quest 4 ($799) for the first time.",
        relatedIds: ["1", "4", "10"],
    },
    {
        id: "10",
        title: "NBA Finals Game 7: Boston Celtics vs Oklahoma City Thunder",
        summary:
            "The Celtics and Thunder go to a deciding Game 7 after OKC's Shai Gilgeous-Alexander put up 44 points in a Game 6 comeback.",
        content: `The Boston Celtics and Oklahoma City Thunder will play a Game 7 on Sunday after Shai Gilgeous-Alexander's 44-point performance in Game 6 ended Boston's bid to close out the series on the road.

Gilgeous-Alexander's performance was the highest-scoring playoff game of his career and the fourth-highest in Finals history. He made 16 of his 24 field goal attempts, including 6 of 9 from three, and played all 48 minutes.

The Celtics led by 14 at halftime and held that lead until the fourth quarter, when OKC went on a 28-8 run over nine minutes. The collapse will be studied. Boston's defense in the fourth quarter switched schemes twice, and neither adjustment worked. Jayson Tatum, who had 28 points through three quarters, scored 2 in the fourth.

Game 7 will be played in Boston, giving the Celtics home-court advantage for the deciding game. In NBA Finals history, the home team wins Game 7 approximately 80% of the time.

The storylines are well established. Tatum has not had a signature Finals moment despite two appearances. OKC is playing in its first Finals since Kevin Durant's era, and a championship would be a validation of the rebuild that followed his departure. Gilgeous-Alexander, who turned 28 last month, is making a case that has grown clearer with each round.

Tip-off is Sunday at 8 PM Eastern. The last time the Finals went to Game 7 was 2016.`,
        category: "Sports",
        source: "News",
        sourceName: "ESPN",
        sourceUrl: "https://espn.com",
        publishedAt: "2026-06-17T07:00:00Z",
        readTime: 4,
        imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&q=80",
        tags: ["NBA", "Finals", "Celtics", "Thunder"],
        aiSummary:
            "Game 7 set after SGA's 44-point Game 6 comeback for OKC (16/24 FG, 6/9 3PT, 48 minutes). Boston collapsed in Q4 after leading by 14 at half. Game 7 in Boston where home teams win ~80% historically. Tatum still seeking a Finals signature moment; Gilgeous-Alexander making a strong case for series MVP regardless of outcome.",
        relatedIds: ["1", "8", "9"],
    },
];

export const getFeaturedArticle = (): Article => MOCK_ARTICLES[0];

export const getNewsSectionArticles = (): Article[] =>
    MOCK_ARTICLES.filter((a) => a.category === "News").slice(0, 4);

export const getResearchSectionArticles = (): Article[] =>
    MOCK_ARTICLES.filter((a) => a.category === "Research").slice(0, 3);

export const getDevelopersSectionArticles = (): Article[] =>
    MOCK_ARTICLES.filter((a) => a.category === "Developers").slice(0, 4);

export const getArticleById = (id: string): Article | undefined =>
    MOCK_ARTICLES.find((a) => a.id === id);

export const getRelatedArticles = (article: Article): Article[] =>
    article.relatedIds
        .map((id) => MOCK_ARTICLES.find((a) => a.id === id))
        .filter((a): a is Article => a !== undefined)
        .slice(0, 3);