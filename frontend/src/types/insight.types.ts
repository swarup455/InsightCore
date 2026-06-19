export type InsightSourceType =
    | "news"
    | "reddit"
    | "twitter"
    | "linkedin"
    | "github"
    | "research"
    | "blog"
    | "social";

export interface KeyInsight {
    id: string;
    label: string;
    content: string;
    icon?: string;
}

export interface RelatedArticle {
    id: string;
    title: string;
    source: string;
    url: string;
    snippet: string;
    publishedAt: string;
    imageUrl?: string;
}

export interface RelatedWebSource {
    id: string;
    title: string;
    description: string;
    url: string;
    domain: string;
    favicon?: string;
}

export interface Insight {
    id: string;
    url: string;
    title: string;
    source: string;
    sourceType: InsightSourceType;
    sourceDomain: string;
    summary: string;
    whyItMatters: string;
    keyInsights: KeyInsight[];
    relatedArticles: RelatedArticle[];
    relatedWebSources: RelatedWebSource[];
    tags: string[];
    createdAt: string;
    readTime: number;
    sentiment: "positive" | "neutral" | "negative" | "mixed";
    credibilityScore: number;
}