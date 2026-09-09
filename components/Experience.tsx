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
    <section id="experience" className="relative py-20 sm:py-28 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-400 mb-3">
            <span>// 04. EXPERIENCE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Work Experience
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            Real-world software engineering experience focused on production-grade Flutter and POS architectures.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {/* Active Experience Node: Impact IT Solution */}
          <div className="relative">
            {/* Timeline Beacon */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#08080a] border-2 border-white flex items-center justify-center shadow-lg shadow-white/10">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            {/* Experience Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/50 border border-white/15 backdrop-blur-xl">
              {/* Header Row */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Flutter Developer
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                      Current Position
                    </span>
                  </div>
                  <div className="text-sm sm:text-base text-zinc-300 font-medium mt-1 flex items-center gap-2">
                    <BriefcaseIcon className="w-4 h-4 text-zinc-400" />
                    <span>Impact IT Solution</span>
                  </div>
                </div>

                <div className="text-xs sm:text-sm font-mono text-zinc-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                  Present
                </div>
              </div>

              {/* Exact Description Provided */}
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6 font-normal">
                Working on POS and business management software using Flutter, focusing on responsive interfaces, application architecture, state management, API integration and real-world business workflows.
              </p>

              {/* Technical Breakdown Highlights */}
              <div className="space-y-3 pt-6 border-t border-white/10">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  Key Technical Responsibilities &amp; Architecture:
                </h4>
                {IMPACT_HIGHLIGHTS.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                    <div className="mt-1 p-0.5 rounded bg-white/10 text-white shrink-0">
                      <CheckIcon className="w-3 h-3" />
                    </div>
                    <span className="leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-2 text-xs font-mono text-zinc-300">
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-1.5">
                  <FlutterIcon className="w-3.5 h-3.5 text-white" /> Flutter &amp; Dart
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-1.5">
                  <ShoppingCartIcon className="w-3.5 h-3.5 text-white" /> POS Workflows
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-1.5">
                  <LayersIcon className="w-3.5 h-3.5 text-white" /> Provider / ChangeNotifier
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-1.5">
                  <MonitorIcon className="w-3.5 h-3.5 text-white" /> Windows Desktop
                </span>
              </div>
            </div>
          </div>

          {/* Placeholder for Earlier History / Milestones (as requested) */}
          <div className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#08080a] border border-white/20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
            </div>

            {/* Placeholder Card */}
            <div className="p-6 rounded-2xl bg-zinc-950/40 border border-dashed border-white/15">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-semibold text-zinc-300">
                    Additional Experience &amp; Milestones
                  </h4>
                  <span className="text-[10px] font-mono uppercase bg-white/5 text-zinc-400 px-2 py-0.5 rounded border border-white/5">
                    Editable Placeholder
                  </span>
                </div>
                <span className="text-xs font-mono text-zinc-500">Timeline slot</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                This space is reserved for prior engineering milestones, educational background, or independent software consulting contracts. You can easily add more timeline entries in <code className="text-zinc-300 bg-white/5 px-1.5 py-0.5 rounded text-xs font-mono">components/Experience.tsx</code>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

