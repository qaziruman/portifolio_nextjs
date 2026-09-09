"use client";

import React from "react";
import {
  ExternalLinkIcon,
  GithubIcon,
  FlutterIcon,
  ShoppingCartIcon,
  LayersIcon,
  MonitorIcon,
  CheckIcon,
  DatabaseIcon,
  BarChartIcon,
  TerminalIcon,
} from "./icons";

interface Project {
  id: string;
  title: string;
  category: string;
  badge: string;
  badgeColor: string;
  hoverBorder: string;
  description: string;
  technologies: string[];
  viewLink: string;
  githubLink: string;
  renderPreview: () => React.ReactNode;
}

const PROJECTS: Project[] = [
  {
    id: "pos-management-system",
    title: "POS Management System",
    category: "Retail & Point of Sale",
    badge: "Production Architecture",
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    hoverBorder: "hover:border-emerald-500/40 hover:shadow-emerald-500/10",
    description:
      "A business-focused POS solution built with Flutter. Features rapid item lookup, thermal receipt generation, barcode scanner integration, offline cart caching, and immediate transactional integrity for high-volume retail stores.",
    technologies: ["Flutter", "Dart", "Provider", "REST API", "Windows Desktop"],
    viewLink: "#project-link",
    githubLink: "#project-link",
    renderPreview: () => (
      <div className="w-full h-full bg-[#080d1a] p-4 font-mono text-[11px] text-slate-300 flex flex-col justify-between select-none">
        {/* Mockup Header */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-white font-semibold">TERMINAL_01 // ACTIVE</span>
          </div>
          <span className="text-cyan-400 text-[10px]">ESC: Cancel | F12: Tender</span>
        </div>

        {/* Order Items Table */}
        <div className="py-2.5 space-y-1.5 flex-1">
          <div className="grid grid-cols-12 text-slate-400 text-[10px] pb-1 border-b border-slate-800/60">
            <span className="col-span-6">ITEM / SKU</span>
            <span className="col-span-2 text-center">QTY</span>
            <span className="col-span-4 text-right">TOTAL</span>
          </div>
          <div className="grid grid-cols-12 text-slate-200">
            <span className="col-span-6 text-white truncate">Industrial Scanner Pro</span>
            <span className="col-span-2 text-center text-cyan-300">1</span>
            <span className="col-span-4 text-right font-medium text-emerald-400">$210.00</span>
          </div>
          <div className="grid grid-cols-12 text-slate-200">
            <span className="col-span-6 text-white truncate">Thermal Paper Rolls (x10)</span>
            <span className="col-span-2 text-center text-cyan-300">3</span>
            <span className="col-span-4 text-right font-medium text-emerald-400">$45.00</span>
          </div>
          <div className="grid grid-cols-12 text-slate-200">
            <span className="col-span-6 text-white truncate">Bluetooth Receipt Printer</span>
            <span className="col-span-2 text-center text-cyan-300">1</span>
            <span className="col-span-4 text-right font-medium text-emerald-400">$129.50</span>
          </div>
        </div>

        {/* Total & Action Footer */}
        <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
          <div>
            <div className="text-[10px] text-slate-400 uppercase">Subtotal (Taxes incl.)</div>
            <div className="text-sm font-bold text-white">$384.50 USD</div>
          </div>
          <div className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-xs flex items-center gap-1.5 shadow-md shadow-emerald-500/25">
            <CheckIcon className="w-3.5 h-3.5" />
            <span>Process Sale</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "inventory-management-system",
    title: "Inventory Management System",
    category: "Warehouse & Operations",
    badge: "Supply Chain",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    hoverBorder: "hover:border-amber-500/40 hover:shadow-amber-500/10",
    description:
      "Comprehensive inventory, stock control, purchasing pipelines, supplier records, and live reporting workflows. Engineered to prevent stockouts and provide actionable stock valuation metrics.",
    technologies: ["Flutter", "Dart", "Node.js", "Express.js", "MySQL"],
    viewLink: "#project-link",
    githubLink: "#project-link",
    renderPreview: () => (
      <div className="w-full h-full bg-[#080d1a] p-4 font-mono text-[11px] text-slate-300 flex flex-col justify-between select-none">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center gap-1.5 text-white font-semibold">
            <DatabaseIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>STOCK_LEDGER // REORDER ENGINE</span>
          </div>
          <span className="text-[10px] text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30 font-medium">
            2 Items Low Stock
          </span>
        </div>

        {/* Stock Status Visual Bars with Rich Colors */}
        <div className="py-2 space-y-2.5 flex-1">
          <div>
            <div className="flex justify-between text-[10px] mb-1">
              <span className="text-slate-200 font-medium">SKU-99201 Thermal Rolls</span>
              <span className="text-emerald-400 font-medium">85% In Stock (420 units)</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full w-[85%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[10px] mb-1">
              <span className="text-slate-200 font-medium">SKU-44102 Barcode Scanners</span>
              <span className="text-cyan-400 font-medium">42% (34 units)</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-[42%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[10px] mb-1">
              <span className="text-slate-200 font-medium">SKU-11094 POS Terminal Bases</span>
              <span className="text-amber-400 font-medium">12% Reorder Trigger (8 units)</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-amber-500 to-rose-500 rounded-full w-[12%]" />
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px]">
          <span className="text-cyan-400">Stream: Real-time MySQL Sync</span>
          <span className="text-emerald-400 font-medium">Audit: Verified</span>
        </div>
      </div>
    ),
  },
  {
    id: "business-management-application",
    title: "Business Management Application",
    category: "Enterprise Software",
    badge: "Multi-Role Suite",
    badgeColor: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
    hoverBorder: "hover:border-indigo-500/40 hover:shadow-indigo-500/10",
    description:
      "An end-to-end business operations and management system. Handles multi-branch revenue reporting, staff role-based access control, supplier reconciliation, and financial analytics.",
    technologies: ["Flutter", "Dart", "REST APIs", "State Management", "Responsive UI"],
    viewLink: "#project-link",
    githubLink: "#project-link",
    renderPreview: () => (
      <div className="w-full h-full bg-[#080d1a] p-4 font-mono text-[11px] text-slate-300 flex flex-col justify-between select-none">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center gap-1.5 text-white font-semibold">
            <BarChartIcon className="w-3.5 h-3.5 text-indigo-400" />
            <span>EXECUTIVE_ANALYTICS // MULTI-BRANCH</span>
          </div>
          <span className="text-cyan-400 text-[10px] font-medium">Q1 FISCAL</span>
        </div>

        {/* Analytics Grid with Attractive Cards */}
        <div className="grid grid-cols-2 gap-2 py-2 flex-1">
          <div className="p-2.5 rounded-xl bg-indigo-950/40 border border-indigo-500/20 flex flex-col justify-between">
            <span className="text-[10px] text-indigo-300 uppercase font-semibold">Gross Revenue</span>
            <span className="text-base font-bold text-white">$94,250</span>
            <span className="text-[10px] text-emerald-400 font-medium">+14.2% vs last month</span>
          </div>
          <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/20 flex flex-col justify-between">
            <span className="text-[10px] text-cyan-300 uppercase font-semibold">Total Transactions</span>
            <span className="text-base font-bold text-white">4,821</span>
            <span className="text-[10px] text-slate-300">Avg ticket: $19.55</span>
          </div>
        </div>

        {/* Roles Pill Bar */}
        <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px]">
          <span className="text-slate-400">Access Roles:</span>
          <div className="flex gap-1.5">
            <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-medium">Admin</span>
            <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">Manager</span>
            <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">Cashier</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "flutter-desktop-application",
    title: "Flutter Desktop Application",
    category: "Windows Desktop",
    badge: "Desktop Native",
    badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    hoverBorder: "hover:border-cyan-500/40 hover:shadow-cyan-500/10",
    description:
      "A high-performance Windows desktop application built with Flutter. Engineered specifically for desktop workflows with keyboard accelerators, split-screen data manipulation, and local database sync.",
    technologies: ["Flutter", "Dart", "Desktop Embedding", "MySQL", "Provider"],
    viewLink: "#project-link",
    githubLink: "#project-link",
    renderPreview: () => (
      <div className="w-full h-full bg-[#080d1a] p-4 font-mono text-[11px] text-slate-300 flex flex-col justify-between select-none">
        {/* Windows Titlebar Simulation */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <MonitorIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-white font-semibold">FlutterDesktop_x64.exe</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span>_</span>
            <span>□</span>
            <span className="text-rose-400">✕</span>
          </div>
        </div>

        {/* Desktop Split View Mockup */}
        <div className="py-2 grid grid-cols-12 gap-2 flex-1">
          <div className="col-span-4 p-2 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1">
            <div className="text-[10px] text-cyan-400 uppercase font-semibold">Navigator</div>
            <div className="px-1.5 py-1 rounded bg-cyan-500/20 text-cyan-300 font-medium text-[10px] border border-cyan-500/30">Orders Grid</div>
            <div className="px-1.5 py-0.5 text-slate-400 text-[10px]">Products</div>
            <div className="px-1.5 py-0.5 text-slate-400 text-[10px]">Vendors</div>
            <div className="px-1.5 py-0.5 text-slate-400 text-[10px]">Tax Engine</div>
          </div>
          <div className="col-span-8 p-2 rounded-lg bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="text-[10px] text-white font-semibold mb-1">
                DataGrid: 12,400 Records Cached
              </div>
              <div className="text-[10px] text-slate-400 leading-tight">
                Dual-screen window management, rapid keyboard barcode listeners active.
              </div>
            </div>
            <div className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Native Windows 11 Fluent Bridge</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px]">
          <span className="text-cyan-400">Hotkeys: Ctrl+N (New) | Ctrl+S (Commit)</span>
          <span className="text-emerald-400 font-medium">60 FPS Native</span>
        </div>
      </div>
    ),
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3 shadow-sm shadow-cyan-950/50">
            <span>05. PROJECTS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Featured Projects &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Solutions
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            A showcase of production software systems, business management engines, and desktop applications built with Flutter.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className={`group rounded-2xl bg-slate-900/60 border border-slate-800 hover:bg-slate-900/90 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl ${project.hoverBorder}`}
            >
              <div>
                {/* Project Visual / Code-Based Mockup with Zoom/Hover Animation */}
                <div className="relative h-56 sm:h-64 w-full border-b border-slate-800 bg-[#080d1a] overflow-hidden">
                  <div className="w-full h-full transform group-hover:scale-[1.02] transition-transform duration-300 ease-out">
                    {project.renderPreview()}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                      {project.category}
                    </span>
                    <span className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-full border ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 flex items-center gap-3">
                <a
                  href={project.viewLink}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 transition-all shadow-md shadow-cyan-500/20 hover:scale-[1.01]"
                >
                  <span>View Project</span>
                  <ExternalLinkIcon className="w-3.5 h-3.5" />
                </a>

                <a
                  href={project.githubLink}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800/80 border border-slate-700 hover:border-cyan-400/50 hover:text-white transition-all"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Placeholders */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-slate-400">
            * Repository links and live demonstration URLs are configured with editable placeholders ready to point to client installations or public codebases.
          </p>
        </div>
      </div>
    </section>
  );
}
