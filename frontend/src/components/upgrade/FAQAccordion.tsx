import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "../../data/pricingPlans.ts";

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
            {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                    <div
                        key={item.question}
                        className={idx !== FAQ_ITEMS.length - 1 ? "border-b border-zinc-800/70" : ""}
                    >
                        <button
                            onClick={() => setOpenIndex(isOpen ? null : idx)}
                            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-zinc-900/50"
                            aria-expanded={isOpen}
                        >
                            <span className="text-sm font-medium text-zinc-200">{item.question}</span>
                            <ChevronDown
                                size={15}
                                className={`shrink-0 text-zinc-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-40" : "max-h-0"
                                }`}
                        >
                            <p className="px-5 pb-4 text-sm leading-relaxed text-zinc-500">{item.answer}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}