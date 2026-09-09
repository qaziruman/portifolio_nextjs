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
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-zinc-700/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Introduction & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-xs text-zinc-300 backdrop-blur-md mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-zinc-200">
                Currently building POS solutions at <strong className="text-white font-semibold">Impact IT Solution</strong>
              </span>
            </div>

            {/* Name Heading */}
            <div className="mb-3">
              <span className="text-sm sm:text-base font-mono uppercase tracking-widest text-zinc-400">
                Portfolio of
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mt-1">
                Qazi Ruman Ali
              </h1>
            </div>

            {/* Large Professional Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold tracking-tight text-zinc-200 leading-snug sm:leading-tight mb-6">
              Flutter Developer building powerful{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 underline decoration-white/20 decoration-2 underline-offset-8">
                POS &amp; business solutions.
              </span>
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-8">
              I build scalable mobile, desktop, and business applications with Flutter, focusing on clean architecture, performance, and exceptional user experiences.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-black bg-white hover:bg-zinc-200 transition-all duration-200 shadow-lg shadow-white/10 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View My Work</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-zinc-200 bg-zinc-900/80 border border-white/15 hover:border-white/30 hover:bg-zinc-800/80 hover:text-white transition-all duration-200"
              >
                <span>Let&apos;s Talk</span>
              </a>
            </div>

            {/* Tech Badges Row */}
            <div className="mt-12 pt-8 border-t border-white/10 w-full flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-zinc-400 font-mono">
              <span className="text-zinc-500 uppercase tracking-wider text-[11px]">Specialization:</span>
              <span className="inline-flex items-center gap-1.5 text-zinc-300">
                <FlutterIcon className="w-3.5 h-3.5 text-white" /> Flutter &amp; Dart
              </span>
              <span className="inline-flex items-center gap-1.5 text-zinc-300">
                <ShoppingCartIcon className="w-3.5 h-3.5 text-white" /> POS Architecture
              </span>
              <span className="inline-flex items-center gap-1.5 text-zinc-300">
                <MonitorIcon className="w-3.5 h-3.5 text-white" /> Windows Desktop
              </span>
              <span className="inline-flex items-center gap-1.5 text-zinc-300">
                <SmartphoneIcon className="w-3.5 h-3.5 text-white" /> Mobile Apps
              </span>
            </div>
          </div>

          {/* Right Column: Sophisticated Developer Visual */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-white/[0.04] rounded-3xl filter blur-2xl transform scale-95 pointer-events-none" />

            {/* Simulated Dark IDE / Architecture Window */}
            <div className="relative rounded-2xl bg-zinc-950/90 border border-white/15 shadow-2xl overflow-hidden backdrop-blur-xl">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/80 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-400">
                  <TerminalIcon className="w-3.5 h-3.5 text-zinc-400" />
                  <span>pos_controller.dart</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                  ● compiled
                </div>
              </div>

              {/* Code Snippet */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-zinc-300">
                <div className="text-zinc-500">// Production POS Architecture Engine</div>
                <div className="mt-1 text-zinc-500">// Impact IT Solution • Real-time Sync</div>
                <div className="mt-2">
                  <span className="text-zinc-100 font-semibold">class</span>{" "}
                  <span className="text-white font-bold">POSTransactionController</span>{" "}
                  <span className="text-zinc-400">extends</span>{" "}
                  <span className="text-zinc-200 underline decoration-zinc-600">ChangeNotifier</span> {"{"}
                </div>
                <div className="pl-4 text-zinc-400">
                  final <span className="text-zinc-200">InventoryRepository</span> _inventory;
                </div>
                <div className="pl-4 text-zinc-400">
                  final <span className="text-zinc-200">ReceiptPrinterService</span> _printer;
                </div>

                <div className="pl-4 mt-3">
                  <span className="text-zinc-100 font-medium">Future</span>&lt;<span className="text-zinc-200">SaleReceipt</span>&gt;{" "}
                  <span className="text-white font-semibold">processCheckout</span>(
                  <span className="text-zinc-300">OrderPayload</span> order) <span className="text-zinc-100">async</span> {"{"}
                </div>
                <div className="pl-8 text-zinc-400">
                  <span className="text-zinc-500">// Atomic inventory decrement &amp; sync</span>
                </div>
                <div className="pl-8 text-zinc-300">
                  <span className="text-zinc-100">await</span> _inventory.commit(order.items);
                </div>
                <div className="pl-8 text-zinc-300">
                  <span className="text-zinc-100">final</span> receipt = <span className="text-zinc-100">await</span> _printer.renderSlip(order);
                </div>
                <div className="pl-8 mt-1 text-white font-semibold">
                  notifyListeners();
                </div>
                <div className="pl-8 text-zinc-300">
                  <span className="text-zinc-100">return</span> receipt;
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{"}"}</div>
              </div>

              {/* Status Footer in IDE */}
              <div className="px-4 py-2.5 bg-zinc-900/60 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <FlutterIcon className="w-3.5 h-3.5 text-zinc-300" />
                  <span>Flutter 3.x / Dart</span>
                </div>
                <span className="text-zinc-500">UTF-8 • Clean Architecture</span>
              </div>
            </div>

            {/* Floating Card 1: Performance Metric */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3 p-3.5 rounded-xl bg-zinc-900/90 border border-white/15 shadow-2xl backdrop-blur-md animate-float">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 text-white">
                <CheckIcon className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Hardware Bridge Sync</div>
                <div className="text-[11px] font-mono text-zinc-400">0.08s Receipt &amp; Barcode Latency</div>
              </div>
            </div>

            {/* Floating Card 2: Multiplatform Spec */}
            <div className="hidden sm:flex absolute -top-5 -right-5 items-center gap-2.5 px-3.5 py-2 rounded-xl bg-zinc-900/90 border border-white/15 shadow-xl backdrop-blur-md animate-float-delayed">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span className="text-xs font-mono text-zinc-200">
                Windows • Tablet • Mobile
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

