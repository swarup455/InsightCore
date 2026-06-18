import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchHero() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <div className="px-6 py-5 border-b border-zinc-800 bg-black sticky">
      <div
        className={`flex items-center gap-3 rounded-xl border bg-zinc-950 px-4 py-3 transition-colors ${focused ? "border-zinc-600" : "border-zinc-800"
          }`}
      >
        <Search size={16} className="text-zinc-500 shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="What's driving the AI infrastructure boom in 2026?"
          className="flex-1 bg-transparent text-sm text-zinc-200 placeholder:text-zinc-600 outline-none"
        />
        {query && (
          <button className="shrink-0 rounded-md bg-white px-3 py-1.5 text-xs font-medium text-black hover:bg-zinc-200 transition-colors">
            Search
          </button>
        )}
      </div>
    </div>
  );
}