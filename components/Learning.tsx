"use client";

import React from "react";
import {
  LayersIcon,
  CpuIcon,
  SparklesIcon,
  CodeIcon,
  ShieldCheckIcon,
  CheckIcon,
} from "./icons";

const LEARNING_PILLARS = [
  {
    step: "01",
    title: "Advanced Flutter Architecture",
    focus: "Modularization & Domain Separation",
    icon: LayersIcon,
    stepColor: "text-cyan-400",
    iconBg: "from-cyan-500/20 to-blue-600/20 border-cyan-500/30 text-cyan-400",
    description:
      "Deepening mastery in Clean Architecture, feature-first repository patterns, dependency injection via GetIt, and decoupling business rules from the Flutter widget tree.",
    topics: ["Feature-first modular structure", "Use case & entity abstraction", "Decoupled domain layers"],
  },
  {
    step: "02",
    title: "Advanced State Management",
    focus: "Reactive Streams & State Isolation",
    icon: CpuIcon,
    stepColor: "text-sky-400",
    iconBg: "from-sky-500/20 to-indigo-600/20 border-sky-500/30 text-sky-400",
    description:
      "Exploring deep state isolation patterns, fine-grained selector reactivity, complex asynchronous stream transformations, and multi-controller synchronization.",
    topics: ["StreamController & reactive sinks", "Selector memoization", "Deterministic state machines"],
  },
  {
    step: "03",
    title: "Performance Optimization",
    focus: "Frame Budgets & Profiling",
    icon: SparklesIcon,
    stepColor: "text-indigo-400",
    iconBg: "from-indigo-500/20 to-violet-600/20 border-indigo-500/30 text-indigo-400",
    description:
      "Profiling Flutter rendering pipelines using DevTools, eliminating unnecessary widget rebuilds with const constructors, repainting boundary isolation, and memory leak analysis.",
    topics: ["Flutter DevTools memory profiling", "Repaint boundaries & raster cache", "Sub-16ms 60fps frame budgeting"],
  },
  {
    step: "04",
    title: "Clean Code & SOLID Principles",
    focus: "Maintainability & Robust Design",
    icon: CodeIcon,
    stepColor: "text-violet-400",
    iconBg: "from-violet-500/20 to-purple-600/20 border-violet-500/30 text-violet-400",
    description:
      "Applying strict SOLID principles to Dart codebases, writing self-documenting code, enforcing lint rules, and ensuring high testability for mission-critical POS calculations.",
    topics: ["SOLID design principles in Dart", "Automated unit & widget testing", "Design pattern implementations"],
  },
  {
    step: "05",
    title: "Scalable Application Development",
    focus: "Enterprise Multiplatform Scale",
    icon: ShieldCheckIcon,
    stepColor: "text-purple-400",
    iconBg: "from-purple-500/20 to-pink-600/20 border-purple-500/30 text-purple-400",
    description:
      "Designing multiplatform Flutter architectures that gracefully handle multi-tenant configurations, dynamic theming, offline-first data caching, and graceful error boundary fallbacks.",
    topics: ["Multiplatform design systems", "Offline-first sync algorithms", "Graceful exception boundaries"],
  },
];

export default function Learning() {
  return (
    <section id="learning" className="relative py-20 sm:py-28 border-t border-slate-800/80 bg-[#060a16]/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3 shadow-sm shadow-cyan-950/50">
            <span>06. ROADMAP &amp; RESEARCH</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Always Learning.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Always Improving.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Software engineering is an ongoing pursuit of craftsmanship. Here are the architectural and technical domains I am actively exploring and refining.
          </p>
        </div>

        {/* Roadmap Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEARNING_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Step & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`font-mono text-xs font-bold tracking-widest ${pillar.stepColor}`}>
                      STEP {pillar.step}
                    </span>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${pillar.iconBg} border flex items-center justify-center shadow-md group-hover:scale-105 transition-all`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Focus */}
                  <div className="text-[11px] font-mono uppercase text-cyan-400 tracking-wider mb-1 font-semibold">
                    {pillar.focus}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Topics Tag List */}
                <div className="pt-4 border-t border-slate-800 space-y-2">
                  {pillar.topics.map((topic) => (
                    <div key={topic} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckIcon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Vision Callout Box */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#0c1429] via-[#090e1f] to-[#050814] border border-cyan-500/30 flex flex-col justify-between shadow-2xl shadow-cyan-950/40">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-4 font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>ENGINEERING PHILOSOPHY</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                Theory into Production
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                I do not collect theoretical knowledge in isolation. Every architectural pattern, profiling technique, and clean coding principle I study is applied directly to real-world POS workflows and business-critical software systems at Impact IT Solution.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 font-mono text-xs text-cyan-400 font-medium">
              Target: Robust, defect-free business applications.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
