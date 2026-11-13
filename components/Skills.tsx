"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Layers, CheckCircle2 } from "lucide-react";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...portfolioData.skills.map((c) => c.name)];

  const displayedSkills =
    selectedCategory === "All"
      ? portfolioData.skills.flatMap((c) => c.skills)
      : portfolioData.skills.find((c) => c.name === selectedCategory)?.skills || [];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills &amp; Technology Stack
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-xl">
            A comprehensive look at the modern languages, frameworks, and cloud infrastructure tools I use daily.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                    : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedSkills.map((skill, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-[#12121a]/80 border border-white/10 hover:border-blue-500/30 transition-all group backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-white text-sm group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </span>
                <span className="text-xs font-mono text-gray-400">{skill.level}%</span>
              </div>
              {/* Progress bar */}
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
