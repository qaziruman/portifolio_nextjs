"use client";

import React from "react";
import {
  ArrowRightIcon,
  FlutterIcon,
  CodeIcon,
  TerminalIcon,
  SmartphoneIcon,
  MonitorIcon,
  CheckIcon,
  ShoppingCartIcon,
} from "./icons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Introduction & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-xs text-emerald-300 backdrop-blur-md mb-6 shadow-lg shadow-emerald-950/40">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-medium">
                Currently building POS solutions at{" "}
                <strong className="text-white font-semibold underline decoration-emerald-400/40 decoration-2">
                  Impact IT Solution
                </strong>
              </span>
            </div>

            {/* Name Heading */}
            <div className="mb-3">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-cyan-400 font-medium">
                \\ Senior Mobile &amp; Desktop Engineer
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mt-1">
                Qazi Ruman Ali
              </h1>
            </div>

            {/* Large Professional Headline with Attractive Gradient */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100 leading-snug sm:leading-tight mb-6">
              Flutter Developer building powerful{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 underline decoration-cyan-400/30 decoration-2 underline-offset-8">
                POS &amp; business solutions.
              </span>
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal">
              I build scalable mobile, desktop, and business applications with Flutter, focusing on clean architecture, performance, and exceptional user experiences.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 transition-all duration-200 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View My Work</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 border border-slate-700/80 hover:border-cyan-400/50 hover:bg-slate-800/90 hover:text-white transition-all duration-200 shadow-md shadow-black/40"
              >
                <span>Let&apos;s Talk</span>
              </a>
            </div>

            {/* Tech Badges Row */}
            <div className="mt-12 pt-8 border-t border-slate-800/80 w-full flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-400 font-mono">
              <span className="text-cyan-400 uppercase tracking-wider text-[11px] font-semibold">Specialization:</span>
              <span className="inline-flex items-center gap-1.5 text-slate-200 bg-slate-900/60 px-2.5 py-1 rounded-md border border-cyan-500/20">
                <FlutterIcon className="w-3.5 h-3.5 text-cyan-400" /> Flutter &amp; Dart
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-200 bg-slate-900/60 px-2.5 py-1 rounded-md border border-emerald-500/20">
                <ShoppingCartIcon className="w-3.5 h-3.5 text-emerald-400" /> POS Architecture
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-200 bg-slate-900/60 px-2.5 py-1 rounded-md border border-indigo-500/20">
                <MonitorIcon className="w-3.5 h-3.5 text-indigo-400" /> Windows Desktop
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-200 bg-slate-900/60 px-2.5 py-1 rounded-md border border-violet-500/20">
                <SmartphoneIcon className="w-3.5 h-3.5 text-violet-400" /> Mobile Apps
              </span>
            </div>
          </div>

          {/* Right Column: Sophisticated Developer Visual with Vibrant Syntax Highlighting */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Back Glow with Cyan / Violet Hue */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-blue-600/20 to-purple-600/30 rounded-3xl filter blur-2xl opacity-75 animate-pulse-glow pointer-events-none" />

            {/* Simulated Dark IDE Window */}
            <div className="relative rounded-2xl bg-[#090d1a]/95 border border-cyan-500/30 shadow-2xl shadow-cyan-950/60 overflow-hidden backdrop-blur-xl">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d1424] border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-sm shadow-rose-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-sm shadow-amber-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-sm shadow-emerald-500/50"></div>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-300 font-medium">
                  <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>pos_controller.dart</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  ● compiled 60fps
                </div>
              </div>

              {/* Code Snippet with Beautiful Syntax Colors */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-slate-200">
                <div className="text-slate-500 italic"> Production POS Architecture Engine</div>
                <div className="text-slate-500 italic"> Impact IT Solution • Real-time Sync</div>
                <div className="mt-2">
                  <span className="text-purple-400 font-semibold">class</span>{" "}
                  <span className="text-cyan-300 font-bold">POSTransactionController</span>{" "}
                  <span className="text-purple-400">extends</span>{" "}
                  <span className="text-amber-300">ChangeNotifier</span> {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">final</span> <span className="text-sky-300">InventoryRepository</span> <span className="text-slate-200">_inventory;</span>
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">final</span> <span className="text-sky-300">ReceiptPrinterService</span> <span className="text-slate-200">_printer;</span>
                </div>

                <div className="pl-4 mt-3">
                  <span className="text-sky-300 font-medium">Future</span>&lt;<span className="text-emerald-300">SaleReceipt</span>&gt;{" "}
                  <span className="text-amber-300 font-semibold">processCheckout</span>(
                  <span className="text-sky-300">OrderPayload</span> <span className="text-slate-300">order</span>) <span className="text-purple-400 font-semibold">async</span> {"{"}
                </div>
                <div className="pl-8 text-slate-500 italic">
                   Atomic inventory decrement &amp; sync
                </div>
                <div className="pl-8">
                  <span className="text-purple-400">await</span> _inventory.<span className="text-amber-300">commit</span>(order.items);
                </div>
                <div className="pl-8">
                  <span className="text-purple-400">final</span> receipt = <span className="text-purple-400">await</span> _printer.<span className="text-amber-300">renderSlip</span>(order);
                </div>
                <div className="pl-8 mt-1 text-emerald-400 font-semibold">
                  notifyListeners();
                </div>
                <div className="pl-8">
                  <span className="text-purple-400">return</span> receipt;
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{"}"}</div>
              </div>

              {/* Status Footer in IDE */}
              <div className="px-4 py-2.5 bg-[#0b101f] border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2 text-cyan-300">
                  <FlutterIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Flutter 3.x / Dart</span>
                </div>
                <span className="text-emerald-400 font-medium">Clean Architecture • Validated</span>
              </div>
            </div>

            {/* Floating Card 1: Performance Metric */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3 p-3.5 rounded-xl bg-[#0d1424]/90 border border-emerald-500/30 shadow-2xl backdrop-blur-md animate-float">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                <CheckIcon className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Hardware Bridge Sync</div>
                <div className="text-[11px] font-mono text-emerald-300">0.08s Receipt &amp; Barcode Latency</div>
              </div>
            </div>

            {/* Floating Card 2: Multiplatform Spec */}
            <div className="hidden sm:flex absolute -top-5 -right-5 items-center gap-2.5 px-4 py-2 rounded-xl bg-[#0d1424]/90 border border-cyan-500/30 shadow-xl backdrop-blur-md animate-float-delayed">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
              <span className="text-xs font-mono text-cyan-200 font-medium">
                Windows • Tablet • Mobile
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
