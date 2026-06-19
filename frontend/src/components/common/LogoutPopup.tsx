import { useEffect, useId, useRef } from "react";
import { LogOut } from "lucide-react";

export interface LogoutPopupProps {
    open: boolean;
    userName?: string;
    onConfirm: () => void;
    onCancel: () => void;
}

export default function LogoutPopup({
    open,
    userName,
    onConfirm,
    onCancel,
}: LogoutPopupProps) {
    const dialogRef = useRef<HTMLDivElement>(null);
    const confirmRef = useRef<HTMLButtonElement>(null);
    const titleId = useId();
    const descId = useId();

    // Focus the confirm button when the dialog opens
    useEffect(() => {
        if (open) {
            requestAnimationFrame(() => confirmRef.current?.focus());
        }
    }, [open]);

    // Escape to cancel, basic focus trap
    useEffect(() => {
        if (!open) return;

        function handleKey(e: KeyboardEvent) {
            if (e.key === "Escape") {
                e.preventDefault();
                onCancel();
                return;
            }
            if (e.key === "Tab" && dialogRef.current) {
                const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
                    'button:not(:disabled)'
                );
                if (focusable.length === 0) return;
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        }

        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [open, onCancel]);

    // Lock background scroll while open
    useEffect(() => {
        if (!open) return;
        const original = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = original;
        };
    }, [open]);

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-in fade-in duration-150"
            onMouseDown={(e) => {
                if (e.target === e.currentTarget) onCancel();
            }}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" aria-hidden="true" />

            {/* Panel */}
            <div
                ref={dialogRef}
                role="alertdialog"
                aria-modal="true"
                aria-labelledby={titleId}
                aria-describedby={descId}
                className="relative w-full max-w-[340px] rounded-xl border border-zinc-800 bg-zinc-950 p-5 shadow-2xl shadow-black/40 animate-in fade-in zoom-in-95 duration-150"
            >
                <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900">
                        <LogOut size={15} strokeWidth={1.75} className="text-zinc-400" />
                    </span>
                    <div className="min-w-0 flex-1 pt-0.5">
                        <h2 id={titleId} className="text-sm font-medium text-zinc-100">
                            Log out{userName ? ` of ${userName}'s account` : ""}?
                        </h2>
                        <p id={descId} className="mt-1 text-xs leading-relaxed text-zinc-500">
                            You'll need to sign in again to access your insights and history.
                        </p>
                    </div>
                </div>

                <div className="mt-5 flex items-center justify-end gap-2">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-zinc-600"
                    >
                        Cancel
                    </button>
                    <button
                        ref={confirmRef}
                        type="button"
                        onClick={onConfirm}
                        className="rounded-lg border border-red-900/60 bg-red-950/40 px-3 py-1.5 text-sm font-medium text-red-400 transition-colors hover:border-red-800 hover:bg-red-950/70 hover:text-red-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-red-700"
                    >
                        Log out
                    </button>
                </div>
            </div>
        </div>
    );
}