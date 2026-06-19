import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { User, Mail, Lock, ArrowRight, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

/* --------------------------- Animation --------------------------- */

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: EASE },
    },
};

const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08 },
    },
};

/* ----------------------------- Component ----------------------------- */

export default function RegisterPage() {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // UI only — no auth logic
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-16 font-sans text-white antialiased selection:bg-white selection:text-black">
            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[800px] -translate-x-1/2 rounded-full bg-zinc-800/20 blur-3xl"
            />

            <div className="relative w-full max-w-md">
                {/* Logo */}
                <button
                    onClick={() => navigate("/")}
                    className="mb-3 flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-400 transition-all hover:border-zinc-700 hover:text-white"
                >
                    <ArrowLeft size={16} />
                    <span>Home</span>
                </button>

                {/* Card */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl shadow-black/40 sm:p-10"
                >
                    <motion.div variants={fadeUp} className="text-center">
                        <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                            Create your account
                        </h1>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                            Start turning information into intelligence.
                        </p>
                    </motion.div>

                    <motion.form
                        variants={fadeUp}
                        onSubmit={handleSubmit}
                        className="mt-8 space-y-4"
                    >
                        {/* Full Name */}
                        <div>
                            <label
                                htmlFor="fullName"
                                className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-zinc-500"
                            >
                                Full Name
                            </label>
                            <div className="relative">
                                <User
                                    size={15}
                                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500"
                                />
                                <input
                                    id="fullName"
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder="Jane Doe"
                                    className="w-full rounded-lg border border-zinc-800 bg-zinc-900 py-2.5 pl-10 pr-3.5 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-zinc-600 focus:bg-zinc-900/80"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-zinc-500"
                            >
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail
                                    size={15}
                                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500"
                                />
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="w-full rounded-lg border border-zinc-800 bg-zinc-900 py-2.5 pl-10 pr-3.5 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-zinc-600 focus:bg-zinc-900/80"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-zinc-500"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <Lock
                                    size={15}
                                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500"
                                />
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full rounded-lg border border-zinc-800 bg-zinc-900 py-2.5 pl-10 pr-10 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-zinc-600 focus:bg-zinc-900/80"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((v) => !v)}
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 transition-colors hover:text-zinc-300"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                                </button>
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
                        >
                            Create Account
                            <ArrowRight
                                size={15}
                                className="transition-transform group-hover:translate-x-0.5"
                            />
                        </button>
                    </motion.form>

                    {/* Divider */}
                    <motion.div variants={fadeUp} className="my-6 flex items-center gap-3">
                        <span className="h-px flex-1 bg-zinc-800" />
                        <span className="text-xs text-zinc-500">or</span>
                        <span className="h-px flex-1 bg-zinc-800" />
                    </motion.div>

                    {/* Google */}
                    <motion.button
                        variants={fadeUp}
                        type="button"
                        className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg border border-zinc-700 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-900"
                    >
                        <FcGoogle size={16} />
                        Continue with Google
                    </motion.button>
                </motion.div>

                {/* Footer */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="mt-8 text-center text-sm text-zinc-400"
                >
                    Already have an account?{" "}
                    <button
                        onClick={() => navigate("/login")}
                        className="font-medium text-white transition-colors hover:text-zinc-300"
                    >
                        Login
                    </button>
                </motion.p>
            </div>
        </div>
    );
}