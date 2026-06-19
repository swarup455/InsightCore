import { LifeBuoy, Mail, MessageSquare } from "lucide-react";

export function HelpCard() {
    return (
        <div className="flex flex-col items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-950 p-6 transition-colors hover:border-zinc-700 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                    <LifeBuoy size={16} className="text-zinc-400" />
                </div>
                <div>
                    <h3 className="text-sm font-medium text-white">Need help?</h3>
                    <p className="text-sm text-zinc-500">Browse guides, FAQs, and setup instructions.</p>
                </div>
            </div>
            <button className="w-full shrink-0 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:text-white sm:w-auto">
                Visit help center
            </button>
        </div>
    );
}

export function ContactCard() {
    return (
        <div className="flex flex-col items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-950 p-6 transition-colors hover:border-zinc-700 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                    <MessageSquare size={16} className="text-zinc-400" />
                </div>
                <div>
                    <h3 className="text-sm font-medium text-white">Questions about Pro?</h3>
                    <p className="text-sm text-zinc-500">Our team is happy to help.</p>
                </div>
            </div>
            <div className="flex w-full shrink-0 gap-2.5 sm:w-auto">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:text-white sm:flex-none">
                    <Mail size={14} />
                    Email support
                </button>
                <button className="flex-1 rounded-lg bg-white px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200 sm:flex-none">
                    Contact us
                </button>
            </div>
        </div>
    );
}