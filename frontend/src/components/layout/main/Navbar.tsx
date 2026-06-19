import { Menu, Sparkles } from "lucide-react";
import AvatarDropdown from "./AvatarDropdown";
import { getPageMeta } from "../../../data/getPageMeta";
import { useNavigate } from "react-router-dom";

export interface NavbarProps {
  /** Current pathname, used to resolve title + subtitle. e.g. from useLocation().pathname */
  pathname: string;
  onMenuClick: () => void;
  userName?: string;
  userEmail?: string;
  avatarUrl?: string;
  plan?: string;
  /** Show the upgrade CTA. Hide for users already on the top plan. */
  showUpgrade?: boolean;
  onUpgradeClick?: () => void;
  /** Optional center status, e.g. live AI processing indicator. Omit to keep the bar empty. */
  aiStatus?: "idle" | "processing" | "ready";
  onProfile?: () => void;
  onSettings?: () => void;
  onAbout?: () => void;
  onContact?: () => void;
  onFeedback?: () => void;
  onRoadmap?: () => void;
  onLogout?: () => void;
}

export default function Navbar({
  pathname,
  onMenuClick,
  userName = "User",
  userEmail,
  avatarUrl,
  plan = "Free plan",
  showUpgrade = true,
  onProfile,
  onSettings,
  onAbout,
  onContact,
  onFeedback,
  onRoadmap,
  onLogout,
}: NavbarProps) {
  const { title, subtitle } = getPageMeta(pathname);
  const navigate = useNavigate();

  return (
    <header className="flex h-14 items-center justify-between border-b border-zinc-800 bg-black px-4 sm:px-6">
      {/* Left section */}
      <div className="flex min-w-0 items-center gap-3">
        <button
          onClick={onMenuClick}
          aria-label="Open sidebar menu"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-zinc-300 md:hidden"
        >
          <Menu size={18} />
        </button>

        <div className="min-w-0 leading-tight">
          <h1 className="truncate text-[15px] font-semibold tracking-tight text-zinc-100">
            {title}
          </h1>
          <p className="hidden truncate text-xs text-zinc-500 sm:block">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Right section */}
      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        {showUpgrade && (
          <button
            onClick={() => navigate("/dashboard/upgrade")}
            aria-label="Upgrade plan"
            className="flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white"
          >
            <Sparkles size={13} className="text-zinc-500" />
            <span className="hidden sm:inline">Upgrade</span>
          </button>
        )}

        <AvatarDropdown
          userName={userName}
          userEmail={userEmail}
          avatarUrl={avatarUrl}
          plan={plan}
          onProfile={onProfile}
          onSettings={onSettings}
          onAbout={onAbout}
          onContact={onContact}
          onFeedback={onFeedback}
          onRoadmap={onRoadmap}
          onLogout={onLogout}
        />
      </div>
    </header>
  );
}