import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Zap, Code2, Globe, Cpu, Layers } from "lucide-react";

export default function BentoStats() {
  return (
    <section id="about" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Main Stat Card */}
          <div className="md:col-span-2 rounded-2xl bg-[#12121a]/80 border border-white/10 p-6 backdrop-blur-md relative overflow-hidden group hover:border-blue-500/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all pointer-events-none" />
            <div className="flex items-center gap-3 text-blue-400 mb-4">
              <Zap size={20} />
              <span className="text-xs font-semibold uppercase tracking-wider">Engineering Philosophy</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Built for Performance & Scale</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Every project is constructed with zero tolerance for bloat. Focused on microsecond-level query optimizations, robust caching layers, and high-fidelity client interactions.
            </p>
          </div>

          {/* Quick Metrics */}
          {portfolioData.stats.slice(0, 2).map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#12121a]/80 border border-white/10 p-6 backdrop-blur-md flex flex-col justify-between hover:border-white/20 transition-all"
            >
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">{item.label}</span>
              <div className="text-3xl font-extrabold text-white mt-4 bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                {item.value}
              </div>
            </div>
          ))}

          {/* Location & Remote Ready */}
          <div className="rounded-2xl bg-[#12121a]/80 border border-white/10 p-6 backdrop-blur-md flex flex-col justify-between hover:border-white/20 transition-all">
            <div className="flex items-center gap-2 text-indigo-400">
              <Globe size={18} />
              <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Location</span>
            </div>
            <div className="mt-4">
              <div className="text-base font-semibold text-white">{portfolioData.location}</div>
              <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Available worldwide (UTC-8 to UTC+5:30)
              </div>
            </div>
          </div>

          {/* Remaining Metrics */}
          {portfolioData.stats.slice(2, 4).map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#12121a]/80 border border-white/10 p-6 backdrop-blur-md flex flex-col justify-between hover:border-white/20 transition-all"
            >
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">{item.label}</span>
              <div className="text-3xl font-extrabold text-white mt-4 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                {item.value}
              </div>
            </div>
          ))}

          {/* Tech Specialty Pill */}
          <div className="rounded-2xl bg-[#12121a]/80 border border-white/10 p-6 backdrop-blur-md flex flex-col justify-between hover:border-white/20 transition-all">
            <div className="flex items-center gap-2 text-purple-400">
              <Cpu size={18} />
              <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Specialization</span>
            </div>
            <div className="mt-4">
              <div className="text-base font-semibold text-white">Full-Stack Cloud Native</div>
              <div className="text-xs text-gray-400 mt-1">Next.js App Router + Go/Node microservices</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
