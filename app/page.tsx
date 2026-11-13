"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Copy, Check, Terminal, ExternalLink, Mail, Phone } from "lucide-react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyAllCode = () => {
    const el = document.getElementById("terminal-code");
    if (el) {
      navigator.clipboard.writeText(el.innerText);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center py-8 px-4 sm:px-6 relative antialiased bg-[#07070b] text-gray-200 selection:bg-blue-600 selection:text-white">
      {/* Background glow and subtle grid */}
      <div className="fixed inset-0 bg-gradient-radial from-blue-600/10 via-transparent to-transparent pointer-events-none -z-10" />
      <div className="fixed inset-0 bg-grid-pattern opacity-60 pointer-events-none -z-10" />

      <div className="w-full max-w-4xl my-auto">
        {/* Top Mini Bar */}
        <div className="flex items-center justify-between mb-3 px-1 text-xs text-gray-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-gray-300">{portfolioData.name}</span>
            <span className="text-gray-600">•</span>
            <span className="text-emerald-400">Available for hire</span>
          </div>
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            GitHub Profile <ExternalLink size={12} />
          </a>
        </div>

        {/* Terminal Window Card */}
        <div className="rounded-2xl bg-[#0e0e18]/95 border border-white/10 shadow-2xl shadow-indigo-950/40 backdrop-blur-2xl overflow-hidden transition-all duration-300 hover:border-indigo-500/30">
          
          {/* Window Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#131322] border-b border-white/10 select-none">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
              <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
              <div className="w-3 h-3 rounded-full bg-[#10b981]" />
              <span className="ml-3 text-xs font-mono text-gray-400 flex items-center gap-1.5">
                <span className="text-blue-400">developer@system</span>
                <span className="text-gray-600">:</span>
                <span className="text-purple-400">~</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={copyAllCode}
                className="text-xs text-gray-400 hover:text-white px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 border border-white/5 transition-all flex items-center gap-1.5 font-mono"
              >
                {copiedCode ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                <span>{copiedCode ? "copied!" : "copy"}</span>
              </button>
              <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                <Terminal size={12} /> bash
              </span>
            </div>
          </div>

          {/* Code Content */}
          <div
            id="terminal-code"
            className="p-5 sm:p-7 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-gray-300"
          >
            <div className="text-gray-500">// {portfolioData.name} — Full-Stack Developer Portfolio</div>
            <div className="text-gray-500 mb-3">// BCA Final Year @ Kannur University • Kasaragod, Kerala</div>

            <div>
              <span className="text-purple-400 font-semibold">const</span>{" "}
              <span className="text-blue-400 font-semibold">developer</span> = &#123;
            </div>

            <div className="pl-5 sm:pl-7">
              <span className="text-gray-400">name:</span>{" "}
              <span className="text-emerald-300">&quot;{portfolioData.name}&quot;</span>,
            </div>
            <div className="pl-5 sm:pl-7">
              <span className="text-gray-400">role:</span>{" "}
              <span className="text-emerald-300">&quot;{portfolioData.title}&quot;</span>,
            </div>
            <div className="pl-5 sm:pl-7">
              <span className="text-gray-400">status:</span>{" "}
              <span className="text-emerald-300">&quot;{portfolioData.status}&quot;</span>,
            </div>
            <div className="pl-5 sm:pl-7">
              <span className="text-gray-400">location:</span>{" "}
              <span className="text-emerald-300">&quot;{portfolioData.location}&quot;</span>,
            </div>

            {/* Education */}
            <div className="pl-5 sm:pl-7 mt-2">
              <span className="text-gray-400">education:</span> &#123;
            </div>
            <div className="pl-10 sm:pl-14">
              <span className="text-gray-400">degree:</span>{" "}
              <span className="text-emerald-300">&quot;Bachelor of Computer Applications (BCA)&quot;</span>,
            </div>
            <div className="pl-10 sm:pl-14">
              <span className="text-gray-400">university:</span>{" "}
              <span className="text-emerald-300">&quot;Kannur University&quot;</span>,
            </div>
            <div className="pl-10 sm:pl-14">
              <span className="text-gray-400">timeline:</span>{" "}
              <span className="text-emerald-300">&quot;2023 — 2026 (Final Year)&quot;</span>
            </div>
            <div className="pl-5 sm:pl-7">&#125;,</div>

            {/* Contact */}
            <div className="pl-5 sm:pl-7 mt-2">
              <span className="text-gray-400">contact:</span> &#123;
            </div>
            <div className="pl-10 sm:pl-14">
              <span className="text-gray-400">email:</span>{" "}
              <a href={`mailto:${portfolioData.email}`} className="text-yellow-300 hover:underline">
                &quot;{portfolioData.email}&quot;
              </a>,
            </div>
            <div className="pl-10 sm:pl-14">
              <span className="text-gray-400">phone:</span>{" "}
              <a href="tel:+919400376093" className="text-yellow-300 hover:underline">
                &quot;+91 9400376093&quot;
              </a>,
            </div>
            <div className="pl-10 sm:pl-14">
              <span className="text-gray-400">github:</span>{" "}
              <a href={portfolioData.github} target="_blank" rel="noreferrer" className="text-yellow-300 hover:underline">
                &quot;{portfolioData.github}&quot;
              </a>
            </div>
            <div className="pl-5 sm:pl-7">&#125;,</div>

            {/* Skills */}
            <div className="pl-5 sm:pl-7 mt-2">
              <span className="text-gray-400">skills:</span> &#123;
            </div>
            <div className="pl-10 sm:pl-14">
              <span className="text-gray-400">frontend:</span> [
              <span className="text-yellow-300">&quot;React.js&quot;</span>,{" "}
              <span className="text-yellow-300">&quot;Next.js&quot;</span>,{" "}
              <span className="text-yellow-300">&quot;JavaScript (ES6+)&quot;</span>,{" "}
              <span className="text-yellow-300">&quot;Tailwind CSS&quot;</span>
              ],
            </div>
            <div className="pl-10 sm:pl-14">
              <span className="text-gray-400">backend:</span> [
              <span className="text-yellow-300">&quot;Node.js&quot;</span>,{" "}
              <span className="text-yellow-300">&quot;Express.js&quot;</span>,{" "}
              <span className="text-yellow-300">&quot;REST APIs&quot;</span>,{" "}
              <span className="text-yellow-300">&quot;Python&quot;</span>
              ],
            </div>
            <div className="pl-10 sm:pl-14">
              <span className="text-gray-400">databases:</span> [
              <span className="text-yellow-300">&quot;MySQL&quot;</span>,{" "}
              <span className="text-yellow-300">&quot;MongoDB&quot;</span>
              ],
            </div>
            <div className="pl-10 sm:pl-14">
              <span className="text-gray-400">tools:</span> [
              <span className="text-yellow-300">&quot;Git&quot;</span>,{" "}
              <span className="text-yellow-300">&quot;GitHub&quot;</span>,{" "}
              <span className="text-yellow-300">&quot;VS Code&quot;</span>,{" "}
              <span className="text-yellow-300">&quot;Postman&quot;</span>
              ]
            </div>
            <div className="pl-5 sm:pl-7">&#125;,</div>

            {/* Projects */}
            <div className="pl-5 sm:pl-7 mt-2">
              <span className="text-gray-400">projects:</span> [
            </div>
            {portfolioData.projects.map((p, idx) => (
              <div key={idx} className="pl-10 sm:pl-14 mt-1">
                &#123; <span className="text-gray-400">title:</span>{" "}
                <span className="text-emerald-300">&quot;{p.title}&quot;</span>,{" "}
                <span className="text-gray-400">tech:</span> [
                {p.tags.map((t, i) => (
                  <span key={i}>
                    <span className="text-yellow-300">&quot;{t}&quot;</span>
                    {i < p.tags.length - 1 ? ", " : ""}
                  </span>
                ))}
                ],{" "}
                <span className="text-gray-400">desc:</span>{" "}
                <span className="text-emerald-300">&quot;{p.description}&quot;</span> &#125;
                {idx < portfolioData.projects.length - 1 ? "," : ""}
              </div>
            ))}
            <div className="pl-5 sm:pl-7">],</div>

            <div className="pl-5 sm:pl-7 mt-2">
              <span className="text-gray-400">passion:</span>{" "}
              <span className="text-emerald-300">&quot;Building performant web applications and clean backend APIs&quot;</span>
            </div>

            <div>&#125;;</div>

            {/* Prompt */}
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-emerald-400 font-semibold text-xs sm:text-sm">
              <span>❯</span>
              <span className="text-emerald-300">developer.connect()</span>
              <span className="inline-block w-2.5 h-4 bg-emerald-400 animate-pulse ml-1" />
            </div>
          </div>

          {/* Quick Action Footer */}
          <div className="px-5 py-3.5 bg-[#10101e] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={`mailto:${portfolioData.email}`}
                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors flex items-center gap-1.5"
              >
                <Mail size={13} /> Email Me
              </a>
              <a
                href="tel:+919400376093"
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-emerald-400 border border-emerald-500/30 transition-colors flex items-center gap-1.5"
              >
                <Phone size={13} /> +91 9400376093
              </a>
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 transition-colors flex items-center gap-1.5"
              >
                GitHub Profile ↗
              </a>
            </div>

            <button
              onClick={copyEmail}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {copied ? "copied!" : "copy email"}
            </button>
          </div>
        </div>

        <div className="text-center text-xs text-gray-600 mt-4 font-mono">
          © {new Date().getFullYear()} {portfolioData.name} • Kannur University
        </div>
      </div>
    </main>
  );
}
