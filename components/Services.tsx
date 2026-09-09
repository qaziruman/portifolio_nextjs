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
    <section id="services" className="relative py-20 sm:py-28 border-t border-white/10 bg-zinc-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-400 mb-3">
            <span>// 03. SERVICES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            What I Do
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed">
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
                className="group relative p-7 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-white/25 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200 group-hover:text-white group-hover:border-white/30 group-hover:scale-105 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      {service.tagline}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zinc-100 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 pt-4 border-t border-white/5 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 group-hover:bg-white transition-colors" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors"
                  >
                    <span>Inquire about this service</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
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

