import type { NavCategory } from "../../types/category.types";
import { NAV_CATEGORIES } from "../../types/category.types";

const CATEGORY_ICONS: Record<NavCategory, string> = {
  All: "🔎",
  News: "📰",
  Research: "🔬",
  Developers: "💻",
  Finance: "📈",
  Entertainment: "🎬",
  Sports: "⚽",
  Community: "💬",
  Discover: "🌍",
};

interface NavbarProps {
  activeCategory: NavCategory | "All";
  onCategoryChange: (category: NavCategory | "All") => void;
}

const ALL_CATEGORIES: (NavCategory | "All")[] = ["All", ...NAV_CATEGORIES];

export default function CategoryBar({ activeCategory, onCategoryChange }: NavbarProps) {
  return (
    <div className="border-b border-zinc-800 bg-black/90 backdrop-blur-md sticky top-0 z-20">
      <div className="flex items-center gap-2 px-6 py-3 overflow-x-auto scrollbar-hide">
        {ALL_CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${isActive
                ? "bg-white text-black"
                : "bg-zinc-950 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-800"
                }`}
            >
              {category !== "All" && (
                <span className="text-sm leading-none">{CATEGORY_ICONS[category as NavCategory]}</span>
              )}
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}