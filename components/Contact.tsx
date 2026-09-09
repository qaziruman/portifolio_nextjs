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
  SparklesIcon,
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
    // Simulate instantaneous client-side handling & feedback
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-400 mb-3">
            <span>// 07. CONTACT &amp; INQUIRIES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Let&apos;s build something useful.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            I&apos;m open to collaborating on Flutter applications, POS systems, and business management solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/40 border border-white/10 space-y-6">
              <h3 className="text-lg font-bold text-white mb-2">Direct Contact Channels</h3>

              {/* Primary Email */}
              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 shrink-0">
                    <MailIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono uppercase text-zinc-500">Primary Email</div>
                    <a
                      href="mailto:qaziruman111@gmail.com"
                      className="text-xs sm:text-sm font-medium text-white hover:underline truncate block"
                    >
                      qaziruman111@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopyEmail("qaziruman111@gmail.com")}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-zinc-300 hover:text-white transition-all shrink-0"
                  aria-label="Copy primary email"
                  title="Copy to clipboard"
                >
                  {copiedEmail === "qaziruman111@gmail.com" ? (
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <CheckIcon className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <CopyIcon className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Secondary Email */}
              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 shrink-0">
                    <MailIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono uppercase text-zinc-500">Secondary Email</div>
                    <a
                      href="mailto:qaziruman111@icloud.com"
                      className="text-xs sm:text-sm font-medium text-white hover:underline truncate block"
                    >
                      qaziruman111@icloud.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopyEmail("qaziruman111@icloud.com")}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-zinc-300 hover:text-white transition-all shrink-0"
                  aria-label="Copy secondary email"
                  title="Copy to clipboard"
                >
                  {copiedEmail === "qaziruman111@icloud.com" ? (
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <CheckIcon className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <CopyIcon className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 shrink-0">
                  <MapPinIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-zinc-500">Physical Location</div>
                  <div className="text-xs sm:text-sm font-medium text-white">Islamabad, Pakistan</div>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    Village and Post Office Herdogher, District Islamabad
                  </div>
                </div>
              </div>
            </div>

            {/* Social Network Profiles */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">
                Connect on Social &amp; Code:
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/qaziruman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-950/60 border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white flex items-center gap-2.5 transition-all text-xs font-semibold"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://x.com/qazirumanali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-950/60 border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white flex items-center gap-2.5 transition-all text-xs font-semibold"
                >
                  <TwitterXIcon className="w-4 h-4" />
                  <span>X (Twitter)</span>
                </a>

                <a
                  href="https://www.instagram.com/qazirumanali/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-950/60 border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white flex items-center gap-2.5 transition-all text-xs font-semibold"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Instagram</span>
                </a>

                <a
                  href="https://www.facebook.com/share/1BixRcKKBi/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-950/60 border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white flex items-center gap-2.5 transition-all text-xs font-semibold"
                >
                  <FacebookIcon className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Validation & Feedback */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-white/10 backdrop-blur-xl">
              {formSubmitted ? (
                <div className="py-12 px-4 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-xl">
                    <CheckIcon className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Message Sent Successfully
                  </h3>
                  <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
                    Thank you for reaching out, <strong className="text-white">{formData.name}</strong>! I have received your message regarding &ldquo;{formData.subject}&rdquo; and will respond via <span className="text-zinc-200 underline">{formData.email}</span> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", email: "", subject: "POS & Business Solutions", message: "" });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-xl text-xs font-semibold text-zinc-300 bg-zinc-800 border border-white/10 hover:text-white hover:border-white/20 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <h3 className="text-lg font-bold text-white">Send a Message</h3>
                    <span className="text-[11px] font-mono text-zinc-500">Quick Response</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                        Your Name <span className="text-zinc-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Henderson"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-white/10 focus:border-white/30 focus:outline-none text-sm text-white placeholder-zinc-600 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                        Your Email <span className="text-zinc-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-white/10 focus:border-white/30 focus:outline-none text-sm text-white placeholder-zinc-600 transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject Selection */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                      Inquiry Topic / Project Type
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-white/10 focus:border-white/30 focus:outline-none text-sm text-white transition-all cursor-pointer"
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
                    <label htmlFor="message" className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                      Message Details <span className="text-zinc-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, timeline, hardware specifications, or collaboration goals..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-white/10 focus:border-white/30 focus:outline-none text-sm text-white placeholder-zinc-600 transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-black bg-white hover:bg-zinc-200 transition-all duration-200 shadow-lg shadow-white/5 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                        <span>Transmitting...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRightIcon className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] font-mono text-center text-zinc-500">
                    Direct communication • No unsolicited third-party marketing.
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

