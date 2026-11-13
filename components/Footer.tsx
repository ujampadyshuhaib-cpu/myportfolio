"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#0a0a0f] py-12 relative">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-xs">
            MS
          </div>
          <div>
            <div className="text-sm font-semibold text-white">{portfolioData.name}</div>
            <div className="text-xs text-gray-500">{portfolioData.title}</div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-gray-400">
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={portfolioData.twitter}
            target="_blank"
            rel="noreferrer"
            className="p-2 hover:text-white transition-colors"
            aria-label="Twitter / X"
          >
            <Twitter size={18} />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs text-gray-500">
            © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
