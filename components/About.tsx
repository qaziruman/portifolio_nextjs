"use client";

import React from "react";
import {
  FlutterIcon,
  ShoppingCartIcon,
  MonitorIcon,
  LayersIcon,
  MapPinIcon,
  BriefcaseIcon,
  CheckCircleIcon,
} from "./icons";

const FACT_CARDS = [
  {
    icon: FlutterIcon,
    title: "Flutter Developer",
    subtitle: "Core Specialization",
    colorClass: "from-cyan-500/20 to-blue-600/20 border-cyan-500/30 text-cyan-400 group-hover:border-cyan-400/60",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    description:
      "Specialized in modern Flutter & Dart application engineering with reactive state patterns and high-performance rendering.",
  },
  {
    icon: ShoppingCartIcon,
    title: "POS Development",
    subtitle: "Retail Architecture",
    colorClass: "from-emerald-500/20 to-teal-600/20 border-emerald-500/30 text-emerald-400 group-hover:border-emerald-400/60",
    badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    description:
      "Engineering fast point-of-sale checkout workflows, thermal receipt printing, and barcode hardware integration.",
  },
  {
    icon: MonitorIcon,
    title: "Mobile & Desktop",
    subtitle: "Cross-Platform",
    colorClass: "from-violet-500/20 to-purple-600/20 border-violet-500/30 text-violet-400 group-hover:border-violet-400/60",
    badgeColor: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    description:
      "Delivering unified software experiences across native Windows desktop and responsive mobile touchscreens.",
  },
  {
    icon: LayersIcon,
    title: "Business Solutions",
    subtitle: "Enterprise Systems",
    colorClass: "from-amber-500/20 to-orange-600/20 border-amber-500/30 text-amber-400 group-hover:border-amber-400/60",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    description:
      "Crafting reliable systems for inventory tracking, sales purchasing pipelines, and managerial reporting.",
  },
];

const FOCUS_AREAS = [
  "Point of Sale (POS) Systems",
  "Business & Inventory Management",
  "Cross-Platform Mobile Apps (Android & iOS)",
  "Windows Desktop Applications",
  "Clean & Scalable Flutter Architecture",
  "Hardware & Thermal Printer Integrations",
  "REST API & Database Synchronization",
  "Modern Ergonomic UI/UX Interfaces",
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 border-t border-slate-800/80 bg-[#060a16]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3 shadow-sm shadow-cyan-950/50">
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl">
            Building software that solves real{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              business problems.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            <p>
              I am a dedicated <strong className="text-cyan-300 font-semibold">Flutter Developer</strong> currently working at{" "}
              <strong className="text-white font-semibold underline decoration-cyan-500/40 decoration-2">Impact IT Solution</strong>, where I develop and maintain a production-ready Point of Sale (POS) system.
            </p>
            <p className="text-slate-400">
              My engineering approach centers on practical, reliable software that directly empowers business owners and retail operators. Rather than theoretical exercises, my day-to-day work involves architecting robust state machines, ensuring sub-second checkout speeds, synchronizing inventory data, and bridging hardware like thermal printers and barcode scanners.
            </p>
            <p className="text-slate-400">
              I have a strong affinity for clean code, responsive layouts across both desktop monitors and mobile touchscreens, and building maintainable Flutter architectures that scale smoothly as business operations expand.
            </p>

            {/* Location & Employment Details Card */}
            <div className="pt-4">
              <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 shadow-xl grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <BriefcaseIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-cyan-400 font-semibold">Current Role</div>
                    <div className="text-sm font-semibold text-white">Flutter Developer</div>
                    <div className="text-xs text-slate-300">Impact IT Solution</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-emerald-400 font-semibold">Location</div>
                    <div className="text-sm font-semibold text-white">Islamabad, Pakistan</div>
                    <div className="text-xs text-slate-300">Village &amp; P.O. Herdogher</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkmark List */}
            <div className="pt-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-400 mb-4 font-semibold">
                Core Domains &amp; Collaboration Interests:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {FOCUS_AREAS.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircleIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Cards: Meaningful Fact Blocks with Vibrant Glow */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {FACT_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-300 group shadow-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.colorClass} border flex items-center justify-center shadow-md group-hover:scale-105 transition-all`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border ${card.badgeColor}`}>
                      {card.subtitle}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1.5 group-hover:text-cyan-200 transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
