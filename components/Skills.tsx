"use client";

import React, { useState } from "react";
import {
  FlutterIcon,
  DartIcon,
  ReactIcon,
  NextjsIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  TailwindIcon,
  NodejsIcon,
  ExpressIcon,
  MysqlIcon,
  GitIcon,
  GithubIcon,
  CodeIcon,
  TerminalIcon,
  LayersIcon,
  MonitorIcon,
  SmartphoneIcon,
  DatabaseIcon,
  CpuIcon,
} from "./icons";

interface SkillItem {
  name: string;
  category: "app" | "web" | "backend" | "flutter" | "tools";
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  badgeBorder: string;
}

const SKILL_CATEGORIES = [
  { id: "all", label: "All Technologies" },
  { id: "app", label: "App Development" },
  { id: "flutter", label: "Flutter Ecosystem" },
  { id: "web", label: "Web Technologies" },
  { id: "backend", label: "Backend & DB" },
  { id: "tools", label: "Tools & Workflow" },
];

const SKILLS_DATA: SkillItem[] = [
  // App Development
  {
    name: "Flutter",
    category: "app",
    description: "Cross-platform mobile & desktop framework",
    icon: FlutterIcon,
    iconColor: "text-cyan-400 group-hover:text-cyan-300",
    badgeBorder: "group-hover:border-cyan-500/50 group-hover:shadow-cyan-500/10",
  },
  {
    name: "Dart",
    category: "app",
    description: "Object-oriented language with AOT compilation",
    icon: DartIcon,
    iconColor: "text-sky-400 group-hover:text-sky-300",
    badgeBorder: "group-hover:border-sky-500/50 group-hover:shadow-sky-500/10",
  },

  // Flutter Ecosystem
  {
    name: "Provider",
    category: "flutter",
    description: "DI & state propagation in Flutter",
    icon: LayersIcon,
    iconColor: "text-indigo-400 group-hover:text-indigo-300",
    badgeBorder: "group-hover:border-indigo-500/50 group-hover:shadow-indigo-500/10",
  },
  {
    name: "ChangeNotifier",
    category: "flutter",
    description: "Observable state encapsulation pattern",
    icon: CpuIcon,
    iconColor: "text-violet-400 group-hover:text-violet-300",
    badgeBorder: "group-hover:border-violet-500/50 group-hover:shadow-violet-500/10",
  },
  {
    name: "State Management",
    category: "flutter",
    description: "Predictable, reactive application state",
    icon: CpuIcon,
    iconColor: "text-purple-400 group-hover:text-purple-300",
    badgeBorder: "group-hover:border-purple-500/50 group-hover:shadow-purple-500/10",
  },
  {
    name: "Responsive UI",
    category: "flutter",
    description: "Adaptive layouts for desktop, tablet & mobile",
    icon: SmartphoneIcon,
    iconColor: "text-cyan-400 group-hover:text-cyan-300",
    badgeBorder: "group-hover:border-cyan-500/50 group-hover:shadow-cyan-500/10",
  },
  {
    name: "Desktop Apps",
    category: "flutter",
    description: "Native Windows desktop packaging & UX",
    icon: MonitorIcon,
    iconColor: "text-blue-400 group-hover:text-blue-300",
    badgeBorder: "group-hover:border-blue-500/50 group-hover:shadow-blue-500/10",
  },

  // Web
  {
    name: "React",
    category: "web",
    description: "Component-based web interface library",
    icon: ReactIcon,
    iconColor: "text-cyan-400 group-hover:text-cyan-300",
    badgeBorder: "group-hover:border-cyan-500/50 group-hover:shadow-cyan-500/10",
  },
  {
    name: "Next.js",
    category: "web",
    description: "Production React framework with App Router",
    icon: NextjsIcon,
    iconColor: "text-white group-hover:text-cyan-200",
    badgeBorder: "group-hover:border-white/40 group-hover:shadow-white/10",
  },
  {
    name: "TypeScript",
    category: "web",
    description: "Static type-safe JavaScript superset",
    icon: TypeScriptIcon,
    iconColor: "text-blue-400 group-hover:text-blue-300",
    badgeBorder: "group-hover:border-blue-500/50 group-hover:shadow-blue-500/10",
  },
  {
    name: "JavaScript",
    category: "web",
    description: "ES6+ modern script programming",
    icon: JavaScriptIcon,
    iconColor: "text-amber-400 group-hover:text-amber-300",
    badgeBorder: "group-hover:border-amber-500/50 group-hover:shadow-amber-500/10",
  },
  {
    name: "HTML5",
    category: "web",
    description: "Semantic accessible web structuring",
    icon: CodeIcon,
    iconColor: "text-orange-400 group-hover:text-orange-300",
    badgeBorder: "group-hover:border-orange-500/50 group-hover:shadow-orange-500/10",
  },
  {
    name: "CSS3",
    category: "web",
    description: "Modern layouts, flexbox & grid styling",
    icon: CodeIcon,
    iconColor: "text-sky-400 group-hover:text-sky-300",
    badgeBorder: "group-hover:border-sky-500/50 group-hover:shadow-sky-500/10",
  },
  {
    name: "Tailwind CSS",
    category: "web",
    description: "Utility-first modern design system",
    icon: TailwindIcon,
    iconColor: "text-teal-400 group-hover:text-teal-300",
    badgeBorder: "group-hover:border-teal-500/50 group-hover:shadow-teal-500/10",
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    description: "Server-side asynchronous JavaScript runtime",
    icon: NodejsIcon,
    iconColor: "text-emerald-400 group-hover:text-emerald-300",
    badgeBorder: "group-hover:border-emerald-500/50 group-hover:shadow-emerald-500/10",
  },
  {
    name: "Express.js",
    category: "backend",
    description: "Fast, unopinionated REST API framework",
    icon: ExpressIcon,
    iconColor: "text-slate-300 group-hover:text-white",
    badgeBorder: "group-hover:border-slate-500/50 group-hover:shadow-slate-500/10",
  },
  {
    name: "REST APIs",
    category: "backend",
    description: "Stateless client-server architecture",
    icon: DatabaseIcon,
    iconColor: "text-violet-400 group-hover:text-violet-300",
    badgeBorder: "group-hover:border-violet-500/50 group-hover:shadow-violet-500/10",
  },
  {
    name: "MySQL",
    category: "backend",
    description: "Relational database management system",
    icon: MysqlIcon,
    iconColor: "text-amber-400 group-hover:text-amber-300",
    badgeBorder: "group-hover:border-amber-500/50 group-hover:shadow-amber-500/10",
  },

  // Tools
  {
    name: "Git",
    category: "tools",
    description: "Distributed version control system",
    icon: GitIcon,
    iconColor: "text-orange-500 group-hover:text-orange-400",
    badgeBorder: "group-hover:border-orange-500/50 group-hover:shadow-orange-500/10",
  },
  {
    name: "GitHub",
    category: "tools",
    description: "Collaborative code repository & CI/CD",
    icon: GithubIcon,
    iconColor: "text-purple-400 group-hover:text-purple-300",
    badgeBorder: "group-hover:border-purple-500/50 group-hover:shadow-purple-500/10",
  },
  {
    name: "VS Code",
    category: "tools",
    description: "Primary development environment & extensions",
    icon: CodeIcon,
    iconColor: "text-sky-400 group-hover:text-sky-300",
    badgeBorder: "group-hover:border-sky-500/50 group-hover:shadow-sky-500/10",
  },
  {
    name: "Postman",
    category: "tools",
    description: "API testing, validation & documentation",
    icon: TerminalIcon,
    iconColor: "text-orange-400 group-hover:text-orange-300",
    badgeBorder: "group-hover:border-orange-500/50 group-hover:shadow-orange-500/10",
  },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredSkills =
    selectedCategory === "all"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="relative py-20 sm:py-28 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3 shadow-sm shadow-cyan-950/50">
            <span>/02. TECH STACK</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Technologies &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Toolkit
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A comprehensive overview of languages, frameworks, and architecture patterns I use in production to build enterprise-grade software.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {SKILL_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-semibold shadow-lg shadow-cyan-500/25 scale-105"
                    : "bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/30"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`p-5 rounded-xl bg-slate-900/60 border border-slate-800/90 hover:bg-slate-900/90 transition-all duration-200 group flex items-start gap-3.5 shadow-md ${skill.badgeBorder}`}
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-all shrink-0">
                  <Icon className={`w-5 h-5 ${skill.iconColor} transition-colors`} />
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="text-sm font-semibold text-white tracking-wide truncate group-hover:text-cyan-200 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Grouped Overview Callout with Radiant Colored Borders */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-2xl">
          <div className="flex flex-col gap-2 pl-4 border-l-2 border-cyan-400">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              Primary Focus
            </span>
            <div className="text-base font-semibold text-white">Flutter &amp; Dart</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Reactive UI, Provider/ChangeNotifier, performance tuning, and cross-platform desktop &amp; mobile execution.
            </p>
          </div>

          <div className="flex flex-col gap-2 pl-4 border-l-2 border-indigo-400">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold">
              Full-Stack &amp; Web
            </span>
            <div className="text-base font-semibold text-white">Next.js &amp; Node.js</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Modern frontend web tooling, RESTful backend APIs, and MySQL relational persistence.
            </p>
          </div>

          <div className="flex flex-col gap-2 pl-4 border-l-2 border-emerald-400">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              System Engineering
            </span>
            <div className="text-base font-semibold text-white">POS &amp; Hardware Bridge</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Barcode readers, thermal receipt printers, and offline-first transactional caching.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
