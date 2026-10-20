import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { PortfolioData } from '../data/portfolio';

interface ExperienceProps {
  data: PortfolioData;
  isLight: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ data, isLight }) => {
  return (
    <section id="experience" className="py-20 sm:py-28 border-b border-current/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="pb-10 border-b border-current/15">
          <div className="font-tech-mono text-xs uppercase tracking-widest text-[#D4633B] mb-2">
            04 // EXPERIENCE, INTERNSHIPS &amp; ACADEMIC CREDENTIALS
          </div>
          <h2 className="font-display-condensed text-5xl sm:text-7xl tracking-tight">
            EXPERIENCE &amp; <span className="font-editorial-serif italic font-normal text-[#A8B8A0] lowercase">education</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12">
          {/* Left 7 Columns: Professional & Technical Experience */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-2 font-tech-mono text-xs uppercase tracking-widest text-[#D4633B]">
              <Briefcase className="w-4 h-4" />
              <span>Technical Experience &amp; Leadership</span>
            </div>

            <div className="space-y-6">
              {data.experience.map((item) => (
                <div
                  key={item.id}
                  className={`p-6 rounded-sm border ${
                    isLight ? 'bg-white border-[#D8D2C7]' : 'bg-[#141412] border-[#282724]'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 font-tech-mono text-xs mb-2">
                    <span className="text-[#D4633B] font-semibold">
                      {item.index} // {item.type.toUpperCase()}
                    </span>
                    <span className="opacity-75">
                      {item.period} · {item.location}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold">{item.role}</h3>
                  <div className="font-editorial-serif italic text-lg text-[#A8B8A0] mb-4">
                    {item.organization}
                  </div>

                  <ul className="space-y-2.5 text-sm leading-relaxed mb-5">
                    {item.highlights.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#D4633B] font-tech-mono text-xs mt-1">→</span>
                        <span className={isLight ? 'text-[#57544E]' : 'text-[#A09C92]'}>
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-current/10">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-tech-mono rounded-sm border border-current/15 opacity-80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right 5 Columns: Academic Education */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-2 font-tech-mono text-xs uppercase tracking-widest text-[#A8B8A0]">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Foundation</span>
            </div>

            <div className="space-y-6">
              {data.education.map((edu) => (
                <div
                  key={edu.id}
                  className={`p-6 rounded-sm border ${
                    isLight ? 'bg-white border-[#D8D2C7]' : 'bg-[#141412] border-[#282724]'
                  }`}
                >
                  <div className="flex items-center justify-between font-tech-mono text-xs mb-3">
                    <span className="opacity-75">{edu.period}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#D4633B]/15 text-[#D4633B] font-semibold">
                      {edu.scoreLabel}: {edu.scoreValue}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold leading-snug">{edu.degree}</h3>
                  <div className="font-editorial-serif italic text-lg text-[#A8B8A0] mt-1 mb-4">
                    {edu.institution} — {edu.location}
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm leading-relaxed">
                    {edu.highlights.map((hl, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2 ${
                          isLight ? 'text-[#57544E]' : 'text-[#A09C92]'
                        }`}
                      >
                        <span className="text-[#A8B8A0] font-tech-mono">•</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
