"use client";

import React from "react";
import {
  BriefcaseIcon,
  CheckIcon,
  FlutterIcon,
  ShoppingCartIcon,
  MonitorIcon,
  LayersIcon,
} from "./icons";

const IMPACT_HIGHLIGHTS = [
  "Spearheading the development and maintenance of an enterprise Point of Sale (POS) application using Flutter.",
  "Architecting reactive state management workflows with Provider and ChangeNotifier to ensure zero-lag transaction processing.",
  "Bridging essential retail hardware peripherals, including thermal receipt printers, barcode scanners, and cash drawers.",
  "Engineering responsive cross-platform layouts optimized for both Windows desktop monitors and touch POS terminals.",
  "Integrating RESTful backend endpoints for real-time inventory synchronization, order logging, and transaction auditing.",
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3 shadow-sm shadow-cyan-950/50">
            <span>04. EXPERIENCE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Experience
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Real-world software engineering experience focused on production-grade Flutter and POS architectures.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {/* Active Experience Node: Impact IT Solution */}
          <div className="relative">
            {/* Timeline Beacon with Emerald Glow */}
            <div className="absolute -left-[33px] sm:-left-[49px] top-1.5 w-7 h-7 rounded-full bg-[#040711] border-2 border-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/40">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            </div>

            {/* Experience Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-cyan-500/25 backdrop-blur-xl shadow-2xl shadow-cyan-950/30 hover:border-cyan-400/50 transition-all duration-300">
              {/* Header Row */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Flutter Developer
                    </h3>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-950/60 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-950/50">
                      ● Current Active Position
                    </span>
                  </div>
                  <div className="text-sm sm:text-base text-cyan-300 font-medium mt-1 flex items-center gap-2">
                    <BriefcaseIcon className="w-4 h-4 text-cyan-400" />
                    <span>Impact IT Solution</span>
                  </div>
                </div>

                <div className="text-xs sm:text-sm font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 px-3 py-1.5 rounded-lg shadow-sm">
                  Present
                </div>
              </div>

              {/* Exact Description Provided */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                Working on POS and business management software using Flutter, focusing on responsive interfaces, application architecture, state management, API integration and real-world business workflows.
              </p>

              {/* Technical Breakdown Highlights */}
              <div className="space-y-3 pt-6 border-t border-slate-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
                  Key Technical Responsibilities &amp; Architecture:
                </h4>
                {IMPACT_HIGHLIGHTS.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="mt-1 p-0.5 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 shrink-0">
                      <CheckIcon className="w-3 h-3" />
                    </div>
                    <span className="leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Tech Tags with Colors */}
              <div className="mt-6 pt-6 border-t border-slate-800 flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                <span className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 flex items-center gap-1.5">
                  <FlutterIcon className="w-3.5 h-3.5 text-cyan-400" /> Flutter &amp; Dart
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-1.5">
                  <ShoppingCartIcon className="w-3.5 h-3.5 text-emerald-400" /> POS Workflows
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 flex items-center gap-1.5">
                  <LayersIcon className="w-3.5 h-3.5 text-indigo-400" /> Provider / ChangeNotifier
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-violet-500/10 border border-violet-500/30 text-violet-300 flex items-center gap-1.5">
                  <MonitorIcon className="w-3.5 h-3.5 text-violet-400" /> Windows Desktop
                </span>
              </div>
            </div>
          </div>

          {/* Placeholder for Earlier History / Milestones */}
          <div className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#040711] border border-slate-700 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-slate-600" />
            </div>

            {/* Placeholder Card */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-dashed border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-semibold text-slate-300">
                    Additional Experience &amp; Milestones
                  </h4>
                  <span className="text-[10px] font-mono uppercase bg-slate-800 text-slate-400 px-2 py-0.5 rounded border border-slate-700">
                    Editable Placeholder
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-500">Timeline slot</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                This space is reserved for prior engineering milestones, educational background, or independent software consulting contracts. You can easily add more timeline entries in <code className="text-cyan-300 bg-slate-800 px-1.5 py-0.5 rounded text-xs font-mono">components/Experience.tsx</code>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
