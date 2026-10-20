import React, { useState } from 'react';
import { Menu, X, FileText, Sun, Moon, Sparkles } from 'lucide-react';
import { FocusTrack, PortfolioData } from '../data/portfolio';

interface NavbarProps {
  data: PortfolioData;
  activeTrack: FocusTrack;
  onSelectTrack: (track: FocusTrack) => void;
  isLight: boolean;
  onToggleTheme: () => void;
  onOpenResumeModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  data,
  activeTrack,
  onSelectTrack,
  isLight,
  onToggleTheme,
  onOpenResumeModal,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'works', id: 'work' },
    { label: 'about', id: 'about' },
    { label: 'skills', id: 'skills' },
    { label: 'experience', id: 'experience' },
    { label: 'contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors ${
        isLight
          ? 'bg-[#F4F1EA]/90 border-[#D8D2C7] text-[#141413]'
          : 'bg-[#0D0D0C]/90 border-[#282724] text-[#F2EFE9]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Personal Wordmark (Patrick David style serif/editorial name) */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('top');
          }}
          className="group flex items-center gap-2.5 focus:outline-none"
        >
          <span className="font-editorial-serif text-2xl sm:text-[26px] tracking-tight font-normal">
            {data.personalInfo.name}
          </span>
          <span className="hidden xl:inline-block text-[10px] font-tech-mono uppercase tracking-widest px-2 py-0.5 rounded-full border border-[#D4633B]/50 text-[#D4633B]">
            9.5 CGPA
          </span>
        </a>

        {/* Center: Interactive Role Lens Switcher (All / AI Engineer / Full Stack) */}
        <div
          className={`hidden lg:flex items-center p-0.5 rounded-full border text-xs font-tech-mono ${
            isLight ? 'bg-[#EAE5DC] border-[#D8D2C7]' : 'bg-[#161614] border-[#282724]'
          }`}
          role="group"
          aria-label="Filter portfolio lens by engineering specialization"
        >
          {(
            [
              { id: 'all', label: 'All Work' },
              { id: 'ai', label: 'AI / LLM Lens' },
              { id: 'fullstack', label: 'Full-Stack Lens' },
            ] as { id: FocusTrack; label: string }[]
          ).map((tab) => {
            const active = activeTrack === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onSelectTrack(tab.id)}
                className={`px-3 py-1 rounded-full transition-all ${
                  active
                    ? 'bg-[#D4633B] text-[#F2EFE9] font-medium'
                    : isLight
                    ? 'text-[#57544E] hover:text-[#141413]'
                    : 'text-[#A09C92] hover:text-[#F2EFE9]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Right: Minimal comma-separated links (Patrick David reference) + Resume & Theme */}
        <nav className="hidden md:flex items-center gap-5" aria-label="Primary Navigation">
          <div className="flex items-center text-sm tracking-tight">
            {navItems.map((item, index) => (
              <React.Fragment key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className="hover:text-[#D4633B] transition-colors py-1 focus:outline-none focus:underline"
                >
                  {item.label}
                </a>
                {index < navItems.length - 1 && (
                  <span className="mr-2.5 opacity-40 select-none">,</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="h-4 w-[1px] bg-current opacity-20" />

          <button
            type="button"
            onClick={onOpenResumeModal}
            className={`inline-flex items-center gap-1.5 text-xs font-tech-mono uppercase tracking-wider px-3.5 py-1.5 rounded-full border transition-all ${
              isLight
                ? 'border-[#141413] hover:bg-[#141413] hover:text-[#F4F1EA]'
                : 'border-[#F2EFE9]/70 hover:bg-[#F2EFE9] hover:text-[#0D0D0C]'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-[#D4633B]" />
            <span>Resume</span>
          </button>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isLight ? 'Switch to dark editorial theme' : 'Switch to warm paper light theme'}
            title={isLight ? 'Obsidian Dark Mode' : 'Warm Paper Light Mode'}
            className={`p-2 rounded-full border transition-colors ${
              isLight
                ? 'border-[#D8D2C7] hover:bg-[#EAE5DC]'
                : 'border-[#282724] hover:bg-[#181815]'
            }`}
          >
            {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-[#A8B8A0]" />}
          </button>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onOpenResumeModal}
            className="text-xs font-tech-mono uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#D4633B] text-[#D4633B]"
          >
            CV
          </button>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
            className="p-2 rounded-full border border-current/20"
          >
            {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-[#A8B8A0]" />}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="p-2 rounded-sm border border-current/20"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-4 pt-3 pb-6 space-y-4 ${
            isLight ? 'bg-[#F4F1EA] border-[#D8D2C7]' : 'bg-[#0D0D0C] border-[#282724]'
          }`}
        >
          <div className="flex flex-wrap gap-1.5 pt-1">
            {(
              [
                { id: 'all', label: 'All Lens' },
                { id: 'ai', label: 'AI / LLM Lens' },
                { id: 'fullstack', label: 'Full-Stack Lens' },
              ] as { id: FocusTrack; label: string }[]
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => onSelectTrack(tab.id)}
                className={`px-3 py-1 rounded-full text-xs font-tech-mono border ${
                  activeTrack === tab.id
                    ? 'bg-[#D4633B] text-[#F2EFE9] border-[#D4633B]'
                    : 'border-current/20 opacity-75'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            {navItems.map((item, idx) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className="flex items-baseline gap-2 py-2 text-lg font-editorial-serif italic border-b border-current/10"
              >
                <span className="text-xs font-tech-mono not-italic text-[#D4633B]">0{idx + 1}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
