import { COMPARISON_ROWS } from "../../data/pricingPlans.ts";

export default function ComparisonTable() {
    return (
        <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
            <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-zinc-800 px-5 py-3 text-xs font-medium uppercase tracking-wide text-zinc-500">
                <span>Feature</span>
                <span className="text-center">Free</span>
                <span className="text-center">Pro</span>
            </div>
            {COMPARISON_ROWS.map((row, idx) => (
                <div
                    key={row.label}
                    className={`grid grid-cols-[1.4fr_1fr_1fr] items-center px-5 py-3.5 text-sm ${idx !== COMPARISON_ROWS.length - 1 ? "border-b border-zinc-800/70" : ""
                        }`}
                >
                    <span className="text-zinc-300">{row.label}</span>
                    <span className="text-center text-zinc-500">{row.free}</span>
                    <span className="text-center font-medium text-white">{row.pro}</span>
                </div>
            ))}
        </div>
    );
}