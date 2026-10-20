import React, { useState } from 'react';
import { portfolioData, FocusTrack, ProjectItem } from './data/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { X, Download, ExternalLink, Github, CheckCircle2, Code2 } from 'lucide-react';

export default function App() {
  const [activeTrack, setActiveTrack] = useState<FocusTrack>('all');
  const [isLight, setIsLight] = useState<boolean>(false);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [selectedResumeId, setSelectedResumeId] = useState<'ai' | 'fullstack'>('ai');
  const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectItem | null>(null);
  const [customGuideOpen, setCustomGuideOpen] = useState<boolean>(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const selectedResume =
    portfolioData.resumeVariants.find((r) => r.id === selectedResumeId) ||
    portfolioData.resumeVariants[0];

  return (
    <div
      data-theme={isLight ? 'light' : 'dark'}
      className={`min-h-screen transition-colors duration-300 bg-editorial-grid ${
        isLight ? 'bg-[#F4F1EA] text-[#141413]' : 'bg-[#0D0D0C] text-[#F2EFE9]'
      }`}
    >
      <Navbar
        data={portfolioData}
        activeTrack={activeTrack}
        onSelectTrack={setActiveTrack}
        isLight={isLight}
        onToggleTheme={() => setIsLight(!isLight)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
        onNavigate={scrollToSection}
      />

      <main>
        <Hero
          data={portfolioData}
          activeTrack={activeTrack}
          isLight={isLight}
          onExploreWork={() => scrollToSection('work')}
          onOpenResumeModal={() => setResumeModalOpen(true)}
          onContactClick={() => scrollToSection('contact')}
        />

        <Projects
          data={portfolioData}
          activeTrack={activeTrack}
          onSelectTrack={setActiveTrack}
          isLight={isLight}
          onOpenCaseStudy={(project) => setActiveCaseStudy(project)}
        />

        <About data={portfolioData} isLight={isLight} />

        <Skills data={portfolioData} activeTrack={activeTrack} isLight={isLight} />

        <Experience data={portfolioData} isLight={isLight} />

        <Contact
          data={portfolioData}
          isLight={isLight}
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />
      </main>

      <Footer
        data={portfolioData}
        isLight={isLight}
        onOpenCustomizationGuide={() => setCustomGuideOpen(true)}
        onNavigate={scrollToSection}
      />

      {/* Resume Switcher & Download Modal */}
      {resumeModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
        >
          <div
            className={`w-full max-w-2xl rounded-sm border p-6 sm:p-8 space-y-6 ${
              isLight ? 'bg-[#F4F1EA] border-[#D8D2C7] text-[#141413]' : 'bg-[#141412] border-[#282724] text-[#F2EFE9]'
            }`}
          >
            <div className="flex items-start justify-between gap-4 border-b border-current/15 pb-4">
              <div>
                <div className="font-tech-mono text-xs text-[#D4633B] uppercase tracking-widest">
                  // VERIFIED RESUME EDITIONS
                </div>
                <h3 id="resume-modal-title" className="font-display-condensed text-3xl sm:text-4xl mt-1">
                  SELECT RESUME TRACK
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setResumeModalOpen(false)}
                aria-label="Close resume modal"
                className="p-2 rounded-sm border border-current/20 hover:border-[#D4633B]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {portfolioData.resumeVariants.map((variant) => (
                <button
                  key={variant.id}
                  type="button"
                  onClick={() => setSelectedResumeId(variant.id)}
                  className={`p-4 rounded-sm border text-left transition-all ${
                    selectedResumeId === variant.id
                      ? 'border-[#D4633B] bg-[#D4633B]/10'
                      : 'border-current/15 opacity-75 hover:opacity-100'
                  }`}
                >
                  <div className="font-tech-mono text-[10px] uppercase tracking-widest text-[#D4633B]">
                    {variant.badge}
                  </div>
                  <div className="font-bold text-base mt-1">{variant.label}</div>
                </button>
              ))}
            </div>

            <div className="p-4 rounded-sm border border-current/15 space-y-3">
              <p className="text-sm leading-relaxed opacity-85">{selectedResume.summary}</p>
              <div className="flex flex-wrap gap-1.5">
                {selectedResume.coreFocus.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-0.5 text-xs font-tech-mono rounded-sm border border-current/15"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
              <a
                href={selectedResume.path}
                download={selectedResume.filename}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4633B] text-[#F2EFE9] font-tech-mono text-xs uppercase tracking-widest hover:opacity-95"
              >
                <Download className="w-4 h-4" />
                <span>Download {selectedResume.label} (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Case Study Modal */}
      {activeCaseStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`w-full max-w-2xl rounded-sm border p-6 sm:p-8 space-y-5 max-h-[90vh] overflow-y-auto ${
              isLight ? 'bg-[#F4F1EA] border-[#D8D2C7] text-[#141413]' : 'bg-[#141412] border-[#282724] text-[#F2EFE9]'
            }`}
          >
            <div className="flex items-start justify-between gap-4 border-b border-current/15 pb-4">
              <div>
                <div className="font-tech-mono text-xs text-[#D4633B]">
                  /{activeCaseStudy.index} — {activeCaseStudy.categoryLabel}
                </div>
                <h3 className="font-display-condensed text-3xl sm:text-4xl mt-1">
                  {activeCaseStudy.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveCaseStudy(null)}
                aria-label="Close project case study"
                className="p-2 rounded-sm border border-current/20"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-sm leading-relaxed">
              <div>
                <div className="font-tech-mono text-xs uppercase text-[#D4633B] mb-1">Problem</div>
                <p>{activeCaseStudy.problem}</p>
              </div>
              <div>
                <div className="font-tech-mono text-xs uppercase text-[#A8B8A0] mb-1">
                  Architecture &amp; Solution
                </div>
                <p>{activeCaseStudy.solution}</p>
              </div>
              <div>
                <div className="font-tech-mono text-xs uppercase opacity-70 mb-2">
                  Engineering Contributions
                </div>
                <ul className="space-y-2">
                  {activeCaseStudy.contribution.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4633B] shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Customization Guide Modal */}
      {customGuideOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`w-full max-w-2xl rounded-sm border p-6 sm:p-8 space-y-4 max-h-[90vh] overflow-y-auto ${
              isLight ? 'bg-[#F4F1EA] border-[#D8D2C7] text-[#141413]' : 'bg-[#141412] border-[#282724] text-[#F2EFE9]'
            }`}
          >
            <div className="flex items-center justify-between border-b border-current/15 pb-3">
              <div className="flex items-center gap-2 font-tech-mono text-xs uppercase text-[#D4633B]">
                <Code2 className="w-4 h-4" />
                <span>Single-File Customization Architecture</span>
              </div>
              <button
                type="button"
                onClick={() => setCustomGuideOpen(false)}
                aria-label="Close customization guide"
                className="p-1.5 rounded-sm border border-current/20"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm leading-relaxed">
              Every piece of personal data—your bio, projects, links, skills, experience, and resume PDFs—lives in{' '}
              <code className="font-tech-mono text-[#D4633B]">src/data/portfolio.ts</code>. You never need to edit component JSX to update your portfolio.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
