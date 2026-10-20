import React, { useState } from 'react';
import { FocusTrack, PortfolioData } from '../data/portfolio';

interface SkillsProps {
  data: PortfolioData;
  activeTrack: FocusTrack;
  isLight: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ data, activeTrack, isLight }) => {
  const [highlightedSkill, setHighlightedSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 sm:py-28 border-b border-current/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-current/15">
          <div>
            <div className="font-tech-mono text-xs uppercase tracking-widest text-[#D4633B] mb-2">
              03 // TECHNICAL INDEX &amp; STACK
            </div>
            <h2 className="font-display-condensed text-5xl sm:text-7xl tracking-tight">
              SKILLS &amp; <span className="font-editorial-serif italic font-normal text-[#A8B8A0] lowercase">capabilities</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm font-tech-mono opacity-75">
            Organized strictly from verified project architectures, academic coursework, and remote internship deliverables. No arbitrary percentage bars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {data.skillCategories.map((group) => {
            const isEmphasized =
              activeTrack === 'all' || group.category === 'both' || group.category === activeTrack;

            return (
              <div
                key={group.id}
                className={`p-6 rounded-sm border transition-all flex flex-col justify-between ${
                  isLight ? 'bg-white border-[#D8D2C7]' : 'bg-[#141412] border-[#282724]'
                } ${isEmphasized ? 'opacity-100' : 'opacity-50'}`}
              >
                <div>
                  <div className="flex items-center justify-between font-tech-mono text-xs text-[#D4633B] mb-3">
                    <span>INDEX // {group.index}</span>
                    <span>{group.skills.length} ITEMS</span>
                  </div>

                  <h3 className="font-display-condensed text-2xl sm:text-3xl tracking-wide mb-2">
                    {group.title}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed mb-5 ${
                      isLight ? 'text-[#57544E]' : 'text-[#A09C92]'
                    }`}
                  >
                    {group.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-current/10">
                  {group.skills.map((skill) => {
                    const isSelected = highlightedSkill === skill;
                    return (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => setHighlightedSkill(isSelected ? null : skill)}
                        className={`px-2.5 py-1 text-xs font-tech-mono rounded-sm border transition-colors ${
                          isSelected
                            ? 'bg-[#D4633B] text-[#F2EFE9] border-[#D4633B]'
                            : isLight
                            ? 'bg-[#F4F1EA] border-[#D8D2C7] hover:border-[#141413]'
                            : 'bg-[#181815] border-[#282724] hover:border-[#F2EFE9]/50'
                        }`}
                      >
                        {skill}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
