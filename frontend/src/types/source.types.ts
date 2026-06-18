export interface Source {
    id: string;
    name: string;
    domain: string;
    category: string;
    logoUrl?: string;
}

export const SEARCH_SOURCES = [
    "News",
    "Research",
    "GitHub",
    "Reddit",
    "Markets",
    "Web",
] as const;

export type SearchSource = (typeof SEARCH_SOURCES)[number];