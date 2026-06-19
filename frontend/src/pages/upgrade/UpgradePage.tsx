import { useNavigate } from "react-router-dom";
import { ArrowLeft, Layers, Zap, Bell as BellIcon } from "lucide-react";
import { useState } from "react";
import PricingCard from "../../components/upgrade/PricingCard";
import FeatureCard from "../../components/upgrade/FeatureCard";
import { ChannelPresetCard } from "../../components/upgrade/AlertChannelCard";
import ComparisonTable from "../../components/upgrade/ComparisonTable";
import { HelpCard, ContactCard } from "../../components/upgrade/SupportCards";
import FAQAccordion from "../../components/upgrade/FAQAccordion";
import { PRICING_PLANS, CHANNEL_PRESETS } from "../../data/pricingPlans";
import type { PricingPlan } from "../../data/pricingPlans";

export default function UpgradePage() {
    const navigate = useNavigate();
    const [currentPlan] = useState<PricingPlan["id"]>("free");

    const handleSelectPlan = (planId: PricingPlan["id"]) => {
        if (planId === "pro") {
            // Hook up to billing flow.
            console.log("Initiate upgrade to Pro");
        }
    };

    return (
        <div className="max-w-5xl mx-auto px-6 py-8 pb-20">
            {/* Back */}
            <button
                onClick={() => navigate("/dashboard")}
                className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-8"
            >
                <ArrowLeft size={15} />
                Back to dashboard
            </button>

            {/* Hero */}
            <section className="relative text-center mb-16">
                <div
                    aria-hidden
                    className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 h-56 w-[28rem] rounded-full bg-zinc-700/10 blur-3xl"
                />
                <div className="relative">
                    <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-3">
                        Upgrade to Pro
                    </h1>
                    <p className="text-sm sm:text-base text-zinc-500 max-w-md mx-auto mb-5">
                        Monitor more topics, search the live web, unlock advanced AI analysis,
                        and receive important updates through your favorite channels.
                    </p>
                    <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-300">
                        Only ₹49/month
                    </span>
                </div>
            </section>

            {/* Pricing */}
            <section className="mb-20">
                <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
                    {PRICING_PLANS.map((plan) => (
                        <PricingCard
                            key={plan.id}
                            plan={plan}
                            isCurrentPlan={plan.id === currentPlan}
                            onSelect={handleSelectPlan}
                        />
                    ))}
                </div>
            </section>

            {/* Alert channels */}
            <section className="mb-20">
                <div className="text-center mb-8">
                    <h2 className="text-xl font-semibold tracking-tight text-white mb-1.5">
                        Choose any 3 alert channels
                    </h2>
                    <p className="text-sm text-zinc-500">Get updates where you already spend your time.</p>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                    {CHANNEL_PRESETS.map((preset) => (
                        <ChannelPresetCard
                            key={preset.id}
                            preset={preset}
                        />
                    ))}
                </div>
            </section>

            {/* Why upgrade */}
            <section className="mb-20">
                <h2 className="text-xl font-semibold tracking-tight text-white text-center mb-8">
                    Why upgrade
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                    <FeatureCard
                        icon={Layers}
                        title="More topics"
                        description="Track up to 5 topics simultaneously and never miss important developments."
                    />
                    <FeatureCard
                        icon={Zap}
                        title="Faster updates"
                        description="Receive updates every 15 minutes instead of waiting for hourly scans."
                    />
                    <FeatureCard
                        icon={BellIcon}
                        title="Alerts everywhere"
                        description="Get notified through your preferred channels the moment something important happens."
                    />
                </div>
            </section>

            {/* Comparison */}
            <section className="mb-20">
                <h2 className="text-xl font-semibold tracking-tight text-white text-center mb-8">
                    Compare plans
                </h2>
                <ComparisonTable />
            </section>

            {/* Support */}
            <section className="mb-20 flex flex-col gap-4">
                <HelpCard />
                <ContactCard />
            </section>

            {/* FAQ */}
            <section>
                <h2 className="text-xl font-semibold tracking-tight text-white text-center mb-8">
                    Frequently asked questions
                </h2>
                <FAQAccordion />
            </section>
        </div>
    );
}