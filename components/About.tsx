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
    subtitle: "Core Focus",
    description:
      "Specialized in modern Flutter & Dart application engineering with reactive state patterns.",
  },
  {
    icon: ShoppingCartIcon,
    title: "POS Development",
    subtitle: "Real-world Domain",
    description:
      "Engineering fast point-of-sale checkout workflows, thermal receipt printing, and barcode hardware integration.",
  },
  {
    icon: MonitorIcon,
    title: "Mobile & Desktop",
    subtitle: "Multi-Platform",
    description:
      "Delivering unified software experiences across native Windows desktop and responsive mobile devices.",
  },
  {
    icon: LayersIcon,
    title: "Business Solutions",
    subtitle: "Enterprise Workflows",
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
    <section id="about" className="relative py-20 sm:py-28 border-t border-white/10 bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-400 mb-3">
            <span>// 01. ABOUT ME</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl">
            Building software that solves real business problems.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-zinc-300 leading-relaxed">
            <p>
              I am a dedicated <strong className="text-white font-semibold">Flutter Developer</strong> currently working at{" "}
              <strong className="text-white font-semibold">Impact IT Solution</strong>, where I develop and maintain a production-ready Point of Sale (POS) system.
            </p>
            <p className="text-zinc-400">
              My engineering approach centers on practical, reliable software that directly empowers business owners and retail operators. Rather than theoretical exercises, my day-to-day work involves architecting robust state machines, ensuring sub-second checkout speeds, synchronizing inventory data, and bridging hardware like thermal printers and barcode scanners.
            </p>
            <p className="text-zinc-400">
              I have a strong affinity for clean code, responsive layouts across both desktop monitors and mobile touchscreens, and building maintainable Flutter architectures that scale smoothly as business operations expand.
            </p>

            {/* Location & Employment Details Card */}
            <div className="pt-4">
              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300">
                    <BriefcaseIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-zinc-500">Current Role</div>
                    <div className="text-sm font-semibold text-white">Flutter Developer</div>
                    <div className="text-xs text-zinc-400">Impact IT Solution</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-zinc-500">Location</div>
                    <div className="text-sm font-semibold text-white">Islamabad, Pakistan</div>
                    <div className="text-xs text-zinc-400">Village &amp; P.O. Herdogher</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkmark List */}
            <div className="pt-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-400 mb-4">
                Core Domains &amp; Collaboration Interests:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {FOCUS_AREAS.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircleIcon className="w-4 h-4 text-zinc-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Cards: Meaningful Fact Blocks (NO fake percentages) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {FACT_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="p-6 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-white/20 hover:bg-zinc-900/70 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:border-white/20 group-hover:scale-105 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      {card.subtitle}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1.5">{card.title}</h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
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

