export function isValidUrl(input: string): boolean {
    if (!input || input.trim() === "") return false;
    try {
        const url = new URL(input.trim());
        return url.protocol === "http:" || url.protocol === "https:";
    } catch {
        return false;
    }
}

export function extractDomain(url: string): string {
    try {
        return new URL(url).hostname.replace("www.", "");
    } catch {
        return url;
    }
}

export type SupportedSource =
    | "reddit"
    | "twitter"
    | "github"
    | "arxiv"
    | "linkedin"
    | "news"
    | "blog"
    | "unknown";

export function detectSourceType(url: string): SupportedSource {
    try {
        const { hostname } = new URL(url);
        const h = hostname.toLowerCase();
        if (h.includes("reddit.com")) return "reddit";
        if (h.includes("x.com") || h.includes("twitter.com")) return "twitter";
        if (h.includes("github.com")) return "github";
        if (h.includes("arxiv.org")) return "arxiv";
        if (h.includes("linkedin.com")) return "linkedin";
        return "blog";
    } catch {
        return "unknown";
    }
}