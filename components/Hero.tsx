"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowRight, Download, Terminal, Sparkles, Check, Copy } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{portfolioData.status}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Engineering resilient systems with{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              pixel-level craft.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed">
            Hi, I&apos;m <span className="text-white font-medium">{portfolioData.name}</span> — a{" "}
            <span className="text-blue-400 font-medium">{portfolioData.title}</span> specializing in distributed microservices, Next.js applications, and performant web infrastructure.
          </p>

          {/* CTA Group */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
            >
              Explore Projects
              <ArrowRight size={16} />
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 font-medium text-sm rounded-xl backdrop-blur-sm transition-all hover:border-white/20 active:scale-95"
            >
              {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              {copied ? "Email Copied!" : "Copy Email"}
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-gray-400 hover:text-white font-medium text-sm transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Interactive Code / Terminal Card Preview */}
        <div className="mt-16 max-w-3xl mx-auto rounded-2xl bg-[#12121a]/90 border border-white/10 shadow-2xl shadow-blue-900/10 backdrop-blur-xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-gray-400">developer@system:~</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Terminal size={14} />
              <span>bash</span>
            </div>
          </div>
          <div className="p-6 font-mono text-xs sm:text-sm text-gray-300 overflow-x-auto leading-relaxed">
            <div className="text-gray-500 mb-2">// Quick summary</div>
            <div>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-400">engineer</span> = &#123;
            </div>
            <div className="pl-6">
              <span className="text-gray-400">name:</span>{" "}
              <span className="text-emerald-300">&quot;{portfolioData.name}&quot;</span>,
            </div>
            <div className="pl-6">
              <span className="text-gray-400">role:</span>{" "}
              <span className="text-emerald-300">&quot;{portfolioData.title}&quot;</span>,
            </div>
            <div className="pl-6">
              <span className="text-gray-400">stack:</span> [
              <span className="text-yellow-300">&quot;TypeScript&quot;</span>,{" "}
              <span className="text-yellow-300">&quot;Next.js&quot;</span>,{" "}
              <span className="text-yellow-300">&quot;Node.js&quot;</span>,{" "}
              <span className="text-yellow-300">&quot;PostgreSQL&quot;</span>,{" "}
              <span className="text-yellow-300">&quot;AWS&quot;</span>
              ],
            </div>
            <div className="pl-6">
              <span className="text-gray-400">passion:</span>{" "}
              <span className="text-emerald-300">&quot;High-throughput systems & slick UIs&quot;</span>,
            </div>
            <div className="pl-6">
              <span className="text-gray-400">currentlyLearning:</span>{" "}
              <span className="text-emerald-300">&quot;Rust & Distributed consensus algorithms&quot;</span>
            </div>
            <div>&#125;;</div>
            <div className="mt-3 text-emerald-400 flex items-center gap-1.5">
              <span>❯</span>
              <span>engineer.buildAwesomeStuff()</span>
              <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
