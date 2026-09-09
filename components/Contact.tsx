"use client";

import React, { useState } from "react";
import {
  MailIcon,
  MapPinIcon,
  CopyIcon,
  CheckIcon,
  GithubIcon,
  TwitterXIcon,
  InstagramIcon,
  FacebookIcon,
  ArrowRightIcon,
} from "./icons";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "POS & Business Solutions",
    message: "",
  });

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3 shadow-sm shadow-cyan-950/50">
            <span>07. CONTACT &amp; INQUIRIES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Let&apos;s build something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              useful.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            I&apos;m open to collaborating on Flutter applications, POS systems, and business management solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-xl space-y-5">
              <h3 className="text-lg font-bold text-white mb-2">Direct Contact Channels</h3>

              {/* Primary Email */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex items-center justify-between gap-3 shadow-md">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <MailIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono uppercase text-cyan-400 font-semibold">Primary Email</div>
                    <a
                      href="mailto:qaziruman111@gmail.com"
                      className="text-xs sm:text-sm font-medium text-white hover:text-cyan-300 truncate block transition-colors"
                    >
                      qaziruman111@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopyEmail("qaziruman111@gmail.com")}
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all shrink-0"
                  aria-label="Copy primary email"
                  title="Copy to clipboard"
                >
                  {copiedEmail === "qaziruman111@gmail.com" ? (
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 font-semibold">
                      <CheckIcon className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <CopyIcon className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Secondary Email */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-indigo-500/30 transition-all flex items-center justify-between gap-3 shadow-md">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                    <MailIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono uppercase text-indigo-400 font-semibold">Secondary Email</div>
                    <a
                      href="mailto:qaziruman111@icloud.com"
                      className="text-xs sm:text-sm font-medium text-white hover:text-indigo-300 truncate block transition-colors"
                    >
                      qaziruman111@icloud.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopyEmail("qaziruman111@icloud.com")}
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-indigo-500/20 border border-slate-700 hover:border-indigo-500/40 text-slate-300 hover:text-indigo-300 transition-all shrink-0"
                  aria-label="Copy secondary email"
                  title="Copy to clipboard"
                >
                  {copiedEmail === "qaziruman111@icloud.com" ? (
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 font-semibold">
                      <CheckIcon className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <CopyIcon className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-3 shadow-md">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPinIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-emerald-400 font-semibold">Physical Location</div>
                  <div className="text-xs sm:text-sm font-medium text-white">Islamabad, Pakistan</div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Village and Post Office Herdogher, District Islamabad
                  </div>
                </div>
              </div>
            </div>

            {/* Social Network Profiles with Brand Colors */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-xl">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-4">
                Connect on Social &amp; Code:
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/qaziruman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-purple-500/50 hover:bg-purple-950/30 text-slate-300 hover:text-purple-300 flex items-center gap-2.5 transition-all text-xs font-semibold shadow-sm"
                >
                  <GithubIcon className="w-4 h-4 text-purple-400" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://x.com/qazirumanali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-sky-500/50 hover:bg-sky-950/30 text-slate-300 hover:text-sky-300 flex items-center gap-2.5 transition-all text-xs font-semibold shadow-sm"
                >
                  <TwitterXIcon className="w-4 h-4 text-sky-400" />
                  <span>X (Twitter)</span>
                </a>

                <a
                  href="https://www.instagram.com/qazirumanali/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-pink-500/50 hover:bg-pink-950/30 text-slate-300 hover:text-pink-300 flex items-center gap-2.5 transition-all text-xs font-semibold shadow-sm"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-400" />
                  <span>Instagram</span>
                </a>

                <a
                  href="https://www.facebook.com/share/1BixRcKKBi/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/50 hover:bg-blue-950/30 text-slate-300 hover:text-blue-300 flex items-center gap-2.5 transition-all text-xs font-semibold shadow-sm"
                >
                  <FacebookIcon className="w-4 h-4 text-blue-400" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-cyan-500/20 backdrop-blur-xl shadow-2xl shadow-cyan-950/20">
              {formSubmitted ? (
                <div className="py-12 px-4 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-500/20">
                    <CheckIcon className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Message Sent Successfully
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md leading-relaxed">
                    Thank you for reaching out, <strong className="text-white font-semibold">{formData.name}</strong>! I have received your message regarding &ldquo;{formData.subject}&rdquo; and will respond via <span className="text-cyan-300 underline">{formData.email}</span> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", email: "", subject: "POS & Business Solutions", message: "" });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-800 border border-cyan-500/30 hover:border-cyan-400 hover:bg-slate-700 transition-all shadow-md"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <h3 className="text-lg font-bold text-white">Send a Message</h3>
                    <span className="text-[11px] font-mono text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      ● Active Responses
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase text-cyan-400 mb-1.5 font-semibold">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Henderson"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 focus:outline-none text-sm text-white placeholder-slate-600 transition-all shadow-inner"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase text-cyan-400 mb-1.5 font-semibold">
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 focus:outline-none text-sm text-white placeholder-slate-600 transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Subject Selection */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono uppercase text-cyan-400 mb-1.5 font-semibold">
                      Inquiry Topic / Project Type
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 focus:outline-none text-sm text-white transition-all cursor-pointer shadow-inner"
                    >
                      <option value="POS & Business Solutions">Point of Sale (POS) Architecture</option>
                      <option value="Flutter Mobile App Development">Flutter Mobile Application</option>
                      <option value="Windows Desktop Flutter App">Windows Desktop Application</option>
                      <option value="Inventory & ERP Consulting">Inventory &amp; Business Management</option>
                      <option value="General Engineering Inquiry">General Engineering Collaboration</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase text-cyan-400 mb-1.5 font-semibold">
                      Message Details <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, timeline, hardware specifications, or collaboration goals..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 focus:outline-none text-sm text-white placeholder-slate-600 transition-all resize-none shadow-inner"
                    ></textarea>
                  </div>

                  {/* Submit Button with Radiant Gradient */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 transition-all duration-200 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Transmitting...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRightIcon className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] font-mono text-center text-slate-400">
                    Direct developer communication • Response within 24 business hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
