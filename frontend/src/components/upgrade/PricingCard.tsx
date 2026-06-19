import { Check, X } from "lucide-react";
import type { PricingPlan } from "../../data/pricingPlans.ts";

interface PricingCardProps {
    plan: PricingPlan;
    isCurrentPlan: boolean;
    onSelect: (planId: PricingPlan["id"]) => void;
}

export default function PricingCard({ plan, isCurrentPlan, onSelect }: PricingCardProps) {
    const disabled = plan.id === "free" && isCurrentPlan;

    return (
        <div
            className={`relative flex flex-col rounded-xl border p-7 transition-colors ${plan.highlighted
                ? "border-zinc-700 bg-zinc-900/80 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_24px_60px_-20px_rgba(0,0,0,0.6)]"
                : "border-zinc-800 bg-zinc-950"
                }`}
        >
            {plan.badge && (
                <span className="absolute -top-3 left-7 rounded-full border border-zinc-700 bg-zinc-900 px-2.5 py-0.5 text-[11px] font-medium text-zinc-300">
                    {plan.badge}
                </span>
            )}

            <div className="mb-5">
                <h3 className="text-sm font-medium text-zinc-300">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-3xl font-semibold tracking-tight text-white">{plan.price}</span>
                    <span className="text-sm text-zinc-500">{plan.cadence}</span>
                </div>
                <p className="mt-2 text-sm text-zinc-500">{plan.description}</p>
            </div>

            <ul className="mb-7 flex flex-1 flex-col gap-2.5">
                {plan.features.map((feature: any) => (
                    <li key={feature.label} className="flex items-start gap-2.5 text-sm text-zinc-400">
                        {feature?.disabled ?
                            <X size={15} className="mt-0.5 shrink-0 text-zinc-500" />
                            :
                            <Check size={15} className="mt-0.5 shrink-0 text-zinc-500" />
                        }
                        <span>{feature.label}</span>
                    </li>
                ))}
            </ul>

            <button
                onClick={() => onSelect(plan.id)}
                disabled={disabled}
                className={`w-full rounded-lg py-2.5 text-sm font-medium transition-colors ${disabled
                    ? "cursor-not-allowed border border-zinc-800 bg-zinc-950 text-zinc-600"
                    : plan.highlighted
                        ? "bg-white text-zinc-950 hover:bg-zinc-200"
                        : "border border-zinc-800 bg-zinc-900 text-zinc-200 hover:border-zinc-700 hover:text-white"
                    }`}
            >
                {disabled ? "Current plan" : plan.cta}
            </button>
        </div>
    );
}