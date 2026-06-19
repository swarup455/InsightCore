const BASE_URL = "https://insightcore.app";

export function generateShareLink(insightId: string): string {
    return `${BASE_URL}/insight/${insightId}`;
}

export async function copyShareLink(insightId: string): Promise<boolean> {
    const link = generateShareLink(insightId);
    try {
        await navigator.clipboard.writeText(link);
        return true;
    } catch {
        return false;
    }
}