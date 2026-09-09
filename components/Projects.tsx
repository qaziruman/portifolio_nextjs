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
    description:
      "A business-focused POS solution built with Flutter. Features rapid item lookup, thermal receipt generation, barcode scanner integration, offline cart caching, and immediate transactional integrity for high-volume retail stores.",
    technologies: ["Flutter", "Dart", "Provider", "REST API", "Windows Desktop"],
    viewLink: "#project-link",
    githubLink: "#project-link",
    renderPreview: () => (
      <div className="w-full h-full bg-zinc-950 p-4 font-mono text-[11px] text-zinc-300 flex flex-col justify-between select-none">
        {/* Mockup Header */}
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-white font-semibold">TERMINAL_01 // ACTIVE</span>
          </div>
          <span className="text-zinc-500">ESC: Cancel | F12: Tender</span>
        </div>

        {/* Order Items Table */}
        <div className="py-2.5 space-y-1.5 flex-1">
          <div className="grid grid-cols-12 text-zinc-500 text-[10px] pb-1 border-b border-white/5">
            <span className="col-span-6">ITEM / SKU</span>
            <span className="col-span-2 text-center">QTY</span>
            <span className="col-span-4 text-right">TOTAL</span>
          </div>
          <div className="grid grid-cols-12 text-zinc-300">
            <span className="col-span-6 text-white truncate">Industrial Scanner Pro</span>
            <span className="col-span-2 text-center text-zinc-400">1</span>
            <span className="col-span-4 text-right font-medium">$210.00</span>
          </div>
          <div className="grid grid-cols-12 text-zinc-300">
            <span className="col-span-6 text-white truncate">Thermal Paper Rolls (x10)</span>
            <span className="col-span-2 text-center text-zinc-400">3</span>
            <span className="col-span-4 text-right font-medium">$45.00</span>
          </div>
          <div className="grid grid-cols-12 text-zinc-300">
            <span className="col-span-6 text-white truncate">Bluetooth Receipt Printer</span>
            <span className="col-span-2 text-center text-zinc-400">1</span>
            <span className="col-span-4 text-right font-medium">$129.50</span>
          </div>
        </div>

        {/* Total & Action Footer */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between">
          <div>
            <div className="text-[10px] text-zinc-500 uppercase">Subtotal (Taxes incl.)</div>
            <div className="text-sm font-bold text-white">$384.50 USD</div>
          </div>
          <div className="px-3 py-1 rounded bg-white text-black font-semibold text-xs flex items-center gap-1.5">
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
    description:
      "Comprehensive inventory, stock control, purchasing pipelines, supplier records, and live reporting workflows. Engineered to prevent stockouts and provide actionable stock valuation metrics.",
    technologies: ["Flutter", "Dart", "Node.js", "Express.js", "MySQL"],
    viewLink: "#project-link",
    githubLink: "#project-link",
    renderPreview: () => (
      <div className="w-full h-full bg-zinc-950 p-4 font-mono text-[11px] text-zinc-300 flex flex-col justify-between select-none">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-1.5 text-white font-semibold">
            <DatabaseIcon className="w-3.5 h-3.5 text-zinc-400" />
            <span>STOCK_LEDGER // REORDER ENGINE</span>
          </div>
          <span className="text-[10px] text-amber-400 bg-amber-950/40 px-1.5 py-0.5 rounded border border-amber-500/20">
            2 Items Low Stock
          </span>
        </div>

        {/* Stock Status Visual Bars */}
        <div className="py-2 space-y-2.5 flex-1">
          <div>
            <div className="flex justify-between text-[10px] mb-1">
              <span className="text-zinc-200">SKU-99201 Thermal Rolls</span>
              <span className="text-zinc-400">85% In Stock (420 units)</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full w-[85%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[10px] mb-1">
              <span className="text-zinc-200">SKU-44102 Barcode Scanners</span>
              <span className="text-zinc-400">42% (34 units)</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-zinc-400 rounded-full w-[42%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[10px] mb-1">
              <span className="text-zinc-200">SKU-11094 POS Terminal Bases</span>
              <span className="text-amber-400">12% Reorder Trigger (8 units)</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-amber-400 rounded-full w-[12%]" />
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-400">
          <span>Sync Status: Real-time MySQL Stream</span>
          <span className="text-white font-medium">Audit: Verified</span>
        </div>
      </div>
    ),
  },
  {
    id: "business-management-application",
    title: "Business Management Application",
    category: "Enterprise Software",
    badge: "Multi-Role Suite",
    description:
      "An end-to-end business operations and management system. Handles multi-branch revenue reporting, staff role-based access control, supplier reconciliation, and financial analytics.",
    technologies: ["Flutter", "Dart", "REST APIs", "State Management", "Responsive UI"],
    viewLink: "#project-link",
    githubLink: "#project-link",
    renderPreview: () => (
      <div className="w-full h-full bg-zinc-950 p-4 font-mono text-[11px] text-zinc-300 flex flex-col justify-between select-none">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-1.5 text-white font-semibold">
            <BarChartIcon className="w-3.5 h-3.5 text-zinc-400" />
            <span>EXECUTIVE_ANALYTICS // MULTI-BRANCH</span>
          </div>
          <span className="text-zinc-500 text-[10px]">Q1 FISCAL</span>
        </div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-2 gap-2 py-2 flex-1">
          <div className="p-2 rounded bg-zinc-900/80 border border-white/5 flex flex-col justify-between">
            <span className="text-[10px] text-zinc-500 uppercase">Gross Revenue</span>
            <span className="text-sm font-bold text-white">$94,250</span>
            <span className="text-[10px] text-emerald-400">+14.2% vs last month</span>
          </div>
          <div className="p-2 rounded bg-zinc-900/80 border border-white/5 flex flex-col justify-between">
            <span className="text-[10px] text-zinc-500 uppercase">Total Transactions</span>
            <span className="text-sm font-bold text-white">4,821</span>
            <span className="text-[10px] text-zinc-400">Avg ticket: $19.55</span>
          </div>
        </div>

        {/* Roles Pill Bar */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px]">
          <span className="text-zinc-500">Access Roles:</span>
          <div className="flex gap-1.5">
            <span className="px-1.5 py-0.5 rounded bg-white/10 text-white font-medium">Admin</span>
            <span className="px-1.5 py-0.5 rounded bg-white/5 text-zinc-400">Branch Mgr</span>
            <span className="px-1.5 py-0.5 rounded bg-white/5 text-zinc-400">Cashier</span>
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
    description:
      "A high-performance Windows desktop application built with Flutter. Engineered specifically for desktop workflows with keyboard accelerators, split-screen data manipulation, and local database sync.",
    technologies: ["Flutter", "Dart", "Desktop Embedding", "MySQL", "Provider"],
    viewLink: "#project-link",
    githubLink: "#project-link",
    renderPreview: () => (
      <div className="w-full h-full bg-zinc-950 p-4 font-mono text-[11px] text-zinc-300 flex flex-col justify-between select-none">
        {/* Windows Titlebar Simulation */}
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-2">
            <MonitorIcon className="w-3.5 h-3.5 text-zinc-400" />
            <span className="text-white font-semibold">FlutterDesktop_x64.exe</span>
          </div>
          <div className="flex items-center gap-1.5 text-zinc-600">
            <span>_</span>
            <span>□</span>
            <span>✕</span>
          </div>
        </div>

        {/* Desktop Split View Mockup */}
        <div className="py-2 grid grid-cols-12 gap-2 flex-1">
          <div className="col-span-4 p-2 rounded bg-zinc-900/60 border border-white/5 space-y-1.5">
            <div className="text-[10px] text-zinc-500 uppercase">Navigator</div>
            <div className="px-1.5 py-1 rounded bg-white/10 text-white text-[10px]">Orders Grid</div>
            <div className="px-1.5 py-0.5 text-zinc-400 text-[10px]">Products</div>
            <div className="px-1.5 py-0.5 text-zinc-400 text-[10px]">Vendors</div>
            <div className="px-1.5 py-0.5 text-zinc-400 text-[10px]">Tax Engine</div>
          </div>
          <div className="col-span-8 p-2 rounded bg-zinc-900/60 border border-white/5 flex flex-col justify-between">
            <div>
              <div className="text-[10px] text-zinc-400 font-semibold mb-1">
                DataGrid: 12,400 Records Cached
              </div>
              <div className="text-[10px] text-zinc-500 leading-tight">
                Dual-screen window management, rapid keyboard barcode listeners active.
              </div>
            </div>
            <div className="text-[10px] text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Native Windows 11 Fluent Bridge</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-500">
          <span>Hotkeys: Ctrl+N (New) | Ctrl+S (Commit)</span>
          <span className="text-zinc-400 font-mono">60 FPS Native</span>
        </div>
      </div>
    ),
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-400 mb-3">
            <span>// 05. PROJECTS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Featured Projects &amp; Systems
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            A showcase of production software systems, business management engines, and desktop applications built with Flutter.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-white/25 hover:bg-zinc-900/70 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Project Visual / Code-Based Mockup with Zoom/Hover Animation */}
                <div className="relative h-56 sm:h-64 w-full border-b border-white/10 bg-zinc-950 overflow-hidden">
                  <div className="w-full h-full transform group-hover:scale-[1.02] transition-transform duration-300 ease-out">
                    {project.renderPreview()}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-zinc-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
                      {project.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-zinc-100 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons with Placeholders (as requested) */}
              <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 flex items-center gap-3">
                <a
                  href={project.viewLink}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-black bg-white hover:bg-zinc-200 transition-all shadow-md shadow-white/5"
                >
                  <span>View Project</span>
                  <ExternalLinkIcon className="w-3.5 h-3.5" />
                </a>

                <a
                  href={project.githubLink}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-300 bg-zinc-800/80 border border-white/10 hover:border-white/25 hover:text-white transition-all"
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
          <p className="text-xs font-mono text-zinc-500">
            * Repository links and live demonstration URLs are configured with editable placeholders ready to point to client installations or public codebases.
          </p>
        </div>
      </div>
    </section>
  );
}

