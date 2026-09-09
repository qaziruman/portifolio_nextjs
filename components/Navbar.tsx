"use client";

import React, { useState, useEffect } from "react";
import { FlutterIcon, MenuIcon, CloseIcon, ArrowRightIcon } from "./icons";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Learning", href: "#learning" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08080a]/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-zinc-100 font-semibold tracking-tight transition-all duration-200"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 border border-white/15 text-white shadow-inner group-hover:border-white/40 transition-colors">
              <FlutterIcon className="w-4 h-4 text-white" />
            </span>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold text-white tracking-wide flex items-center gap-1.5">
                Qazi Ruman Ali
              </span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono">
                Flutter Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-zinc-900/60 border border-white/10 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-white bg-white/10 shadow-sm"
                      : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-black bg-white hover:bg-zinc-200 transition-all duration-200 shadow-md shadow-white/5 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-900/80 border border-white/10 text-zinc-300 hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <CloseIcon className="w-5 h-5" />
              ) : (
                <MenuIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[61px] bottom-0 bg-[#08080a]/95 backdrop-blur-2xl border-b border-white/10 flex flex-col p-6 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-2 px-3">
              Navigation
            </span>
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className="text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRightIcon className="w-4 h-4 text-zinc-500" />
              </a>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-black bg-white hover:bg-zinc-200 transition-all text-center"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRightIcon className="w-4 h-4" />
            </a>
            <p className="text-center text-xs text-zinc-500 font-mono">
              Impact IT Solution • POS Engineer
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

