import React from 'react';
import { PortfolioData } from '../data/portfolio';

interface AboutProps {
  data: PortfolioData;
  isLight: boolean;
}

export const About: React.FC<AboutProps> = ({ data, isLight }) => {
  const { about } = data;

  return (
    <section id="about" className="py-20 sm:py-28 border-b border-current/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="font-tech-mono text-xs uppercase tracking-widest text-[#D4633B] mb-3">
          {about.sectionSubtitle}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Editorial Headline & Key Facts */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-editorial-serif text-4xl sm:text-5xl leading-[1.1] tracking-tight">
              {about.headline}
            </h2>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {about.keyFacts.map((fact) => (
                <div
                  key={fact.label}
                  className={`p-4 rounded-sm border ${
                    isLight ? 'bg-white border-[#D8D2C7]' : 'bg-[#141412] border-[#282724]'
                  }`}
                >
                  <div className="font-tech-mono text-[10px] uppercase tracking-widest opacity-65">
                    {fact.label}
                  </div>
                  <div className="font-display-condensed text-2xl sm:text-3xl text-[#D4633B] mt-1">
                    {fact.value}
                  </div>
                  <div className="text-xs opacity-80 mt-1 leading-snug">{fact.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative Bio & 3 Engineering Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg sm:text-xl font-medium leading-relaxed">{about.leadParagraph}</p>

            {about.bodyParagraphs.map((para, i) => (
              <p
                key={i}
                className={`text-sm sm:text-base leading-relaxed ${
                  isLight ? 'text-[#57544E]' : 'text-[#A09C92]'
                }`}
              >
                {para}
              </p>
            ))}

            {/* Three Pillars */}
            <div className="pt-6 border-t border-current/15 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {about.engineeringPillars.map((pillar) => (
                <div key={pillar.number} className="space-y-2">
                  <div className="font-tech-mono text-xs text-[#D4633B]">/{pillar.number}</div>
                  <h3 className="font-semibold text-base">{pillar.title}</h3>
                  <p
                    className={`text-xs leading-relaxed ${
                      isLight ? 'text-[#57544E]' : 'text-[#A09C92]'
                    }`}
                  >
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
