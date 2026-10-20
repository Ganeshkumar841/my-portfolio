import React from 'react';
import { ArrowDownRight, Download, Terminal, Sparkles, MapPin } from 'lucide-react';
import { FocusTrack, PortfolioData } from '../data/portfolio';

interface HeroProps {
  data: PortfolioData;
  activeTrack: FocusTrack;
  isLight: boolean;
  onExploreWork: () => void;
  onOpenResumeModal: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  data,
  activeTrack,
  isLight,
  onExploreWork,
  onOpenResumeModal,
  onContactClick,
}) => {
  const { personalInfo } = data;

  return (
    <section
      id="top"
      className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-current/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Row: Location Metadata & Patrick David-inspired Starburst Availability Emblem */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 sm:mb-12">
          <div className="flex flex-wrap items-center gap-3 text-xs font-tech-mono tracking-wider uppercase opacity-80">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D4633B]" />
              {personalInfo.location}
            </span>
            <span className="opacity-40">/</span>
            <span className="inline-flex items-center gap-1.5 text-[#A8B8A0]">
              <span className="w-2 h-2 rounded-full bg-[#A8B8A0] animate-pulse" />
              {personalInfo.workPreference}
            </span>
          </div>

          {/* Geometric Availability Stamp (Inspired by Patrick David's "19 oct available for work" lockup) */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <svg
              className="w-28 h-14 sm:w-32 sm:h-16 shrink-0"
              viewBox="0 0 150 72"
              fill="none"
              aria-hidden="true"
            >
              {/* 12-point brutalist starburst */}
              <path
                d="M22 10L24.9 18.6L32.4 13.5L29.1 22.1L38 22.8L30.4 27.6L37.4 33.4L28.4 33.2L31 41.9L23.9 36.2L21.3 44.8L19.4 36L11.8 41.1L15.4 32.7L6.5 32.3L14.2 27.4L7.4 21.4L16.4 21.8L14 13L20.9 18.8L22 10Z"
                fill="#D4633B"
              />
              {/* Diagonal architectural bar ("1") */}
              <polygon points="40,26 66,13 66,27 40,40" fill="currentColor" />
              {/* Split Geometric Circle ("9" / "0") */}
              <path
                d="M96 12C80.5 12 68 22.5 68 36C68 49.5 80.5 60 96 60C111.5 60 124 49.5 124 36C124 22.5 111.5 12 96 12ZM96 25C105 25 112 29.5 112 36C112 42.5 105 47 96 47C87 47 80 42.5 80 36C80 29.5 87 25 96 25Z"
                fill="currentColor"
              />
              <rect x="66" y="32" width="60" height="7" fill={isLight ? '#F4F1EA' : '#0D0D0C'} />
            </svg>
            <div className="leading-none">
              <div className="font-editorial-serif italic text-xl sm:text-2xl text-[#D4633B]">
                {personalInfo.availabilityStamp.monthOrYear}
              </div>
              <div className="font-tech-mono text-[11px] uppercase tracking-wider opacity-85">
                {personalInfo.availabilityStamp.statusLine1}
              </div>
              <div className="font-tech-mono text-[11px] uppercase tracking-wider opacity-65">
                {personalInfo.availabilityStamp.statusLine2}
              </div>
            </div>
          </div>
        </div>

        {/* Monumental Condensed Display Headline (Patrick David Editorial Composition) */}
        <div className="relative">
          {/* Italic Serif Lead-in */}
          <div className="font-editorial-serif italic text-3xl sm:text-5xl md:text-6xl text-[#D4633B] mb-1 sm:mb-2 tracking-normal">
            {activeTrack === 'ai'
              ? 'rag & llm systems'
              : activeTrack === 'fullstack'
              ? 'scalable web architecture'
              : personalInfo.taglineItalic}
          </div>

          {/* Stacked Condensed Lines */}
          <h1 className="font-display-condensed text-[15.5vw] sm:text-[13vw] lg:text-[136px] select-none tracking-tight">
            <span className="block">
              {activeTrack === 'fullstack' ? 'FULL STACK' : personalInfo.heroDisplayLines[0]}
            </span>
            <span className="flex items-baseline flex-wrap gap-x-3 sm:gap-x-5">
              <span>
                {activeTrack === 'ai'
                  ? 'RAG & LLM'
                  : activeTrack === 'fullstack'
                  ? 'MERN & NEXT'
                  : personalInfo.heroDisplayLines[1]}
              </span>
              <span className="font-editorial-serif italic font-normal text-[8vw] sm:text-[6.5vw] lg:text-[72px] text-[#A8B8A0] lowercase">
                &amp;
              </span>
            </span>
            <span className="block text-[#D4633B]">
              {activeTrack === 'ai' ? 'ARCHITECT' : personalInfo.heroDisplayLines[2]}
            </span>
          </h1>
        </div>

        {/* Bottom Editorial Grid: Technical Spec Index + Indented Uppercase Bio & CTAs */}
        <div className="mt-10 sm:mt-14 pt-8 border-t border-current/15 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left Column (5 cols): Live Engineering Telemetry Card */}
          <div className="lg:col-span-5">
            <div
              className={`p-5 rounded-sm border ${
                isLight ? 'bg-white/75 border-[#D8D2C7]' : 'bg-[#141412] border-[#282724]'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] font-tech-mono uppercase tracking-widest pb-3 mb-3 border-b border-current/10">
                <span className="flex items-center gap-2 text-[#D4633B]">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>VERIFIED CREDENTIALS</span>
                </span>
                <span>B.TECH CSE // 9.5 CGPA</span>
              </div>

              <p
                className={`text-sm leading-relaxed ${
                  isLight ? 'text-[#57544E]' : 'text-[#A09C92]'
                }`}
              >
                {personalInfo.heroConciseBio}
              </p>

              <div className="mt-4 pt-3 border-t border-current/10 grid grid-cols-3 gap-2 text-center font-tech-mono">
                <div>
                  <div className="text-base sm:text-lg font-bold text-[#D4633B]">9.5/10</div>
                  <div className="text-[10px] uppercase opacity-70">B.Tech CGPA</div>
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold">400+</div>
                  <div className="text-[10px] uppercase opacity-70">Live Users</div>
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold text-[#A8B8A0]">98.0%</div>
                  <div className="text-[10px] uppercase opacity-70">ML Accuracy</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Patrick David Right-Indented Uppercase Editorial Statement & Pill CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <p className="text-sm sm:text-base md:text-lg font-medium tracking-wide uppercase leading-relaxed">
              <span className="inline-block w-16 sm:w-28" aria-hidden="true" />
              {personalInfo.heroEditorialIntro}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-4 pt-2">
              <button
                type="button"
                onClick={onExploreWork}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#D4633B] text-[#F2EFE9] font-tech-mono text-xs sm:text-sm uppercase tracking-widest hover:opacity-95 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4633B]"
              >
                <span>Explore My Work</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className={`inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border font-tech-mono text-xs sm:text-sm uppercase tracking-widest transition-all ${
                  isLight
                    ? 'border-[#141413] text-[#141413] hover:bg-[#141413] hover:text-[#F4F1EA]'
                    : 'border-[#F2EFE9] text-[#F2EFE9] hover:bg-[#F2EFE9] hover:text-[#0D0D0C]'
                }`}
              >
                <Download className="w-4 h-4 text-[#D4633B]" />
                <span>Download Resume</span>
              </button>

              <button
                type="button"
                onClick={onContactClick}
                className="px-4 py-3 font-tech-mono text-xs uppercase tracking-widest underline underline-offset-4 hover:text-[#D4633B] transition-colors"
              >
                Contact Me →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
