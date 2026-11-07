
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  Sparkles,
  Globe,
  ShieldCheck,
  Zap,
  Clock,
  ExternalLink,
  FileText,
  BarChart3,
  BrainCircuit,
  Menu,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Globe,
    title: "Real-time Information",
    description: "Get the latest data from the web",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Sources",
    description: "Cited links and credible references",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Zap,
    title: "AI-Powered Analysis",
    description: "Clear, structured summaries",
    color: "bg-violet-100 text-violet-600",
  },
  {
    icon: Sparkles,
    title: "Save Time",
    description: "Get comprehensive insights in minutes",
    color: "bg-purple-100 text-purple-600",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const floatAnimation = {
  y: [0, -12, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export default function ResearchHero() {
  const [query, setQuery] = useState("");

  const handleResearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!query.trim()) return;

    // Connect this to your /api/research endpoint.
    console.log("Research query:", query);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8fbff] text-slate-950">

      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-20 h-137.5 w-137.5 rounded-full bg-blue-200/40 blur-[120px]" />
        <div className="absolute right-1/3 top-1/3 h-87.5 w-87.5 rounded-full bg-purple-200/30 blur-[120px]" />
        <div className="absolute -left-40 bottom-0 h-87.5 w-87.5 rounded-full bg-sky-100 blur-[100px]" />
      </div>

      {/* Main content */}
      <section className="relative mx-auto flex min-h-screen max-w-360 items-center px-6 py-20 xl:p-0 sm:px-10 lg:px-16">

        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.08fr_0.92fr]">

          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="z-10"
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/70 px-5 py-3 shadow-sm backdrop-blur-md"
            >
              <Sparkles size={17} className="text-blue-500" />
              <span className="text-sm font-medium text-blue-700">
                Powered by Gemini + Google Search
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="max-w-2xl text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl"
            >
              AI Research
              <br />
              <span className="bg-linear-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Assistant
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-8 max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
            >
              Get accurate, up-to-date answers with real sources. Leverage the
              power of Google Search and Gemini to research, analyze, and find
              what matters.
            </motion.p>

            {/* Search Form */}
            <motion.form
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              onSubmit={handleResearch}
              className="mt-10 flex max-w-3xl flex-col gap-3 rounded-2xl border border-white bg-white/90 p-3 shadow-[0_15px_50px_rgba(59,130,246,0.10)] backdrop-blur-xl sm:flex-row sm:items-center"
            >
              <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
                <Search className="shrink-0 text-slate-400" size={22} />

                <input
                  type="text"
                  disabled
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask anything... (e.g., latest AI trends)"
                  className="w-full bg-transparent py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 sm:text-base"
                />
              </div>

              <Link href="/research"
                type="submit"
                className="group cursor-pointer flex items-center justify-center gap-3 rounded-xl bg-linear-to-r from-blue-500 to-violet-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30 active:scale-95"
              >
                GetStarted
                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.form>

            {/* Features */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8 + index * 0.12,
                    }}
                    whileHover={{ y: -6 }}
                    className="group"
                  >
                    <div
                      className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${feature.color} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon size={30} strokeWidth={2.2} />
                    </div>

                    <h3 className="text-sm font-bold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-2 max-w-40 text-sm leading-6 text-slate-500">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* RIGHT ILLUSTRATION */}
          <div className="relative mx-auto flex h-130 w-full max-w-150 items-center justify-center lg:h-162.5">

            {/* Orbital circles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute h-97.5 w-97.5 rounded-full border border-blue-200/60 sm:h-120 sm:w-120"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute h-75 w-75 rounded-full border border-purple-200/50 sm:h-97.5 sm:w-97.5"
            />

            {/* Blue glow */}
            <div className="absolute h-72 w-72 rounded-full bg-blue-300/30 blur-[90px] sm:h-96 sm:w-96" />

            {/* Search result card */}
            <motion.div
              animate={floatAnimation}
              className="absolute left-0 top-10 z-10 hidden w-64 rotate-[-8deg] rounded-2xl border border-white bg-white/80 p-4 shadow-xl shadow-blue-200/40 backdrop-blur-xl sm:block"
            >
              <div className="flex items-center gap-2 rounded-full bg-slate-50 px-3 py-2">
                <Search size={14} className="text-blue-500" />
                <span className="text-xs text-slate-500">
                  latest AI trends 2026
                </span>
              </div>

              <div className="mt-4 flex gap-3">
                <div className="h-12 w-12 rounded-xl bg-linear-to-br from-blue-400 to-indigo-600 p-2 text-white">
                  <BrainCircuit size={30} />
                </div>
                <div className="flex-1 space-y-2 pt-1">
                  <div className="h-2 w-full rounded-full bg-blue-400" />
                  <div className="h-2 w-4/5 rounded-full bg-slate-200" />
                  <div className="h-2 w-3/5 rounded-full bg-slate-200" />
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="h-2 w-full rounded-full bg-slate-200" />
                <div className="h-2 w-5/6 rounded-full bg-slate-200" />
                <div className="h-2 w-4/6 rounded-full bg-slate-200" />
              </div>
            </motion.div>

            {/* Insight card */}
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [2, 0, 2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-0 top-16 z-20 hidden max-w-57.5 rounded-2xl border border-white bg-white/90 p-4 shadow-xl shadow-blue-200/30 backdrop-blur-xl sm:block"
            >
              <div className="flex gap-3">
                <Sparkles className="mt-1 shrink-0 text-blue-500" size={20} />
                <p className="text-sm leading-6 text-slate-600">
                  Found <strong className="text-slate-900">5 key insights</strong>{" "}
                  from reliable sources...
                </p>
              </div>
            </motion.div>

            {/* AI Robot */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 mt-20 flex h-72.5 w-57.5 flex-col items-center sm:h-90 sm:w-72.5"
            >
              {/* Head */}
              <div className="relative z-20 flex h-38.75 w-55 items-center justify-center rounded-[48%] border-[7px] border-white bg-linear-to-br from-white via-slate-100 to-blue-100 shadow-[inset_-10px_-10px_25px_rgba(96,165,250,0.2),0_20px_50px_rgba(59,130,246,0.25)] sm:h-47.5 sm:w-67.5">
                {/* Ear left */}
                <div className="absolute -left-4 top-1/2 h-16 w-7 -translate-y-1/2 rounded-full border-4 border-blue-100 bg-linear-to-r from-blue-200 to-white" />

                {/* Ear right */}
                <div className="absolute -right-4 top-1/2 h-16 w-7 -translate-y-1/2 rounded-full border-4 border-blue-100 bg-linear-to-l from-blue-200 to-white" />

                {/* Face */}
                <div className="relative flex h-27.5 w-46.25 items-center justify-center gap-5 rounded-[42%] bg-linear-to-br from-slate-950 via-blue-950 to-indigo-950 shadow-[inset_0_0_25px_rgba(59,130,246,0.5)] sm:h-35 sm:w-56.25">
                  {/* Eyes */}
                  <motion.div
                    animate={{ scaleY: [1, 1, 0.1, 1] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      times: [0, 0.85, 0.9, 1],
                    }}
                    className="h-7 w-5 rounded-full bg-cyan-300 shadow-[0_0_20px_#38bdf8] sm:h-9 sm:w-6"
                  />
                  <motion.div
                    animate={{ scaleY: [1, 1, 0.1, 1] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      times: [0, 0.85, 0.9, 1],
                    }}
                    className="h-7 w-5 rounded-full bg-cyan-300 shadow-[0_0_20px_#38bdf8] sm:h-9 sm:w-6"
                  />

                  {/* Smile */}
                  <div className="absolute bottom-5 h-3 w-7 rounded-b-full border-b-[3px] border-cyan-400 sm:bottom-6" />
                </div>
              </div>

              {/* Body */}
              <div className="relative -mt-5 flex h-40 w-42.5 items-center justify-center rounded-[45%] border-[6px] border-white bg-linear-to-br from-white via-slate-100 to-blue-100 shadow-[inset_-10px_-10px_25px_rgba(96,165,250,0.2),0_20px_40px_rgba(59,130,246,0.2)] sm:h-47.5 sm:w-52.5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-100 bg-white shadow-inner">
                  <Sparkles size={34} className="text-blue-500" />
                </div>

                {/* Arms */}
                <div className="absolute -left-5 top-12 h-20 w-9 rotate-12 rounded-full border-4 border-blue-100 bg-linear-to-b from-white to-blue-100" />
                <div className="absolute -right-5 top-12 h-20 w-9 -rotate-12 rounded-full border-4 border-blue-100 bg-linear-to-b from-white to-blue-100" />
              </div>
            </motion.div>

            {/* Sources card */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [3, 1, 3] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-28 right-0 z-20 hidden w-44 rounded-2xl border border-white bg-white/90 p-4 shadow-xl shadow-blue-200/40 backdrop-blur-xl sm:block"
            >
              <div className="mb-3 flex items-center gap-2 text-sm font-bold">
                <ExternalLink size={15} className="text-blue-500" />
                Sources
              </div>

              {["Forbes", "TechCrunch", "McKinsey"].map((source) => (
                <div
                  key={source}
                  className="flex items-center justify-between border-t border-slate-100 py-2 text-xs text-slate-500"
                >
                  {source}
                  <ExternalLink size={12} />
                </div>
              ))}
            </motion.div>

            {/* Document card */}
            <motion.div
              animate={{ y: [0, 12, 0], rotate: [-5, -2, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-28 left-5 z-20 hidden rounded-2xl border border-white bg-white/90 p-4 shadow-lg backdrop-blur-xl sm:block"
            >
              <FileText size={30} className="text-blue-500" />
              <div className="mt-3 h-2 w-14 rounded-full bg-blue-200" />
              <div className="mt-2 h-2 w-10 rounded-full bg-slate-200" />
            </motion.div>

            {/* Analytics card */}
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [5, 2, 5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-16 right-20 z-20 hidden rounded-2xl border border-white bg-white/90 p-4 shadow-lg backdrop-blur-xl sm:block"
            >
              <BarChart3 size={35} className="text-violet-500" />
            </motion.div>

            {/* Sparkles */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute left-1/4 top-1/3 text-3xl text-cyan-300"
            >
              ✦
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute bottom-1/4 right-1/4 text-4xl text-blue-300"
            >
              ✧
            </motion.div>

          </div>
        </div>
      </section>

      {/* Bottom wave */}
      <div className="pointer-events-none absolute -bottom-28 left-0 h-48 w-full rounded-[50%] bg-linear-to-r from-blue-100/80 via-purple-100/70 to-blue-100/80 blur-sm" />
    </main>
  );
}
