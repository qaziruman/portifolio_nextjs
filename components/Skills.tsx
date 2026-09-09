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
  },
  {
    name: "Dart",
    category: "app",
    description: "Object-oriented language with AOT compilation",
    icon: DartIcon,
  },

  // Flutter Ecosystem
  {
    name: "Provider",
    category: "flutter",
    description: "DI & state propagation in Flutter",
    icon: LayersIcon,
  },
  {
    name: "ChangeNotifier",
    category: "flutter",
    description: "Observable state encapsulation pattern",
    icon: CpuIcon,
  },
  {
    name: "State Management",
    category: "flutter",
    description: "Predictable, reactive application state",
    icon: CpuIcon,
  },
  {
    name: "Responsive UI",
    category: "flutter",
    description: "Adaptive layouts for desktop, tablet & mobile",
    icon: SmartphoneIcon,
  },
  {
    name: "Desktop Apps",
    category: "flutter",
    description: "Native Windows desktop packaging & UX",
    icon: MonitorIcon,
  },

  // Web
  {
    name: "React",
    category: "web",
    description: "Component-based web interface library",
    icon: ReactIcon,
  },
  {
    name: "Next.js",
    category: "web",
    description: "Production React framework with App Router",
    icon: NextjsIcon,
  },
  {
    name: "TypeScript",
    category: "web",
    description: "Static type-safe JavaScript superset",
    icon: TypeScriptIcon,
  },
  {
    name: "JavaScript",
    category: "web",
    description: "ES6+ modern script programming",
    icon: JavaScriptIcon,
  },
  {
    name: "HTML5",
    category: "web",
    description: "Semantic accessible web structuring",
    icon: CodeIcon,
  },
  {
    name: "CSS3",
    category: "web",
    description: "Modern layouts, flexbox & grid styling",
    icon: CodeIcon,
  },
  {
    name: "Tailwind CSS",
    category: "web",
    description: "Utility-first modern design system",
    icon: TailwindIcon,
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    description: "Server-side asynchronous JavaScript runtime",
    icon: NodejsIcon,
  },
  {
    name: "Express.js",
    category: "backend",
    description: "Fast, unopinionated REST API framework",
    icon: ExpressIcon,
  },
  {
    name: "REST APIs",
    category: "backend",
    description: "Stateless client-server architecture",
    icon: DatabaseIcon,
  },
  {
    name: "MySQL",
    category: "backend",
    description: "Relational database management system",
    icon: MysqlIcon,
  },

  // Tools
  {
    name: "Git",
    category: "tools",
    description: "Distributed version control system",
    icon: GitIcon,
  },
  {
    name: "GitHub",
    category: "tools",
    description: "Collaborative code repository & CI/CD",
    icon: GithubIcon,
  },
  {
    name: "VS Code",
    category: "tools",
    description: "Primary development environment & extensions",
    icon: CodeIcon,
  },
  {
    name: "Postman",
    category: "tools",
    description: "API testing, validation & documentation",
    icon: TerminalIcon,
  },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredSkills =
    selectedCategory === "all"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="relative py-20 sm:py-28 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-400 mb-3">
            <span>// 02. TECH STACK</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Technologies &amp; Toolkit
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
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
                    ? "bg-white text-black font-semibold shadow-md shadow-white/10"
                    : "bg-zinc-900/80 border border-white/10 text-zinc-400 hover:text-white hover:border-white/25"
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
                className="p-5 rounded-xl bg-zinc-900/40 border border-white/10 hover:border-white/25 hover:bg-zinc-900/80 transition-all duration-200 group flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-800/70 border border-white/10 flex items-center justify-center text-zinc-200 group-hover:text-white group-hover:border-white/20 group-hover:scale-105 transition-all shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold text-white tracking-wide truncate">
                      {skill.name}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Grouped Overview Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              Primary Focus
            </span>
            <div className="text-base font-semibold text-white">Flutter &amp; Dart</div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Reactive UI, Provider/ChangeNotifier, performance tuning, and cross-platform desktop &amp; mobile execution.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              Full-Stack &amp; Web
            </span>
            <div className="text-base font-semibold text-white">Next.js &amp; Node.js</div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Modern frontend web tooling, RESTful backend APIs, and MySQL relational persistence.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              System Engineering
            </span>
            <div className="text-base font-semibold text-white">POS &amp; Hardware Bridge</div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Barcode readers, thermal receipt printers, and offline-first transactional caching.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

