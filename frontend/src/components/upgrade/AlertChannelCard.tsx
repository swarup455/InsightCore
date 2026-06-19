import { MessageCircle, Send, Mail, Bell, type LucideIcon } from "lucide-react";
import {
    ALL_CHANNELS,
    type ChannelSlot,
    type ChannelType,
    type ChannelPreset,
} from "../../data/pricingPlans";

const CHANNEL_ICON: Record<ChannelType, LucideIcon> = {
    WhatsApp: MessageCircle,
    Telegram: Send,
    Email: Mail,
    "Browser push": Bell,
};

interface ChannelSlotPickerProps {
    slots: ChannelSlot[];
    onChangeSlot: (slotId: string, channel: ChannelType) => void;
}

export function ChannelSlotPicker({ slots, onChangeSlot }: ChannelSlotPickerProps) {
    return (
        <div className="grid sm:grid-cols-3 gap-3">
            {slots.map((slot, idx) => {
                const Icon = CHANNEL_ICON[slot.channel];
                return (
                    <div
                        key={slot.id}
                        className="flex items-center gap-2.5 rounded-lg border border-zinc-800 bg-zinc-900 px-3.5 py-2.5"
                    >
                        <span className="text-xs text-zinc-600 shrink-0">{idx + 1}</span>
                        <Icon size={14} className="text-zinc-500 shrink-0" />
                        <select
                            value={slot.channel}
                            onChange={(e) => onChangeSlot(slot.id, e.target.value as ChannelType)}
                            className="flex-1 bg-transparent text-sm text-zinc-300 outline-none cursor-pointer"
                        >
                            {ALL_CHANNELS.map((channel) => (
                                <option key={channel} value={channel} className="bg-zinc-900">
                                    {channel}
                                </option>
                            ))}
                        </select>
                    </div>
                );
            })}
        </div>
    );
}

interface ChannelPresetCardProps {
    preset: ChannelPreset;
}

export function ChannelPresetCard({ preset }: ChannelPresetCardProps) {
    return (
        <button
            className={"text-left rounded-xl border p-5 transition-colors border-zinc-800 bg-zinc-950 hover:border-zinc-700"}
        >
            <p className="mb-4 text-sm font-medium text-zinc-300">{preset.label}</p>
            <div className="flex flex-col gap-2">
                {preset.channels.map((channel, idx) => {
                    const Icon = CHANNEL_ICON[channel];
                    return (
                        <div
                            key={`${preset.id}-${idx}`}
                            className="flex items-center gap-2.5 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2"
                        >
                            <Icon size={14} className="text-zinc-500" />
                            <span className="text-sm text-zinc-400">{channel}</span>
                        </div>
                    );
                })}
            </div>
        </button>
    );
}