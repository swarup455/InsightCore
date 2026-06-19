import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import {
    User,
    Settings,
    Info,
    Mail,
    MessageSquareText,
    Map,
    LogOut,
} from "lucide-react";

export interface AvatarDropdownProps {
    userName?: string;
    userEmail?: string;
    avatarUrl?: string;
    plan?: string;
    onProfile?: () => void;
    onSettings?: () => void;
    onAbout?: () => void;
    onContact?: () => void;
    onFeedback?: () => void;
    onRoadmap?: () => void;
    onLogout?: () => void;
}

interface MenuItem {
    key: string;
    label: string;
    icon: typeof User;
    onSelect?: () => void;
    /** Visually + semantically separated, e.g. destructive actions */
    variant?: "default" | "danger";
}

function getInitials(name: string): string {
    return name
        .split(" ")
        .filter(Boolean)
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
}

export default function AvatarDropdown({
    userName = "User",
    userEmail,
    avatarUrl,
    plan = "Free plan",
    onProfile,
    onSettings,
    onAbout,
    onContact,
    onFeedback,
    onRoadmap,
    onLogout,
}: AvatarDropdownProps) {
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const menuId = useId();
    const initials = getInitials(userName);

    const primaryItems: MenuItem[] = [
        { key: "profile", label: "Profile", icon: User, onSelect: onProfile },
        { key: "settings", label: "Settings", icon: Settings, onSelect: onSettings },
    ];

    const infoItems: MenuItem[] = [
        { key: "about", label: "About InsightCore", icon: Info, onSelect: onAbout },
        { key: "contact", label: "Contact", icon: Mail, onSelect: onContact },
        { key: "feedback", label: "Feedback", icon: MessageSquareText, onSelect: onFeedback },
        { key: "roadmap", label: "Roadmap", icon: Map, onSelect: onRoadmap },
    ];

    const dangerItems: MenuItem[] = [
        { key: "logout", label: "Log out", icon: LogOut, onSelect: onLogout, variant: "danger" },
    ];

    const allItems = [...primaryItems, ...infoItems, ...dangerItems];

    // Close on outside click
    useEffect(() => {
        if (!open) return;
        function handleClick(e: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [open]);

    // Close on Escape, return focus to trigger
    useEffect(() => {
        if (!open) return;
        function handleKey(e: globalThis.KeyboardEvent) {
            if (e.key === "Escape") {
                setOpen(false);
                triggerRef.current?.focus();
            }
        }
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [open]);

    // Focus first item when opened
    useEffect(() => {
        if (open) {
            setActiveIndex(0);
            requestAnimationFrame(() => itemRefs.current[0]?.focus());
        }
    }, [open]);

    function handleTriggerKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
        if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
        }
    }

    function handleMenuKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            const next = (activeIndex + 1) % allItems.length;
            setActiveIndex(next);
            itemRefs.current[next]?.focus();
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            const prev = (activeIndex - 1 + allItems.length) % allItems.length;
            setActiveIndex(prev);
            itemRefs.current[prev]?.focus();
        } else if (e.key === "Tab") {
            setOpen(false);
        }
    }

    function select(item: MenuItem) {
        setOpen(false);
        triggerRef.current?.focus();
        item.onSelect?.();
    }

    function renderItem(item: MenuItem, index: number) {
        const Icon = item.icon;
        const isDanger = item.variant === "danger";
        return (
            <button
                key={item.key}
                ref={(el) => (itemRefs.current[index] = el)}
                role="menuitem"
                tabIndex={-1}
                onClick={() => select(item)}
                onKeyDown={handleMenuKeyDown}
                className={`flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition-colors focus:outline-none focus-visible:bg-zinc-800/80 ${isDanger
                        ? "text-zinc-400 hover:bg-red-950/40 hover:text-red-400"
                        : "text-zinc-300 hover:bg-zinc-800/80 hover:text-white"
                    }`}
            >
                <Icon
                    size={15}
                    strokeWidth={1.75}
                    className={isDanger ? "text-zinc-500" : "text-zinc-500"}
                />
                {item.label}
            </button>
        );
    }

    return (
        <div ref={containerRef} className="relative">
            <button
                ref={triggerRef}
                onClick={() => setOpen((v) => !v)}
                onKeyDown={handleTriggerKeyDown}
                aria-label="User profile"
                aria-haspopup="menu"
                aria-expanded={open}
                aria-controls={menuId}
                className={`h-8 w-8 flex-shrink-0 overflow-hidden rounded-full border transition-colors ${open
                        ? "border-zinc-600"
                        : "border-zinc-800 hover:border-zinc-600"
                    }`}
            >
                {avatarUrl ? (
                    <img src={avatarUrl} alt={userName} className="h-full w-full object-cover" />
                ) : (
                    <span className="flex h-full w-full items-center justify-center bg-zinc-900 text-[11px] font-medium text-zinc-400">
                        {initials}
                    </span>
                )}
            </button>

            {open && (
                <div
                    id={menuId}
                    role="menu"
                    aria-label="Account menu"
                    className="absolute right-0 z-50 mt-2 w-64 origin-top-right rounded-xl border border-zinc-800 bg-zinc-950 p-1.5 shadow-2xl shadow-black/40 animate-in fade-in slide-in-from-top-1 duration-150"
                >
                    {/* Identity header */}
                    <div className="flex items-center gap-3 px-2.5 py-2.5">
                        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-zinc-800 bg-zinc-900 text-[11px] font-medium text-zinc-400">
                            {avatarUrl ? (
                                <img src={avatarUrl} alt={userName} className="h-full w-full object-cover" />
                            ) : (
                                initials
                            )}
                        </span>
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-zinc-100">{userName}</p>
                            {userEmail ? (
                                <p className="truncate text-xs text-zinc-500">{userEmail}</p>
                            ) : null}
                        </div>
                    </div>

                    <div className="flex items-center justify-between px-2.5 pb-2">
                        <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-[11px] font-medium text-zinc-400">
                            {plan}
                        </span>
                    </div>

                    <div className="my-1 h-px bg-zinc-800" />

                    <div className="flex flex-col gap-0.5 py-1">
                        {primaryItems.map((item, i) => renderItem(item, i))}
                    </div>

                    <div className="my-1 h-px bg-zinc-800" />

                    <div className="flex flex-col gap-0.5 py-1">
                        {infoItems.map((item, i) => renderItem(item, primaryItems.length + i))}
                    </div>

                    <div className="my-1 h-px bg-zinc-800" />

                    <div className="flex flex-col gap-0.5 pt-1">
                        {dangerItems.map((item, i) =>
                            renderItem(item, primaryItems.length + infoItems.length + i)
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}