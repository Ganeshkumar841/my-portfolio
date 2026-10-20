import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { PortfolioData } from '../data/portfolio';

interface FooterProps {
  data: PortfolioData;
  isLight: boolean;
  onOpenCustomizationGuide: () => void;
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  data,
  isLight,
  onOpenCustomizationGuide,
  onNavigate,
}) => {
  const { personalInfo } = data;

  return (
    <footer className="py-12 text-xs font-tech-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="text-sm font-sans font-semibold tracking-tight">
            {personalInfo.name} — {personalInfo.rolePrimary} &amp; {personalInfo.roleSecondary}
          </div>
          <div className="opacity-65">
            © {new Date().getFullYear()} {personalInfo.name}. Built with React, TypeScript &amp; Tailwind CSS.
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={onOpenCustomizationGuide}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border transition-colors ${
              isLight
                ? 'bg-[#EAE5DC] border-[#D8D2C7] hover:border-[#141413]'
                : 'bg-[#141412] border-[#282724] hover:border-[#D4633B]'
            }`}
          >
            <Code2 className="w-3.5 h-3.5 text-[#D4633B]" />
            <span>How to Edit portfolio.ts</span>
          </button>

          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D4633B] transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D4633B] transition-colors"
          >
            LinkedIn
          </a>
          <button
            type="button"
            onClick={() => onNavigate('top')}
            aria-label="Back to top"
            className="inline-flex items-center gap-1 text-[#D4633B] hover:underline"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
