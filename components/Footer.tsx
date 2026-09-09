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
    <footer className="relative border-t border-white/10 bg-zinc-950 py-12 sm:py-16 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 border border-white/15 text-white">
                <FlutterIcon className="w-3.5 h-3.5 text-white" />
              </span>
              <span className="text-base font-bold text-white tracking-wide">
                Qazi Ruman Ali
              </span>
            </div>
            <p className="text-xs font-mono text-zinc-400">
              Flutter Developer | POS &amp; Business Management Solutions
            </p>
            <p className="text-xs text-zinc-500 mt-1">
              Impact IT Solution • Islamabad, Pakistan
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs font-medium">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#learning" className="hover:text-white transition-colors">
              Learning
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
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
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/qazirumanali"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-all"
                aria-label="Twitter/X Profile"
              >
                <TwitterXIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/qazirumanali/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-all"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/1BixRcKKBi/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-all"
                aria-label="Facebook Profile"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-all"
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 text-center sm:text-left">
          <div>© 2026 Qazi Ruman Ali. All rights reserved.</div>
          <div>Built with Next.js 16 • React 19 • TypeScript • Tailwind CSS</div>
        </div>
      </div>
    </footer>
  );
}

