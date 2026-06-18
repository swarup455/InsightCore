import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
    Search,
    Brain,
    FileBarChart,
    TrendingUp,
    Settings,
    LogOut,
    User,
    Menu,
    X,
} from "lucide-react";

interface NavItem {
    icon: typeof Search;
    label: string;
    href: string;
}

const TOP_NAV: NavItem[] = [
    { icon: Search, label: "Search", href: "/dashboard" },
    { icon: Brain, label: "Analysis", href: "/dashboard/analysis" },
    { icon: FileBarChart, label: "Reports", href: "/dashboard/reports" },
    { icon: TrendingUp, label: "Trends", href: "/dashboard/trends" },
];

const BOTTOM_NAV: NavItem[] = [
    { icon: User, label: "Profile", href: "/dashboard/profile" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);

    const isActive = (href: string) => location.pathname === href;

    const NavContent = () => (
        <div className="flex h-full flex-col">
            {/* Logo */}
            <div className="flex h-16 items-center gap-2.5 px-4 border-b border-zinc-800">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-black" />
                </span>
                <span className="text-[15px] font-semibold tracking-tight text-white">InsightCore</span>
            </div>

            {/* Top nav */}
            <nav className="flex flex-col gap-0.5 p-3 flex-1">
                {TOP_NAV.map(({ icon: Icon, label, href }) => (
                    <button
                        key={label}
                        onClick={() => { navigate(href); setMobileOpen(false); }}
                        className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm transition-colors text-left ${isActive(href)
                                ? "bg-zinc-800 text-white"
                                : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900"
                            }`}
                    >
                        <Icon size={16} />
                        <span>{label}</span>
                    </button>
                ))}
            </nav>

            {/* Bottom nav */}
            <div className="border-t border-zinc-800 p-3 flex flex-col gap-0.5">
                {BOTTOM_NAV.map(({ icon: Icon, label, href }) => (
                    <button
                        key={label}
                        onClick={() => navigate(href)}
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900 transition-colors text-left"
                    >
                        <Icon size={16} />
                        <span>{label}</span>
                    </button>
                ))}
                <button
                    onClick={() => navigate("/login")}
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-zinc-500 hover:text-red-400 hover:bg-zinc-900 transition-colors text-left"
                >
                    <LogOut size={16} />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );

    return (
        <>
            {/* Mobile toggle */}
            <button
                className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 md:hidden"
                onClick={() => setMobileOpen((v) => !v)}
            >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

            {/* Mobile overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
                    onClick={() => setMobileOpen(false)}
                />
            )}

            {/* Mobile drawer */}
            <aside
                className={`fixed left-0 top-0 z-40 h-full w-56 bg-black border-r border-zinc-800 transition-transform duration-200 md:hidden ${mobileOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <NavContent />
            </aside>

            {/* Desktop sidebar */}
            <aside className="hidden md:flex w-56 shrink-0 flex-col h-screen sticky top-0 bg-black border-r border-zinc-800">
                <NavContent />
            </aside>
        </>
    );
}