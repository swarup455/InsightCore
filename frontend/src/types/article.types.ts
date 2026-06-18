export type ArticleCategory =
    | "News"
    | "Research"
    | "Developers"
    | "Finance"
    | "Entertainment"
    | "Sports"
    | "Community"
    | "Discover";

export type ArticleSource =
    | "News"
    | "Research"
    | "GitHub"
    | "Reddit"
    | "Markets"
    | "Web";

export interface Article {
    id: string;
    title: string;
    summary: string;
    content: string;
    category: ArticleCategory;
    source: ArticleSource;
    sourceName: string;
    sourceUrl: string;
    publishedAt: string;
    readTime: number;
    imageUrl: string;
    tags: string[];
    aiSummary: string;
    relatedIds: string[];
}