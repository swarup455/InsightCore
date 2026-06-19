export interface PageMeta {
    title: string;
    subtitle: string;
}

const DEFAULT_META: PageMeta = {
    title: "InsightCore",
    subtitle: "AI-powered news intelligence",
};

const ROUTE_META: { test: (path: string) => boolean; meta: PageMeta }[] = [
    {
        test: (p) => p === "/" || p === "/home",
        meta: {
            title: "Home",
            subtitle: "Explore what's happening today",
        },
    },
    {
        test: (p) => p?.includes("/insight"),
        meta: {
            title: "Insight",
            subtitle: "Generate intelligence from any article",
        },
    },
    {
        test: (p) => p?.includes("/history"),
        meta: {
            title: "History",
            subtitle: "Review your previous insights",
        },
    },
    {
        test: (p) => p?.includes("/saved") || p?.includes("/bookmarks"),
        meta: {
            title: "Saved",
            subtitle: "Articles and insights you've kept",
        },
    },
    {
        test: (p) => p?.includes("/settings"),
        meta: {
            title: "Settings",
            subtitle: "Manage your account and preferences",
        },
    },
];

export function getPageMeta(pathname: string): PageMeta {
    const normalized = pathname?.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
    const match = ROUTE_META.find((route) => route.test(normalized));
    return match?.meta ?? DEFAULT_META;
}

export function usePageMeta(pathname: string): PageMeta {
    return getPageMeta(pathname);
}