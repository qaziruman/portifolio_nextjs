"use client";

import React from "react";
import {
  SmartphoneIcon,
  ShoppingCartIcon,
  LayersIcon,
  MonitorIcon,
  CodeIcon,
  DatabaseIcon,
  ArrowRightIcon,
} from "./icons";

const SERVICES = [
  {
    icon: FlutterAppIconWrapper,
    title: "Flutter App Development",
    tagline: "Mobile Applications",
    colorClass: "from-cyan-500/20 to-blue-600/20 border-cyan-500/30 text-cyan-400 group-hover:border-cyan-400/60 group-hover:shadow-cyan-500/20",
    tagColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    accentDot: "bg-cyan-400",
    description:
      "Build modern, high-performance, and responsive cross-platform mobile applications for iOS and Android with smooth 60fps animations and native capabilities.",
    features: [
      "iOS & Android cross-platform",
      "Clean architecture & maintainable code",
      "Adaptive touch UI & smooth animations",
    ],
  },
  {
    icon: ShoppingCartIcon,
    title: "POS Systems",
    tagline: "Retail & Checkout",
    colorClass: "from-emerald-500/20 to-teal-600/20 border-emerald-500/30 text-emerald-400 group-hover:border-emerald-400/60 group-hover:shadow-emerald-500/20",
    tagColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    accentDot: "bg-emerald-400",
    description:
      "Develop Point of Sale solutions designed around real business workflows, barcode scanner connectivity, thermal receipt generation, and offline resiliency.",
    features: [
      "Sub-second checkout flow",
      "Thermal printer & scanner hardware bridge",
      "Offline transactional resilience",
    ],
  },
  {
    icon: LayersIcon,
    title: "Business Management Solutions",
    tagline: "Operations & ERP",
    colorClass: "from-violet-500/20 to-purple-600/20 border-violet-500/30 text-violet-400 group-hover:border-violet-400/60 group-hover:shadow-violet-500/20",
    tagColor: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    accentDot: "bg-violet-400",
    description:
      "Build tailored software for inventory control, stock replenishment, vendor purchase orders, accounting summaries, and executive KPI reporting.",
    features: [
      "Real-time inventory & stock tracking",
      "Purchasing & supplier management",
      "Detailed financial & sales analytics",
    ],
  },
  {
    icon: MonitorIcon,
    title: "Desktop Applications",
    tagline: "Windows & Desktop",
    colorClass: "from-sky-500/20 to-indigo-600/20 border-sky-500/30 text-sky-400 group-hover:border-sky-400/60 group-hover:shadow-sky-500/20",
    tagColor: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    accentDot: "bg-sky-400",
    description:
      "Develop native Windows desktop applications using Flutter, taking full advantage of widescreen real estate, keyboard navigation, and local databases.",
    features: [
      "Native Windows desktop compilation",
      "Keyboard shortcuts & high-density data grids",
      "Local SQLite / MySQL client persistence",
    ],
  },
  {
    icon: CodeIcon,
    title: "UI/UX Development",
    tagline: "Interface Engineering",
    colorClass: "from-amber-500/20 to-orange-600/20 border-amber-500/30 text-amber-400 group-hover:border-amber-400/60 group-hover:shadow-amber-500/20",
    tagColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    accentDot: "bg-amber-400",
    description:
      "Create clean, responsive, and intuitive interfaces with meticulous attention to ergonomics, typography hierarchy, accessibility, and user satisfaction.",
    features: [
      "Consistent design system implementation",
      "Touch & mouse dual optimization",
      "Dark & light high-contrast themes",
    ],
  },
  {
    icon: DatabaseIcon,
    title: "API & Backend Integration",
    tagline: "Full-Stack Connectivity",
    colorClass: "from-blue-500/20 to-cyan-600/20 border-blue-500/30 text-blue-400 group-hover:border-blue-400/60 group-hover:shadow-blue-500/20",
    tagColor: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    accentDot: "bg-blue-400",
    description:
      "Seamlessly integrate Flutter applications with RESTful APIs, Node.js/Express backends, authentication services, and relational databases.",
    features: [
      "RESTful API design & integration",
      "Relational schema design (MySQL)",
      "Secure token authentication & data validation",
    ],
  },
];

function FlutterAppIconWrapper(props: { className?: string }) {
  return <SmartphoneIcon {...props} />;
}

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 border-t border-slate-800/80 bg-[#060a16]/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3 shadow-sm shadow-cyan-950/50">
            <span>03. SERVICES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            What I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Do
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Engineering robust mobile, desktop, and retail software solutions built for performance, reliability, and business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl"
              >
                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.colorClass} border flex items-center justify-center shadow-lg group-hover:scale-105 transition-all`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border ${service.tagColor}`}>
                      {service.tagline}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 pt-4 border-t border-slate-800/80 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className={`w-1.5 h-1.5 rounded-full ${service.accentDot}`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                  >
                    <span>Inquire about this service</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
