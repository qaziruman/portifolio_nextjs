"use client";

import React from "react";
import {
  FlutterIcon,
  GithubIcon,
  TwitterXIcon,
  InstagramIcon,
  FacebookIcon,
  ChevronDownIcon,
} from "./icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#040711] py-12 sm:py-16 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-indigo-600/20 border border-cyan-500/30 text-cyan-400 shadow-md shadow-cyan-500/10">
                <FlutterIcon className="w-4 h-4 text-cyan-400" />
              </span>
              <span className="text-base font-bold text-white tracking-wide">
                Qazi Ruman Ali
              </span>
            </div>
            <p className="text-xs font-mono text-cyan-400/90">
              Flutter Developer | POS &amp; Business Management Solutions
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Impact IT Solution • Islamabad, Pakistan
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs font-medium">
            <a href="#about" className="hover:text-cyan-300 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">
              Skills
            </a>
            <a href="#services" className="hover:text-cyan-300 transition-colors">
              Services
            </a>
            <a href="#experience" className="hover:text-cyan-300 transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">
              Projects
            </a>
            <a href="#learning" className="hover:text-cyan-300 transition-colors">
              Learning
            </a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">
              Contact
            </a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/qaziruman"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-purple-300 hover:border-purple-500/40 hover:bg-purple-950/30 transition-all shadow-sm"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/qazirumanali"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-300 hover:border-sky-500/40 hover:bg-sky-950/30 transition-all shadow-sm"
                aria-label="Twitter/X Profile"
              >
                <TwitterXIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/qazirumanali/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-pink-300 hover:border-pink-500/40 hover:bg-pink-950/30 transition-all shadow-sm"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/1BixRcKKBi/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-300 hover:border-blue-500/40 hover:bg-blue-950/30 transition-all shadow-sm"
                aria-label="Facebook Profile"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400/50 hover:bg-cyan-950/30 flex items-center justify-center text-slate-400 hover:text-cyan-300 transition-all shadow-sm"
              aria-label="Scroll to top"
              title="Back to Top"
            >
              <div className="rotate-180">
                <ChevronDownIcon className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 text-center sm:text-left">
          <div>© 2026 Qazi Ruman Ali. All rights reserved.</div>
          <div className="text-cyan-400/80">Built with Next.js 16 • React 19 • TypeScript • Tailwind CSS</div>
        </div>
      </div>
    </footer>
  );
}
