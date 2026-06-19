export interface PlanFeature {
    label: string;
    disabled: boolean;
}

export interface PricingPlan {
    id: "free" | "pro";
    name: string;
    price: string;
    cadence: string;
    description: string;
    features: PlanFeature[];
    cta: string;
    highlighted?: boolean;
    badge?: string;
}

export const PRICING_PLANS: PricingPlan[] = [
    {
        id: "free",
        name: "Free",
        price: "₹0",
        cadence: "/month",
        description: "For trying things out.",
        features: [
            { label: "1 active topic", disabled: false },
            { label: "5 created topics", disabled: false },
            { label: "Hourly monitoring", disabled: false },
            { label: "Content discovery", disabled: false },
            { label: "URL analysis", disabled: false },
            { label: "Event timeline", disabled: false },
            { label: "In-app notifications", disabled: false },
            { label: "Bookmark articles & insights", disabled: false },

            { label: "Real-time web search", disabled: true },
            { label: "Advanced analysis", disabled: true },
            { label: "Custom collections", disabled: true },
            { label: "External alert channels", disabled: true },
        ],
        cta: "Current plan",
    },
    {
        id: "pro",
        name: "Pro",
        price: "₹49",
        cadence: "/month",
        description: "For staying ahead of what matters.",
        features: [
            { label: "5 active topics", disabled: false },
            { label: "10 created topics", disabled: false },
            { label: "15-minute monitoring", disabled: false },
            { label: "Content discovery", disabled: false },
            { label: "Advanced URL analysis", disabled: false },
            { label: "Event timeline", disabled: false },
            { label: "In-app notifications", disabled: false },
            { label: "Bookmark articles & insights", disabled: false },

            { label: "Real-time web search", disabled: false },
            { label: "Custom collections", disabled: false },
            { label: "External alert channels(Whatsapp, Telegram etc.)", disabled: false },
        ],
        cta: "Upgrade to Pro",
        highlighted: true,
        badge: "Most popular",
    },
];

export interface ComparisonRow {
    label: string;
    free: string;
    pro: string;
}

export const COMPARISON_ROWS: ComparisonRow[] = [
    { label: "Active topics", free: "1", pro: "5" },
    { label: "Created topics", free: "5", pro: "10" },
    { label: "Monitoring frequency", free: "Hourly", pro: "15 min" },
    { label: "Content discovery", free: "Included", pro: "Included" },
    { label: "Analysis", free: "Basic", pro: "Advanced" },
    { label: "Event timeline", free: "Included", pro: "Included" },
    { label: "Bookmarks", free: "Included", pro: "Included" },
    { label: "Real-time web search", free: "Not included", pro: "Included" },
    { label: "Custom collections", free: "Not included", pro: "Included" },
    { label: "Alert channels", free: "In-app only", pro: "Any 3 channels" },
];

export const ALL_CHANNELS = ["WhatsApp", "Telegram", "Email", "Browser push"] as const;
export type ChannelType = (typeof ALL_CHANNELS)[number];

export interface ChannelSlot {
    id: string;
    channel: ChannelType;
}

export const DEFAULT_CHANNEL_SLOTS: ChannelSlot[] = [
    { id: "slot-1", channel: "WhatsApp" },
    { id: "slot-2", channel: "WhatsApp" },
    { id: "slot-3", channel: "Telegram" },
];

export interface ChannelPreset {
    id: string;
    label: string;
    channels: ChannelType[];
}

export const CHANNEL_PRESETS: ChannelPreset[] = [
    { id: "preset-1", label: "All in on WhatsApp", channels: ["WhatsApp", "WhatsApp", "WhatsApp"] },
    { id: "preset-2", label: "Mostly WhatsApp", channels: ["WhatsApp", "WhatsApp", "Telegram"] },
    { id: "preset-3", label: "Spread across channels", channels: ["WhatsApp", "Email", "Browser push"] },
];

export interface FAQItem {
    question: string;
    answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
    {
        question: "What happens when I upgrade?",
        answer:
            "Your account moves to Pro limits immediately. Monitoring frequency switches to 15 minutes, and you can activate up to 5 topics right away — nothing needs to be reconfigured.",
    },
    {
        question: "Can I cancel anytime?",
        answer:
            "Yes. Cancel from your billing settings whenever you like. You'll keep Pro access until the end of your current billing period, then move back to Free automatically.",
    },
    {
        question: "Will my existing topics remain?",
        answer:
            "All your topics, history, and analyses stay exactly as they are. If you later move back to Free and have more than 1 active topic, you'll choose which one stays active.",
    },
    {
        question: "How do alert channels work?",
        answer:
            "Pick any 3 channels from WhatsApp, Telegram, Email, and Browser push. You can mix and match — for example, two WhatsApp numbers and one Telegram chat — and change your selection at any time.",
    },
    {
        question: "Can I use multiple WhatsApp numbers?",
        answer:
            "Yes. Each WhatsApp connection counts as one channel slot, so on Pro you could connect up to 3 separate WhatsApp numbers if that's how your team prefers to stay informed.",
    },
];