import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase size={14} />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-lg">
            Proven track record of driving technical initiatives and shipping robust architectures.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 space-y-12">
          {portfolioData.experiences.map((exp, index) => (
            <div key={index} className="relative pl-6 sm:pl-10 group">
              {/* Timeline marker bullet */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#12121a] border-2 border-purple-500 group-hover:bg-purple-500 group-hover:scale-125 transition-all shadow-md shadow-purple-500/30" />

              <div className="p-6 rounded-2xl bg-[#12121a]/80 border border-white/10 backdrop-blur-sm group-hover:border-purple-500/30 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {exp.role} <span className="text-purple-400 font-normal">@ {exp.company}</span>
                  </h3>
                  <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-gray-400">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <span className="text-purple-400 mt-1">▹</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
