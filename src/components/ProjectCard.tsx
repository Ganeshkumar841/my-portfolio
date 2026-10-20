import React, { useState } from 'react';
import { ArrowUpRight, Github, Layers, Eye, Check, Sparkles } from 'lucide-react';
import { ProjectItem } from '../data/portfolio';
import { ArchitecturePreview } from './ArchitecturePreview';

interface ProjectCardProps {
  project: ProjectItem;
  idx: number;
  isLight: boolean;
  onOpenCaseStudy: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  idx,
  isLight,
  onOpenCaseStudy,
}) => {
  const [viewMode, setViewMode] = useState<'blueprint' | 'contributions'>('blueprint');
  const isReversed = idx % 2 === 1;

  return (
    <article
      className={`py-12 sm:py-16 border-b border-current/15 transition-colors`}
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Top Meta Row */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-6 font-tech-mono text-xs uppercase tracking-widest">
        <div className="flex items-center gap-3">
          <span className="text-[#D4633B] font-semibold">/{project.index}</span>
          <span className="opacity-40">—</span>
          <span>{project.categoryLabel}</span>
        </div>
        <div className="flex items-center gap-3 opacity-75">
          <span>Role: {project.role}</span>
          <span>·</span>
          <span>{project.year}</span>
        </div>
      </div>

      {/* Main Editorial Asymmetric Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Narrative Column (5 cols) */}
        <div className={`lg:col-span-5 space-y-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
          <div>
            <h3
              id={`project-title-${project.id}`}
              className="font-display-condensed text-4xl sm:text-5xl tracking-tight leading-none"
            >
              {project.title}
            </h3>
            <p className="font-editorial-serif italic text-xl sm:text-2xl text-[#D4633B] mt-2">
              {project.subtitle}
            </p>
          </div>

          {/* Problem & Solution Breakdown */}
          <div className="space-y-4 text-sm leading-relaxed">
            <div
              className={`p-4 rounded-sm border-l-2 border-[#D4633B] ${
                isLight ? 'bg-[#EAE5DC]/60' : 'bg-[#141412]'
              }`}
            >
              <div className="font-tech-mono text-[10px] uppercase tracking-widest text-[#D4633B] mb-1">
                Problem Statement
              </div>
              <p className={isLight ? 'text-[#57544E]' : 'text-[#A09C92]'}>{project.problem}</p>
            </div>

            <div>
              <div className="font-tech-mono text-[10px] uppercase tracking-widest opacity-60 mb-1">
                Solution &amp; Architecture
              </div>
              <p className={isLight ? 'text-[#141413]' : 'text-[#F2EFE9]'}>{project.solution}</p>
            </div>
          </div>

          {/* Technology Tags */}
          <div>
            <div className="font-tech-mono text-[10px] uppercase tracking-widest opacity-60 mb-2">
              Technology Stack
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className={`px-2.5 py-1 text-xs font-tech-mono rounded-sm border ${
                    isLight
                      ? 'bg-white border-[#D8D2C7] text-[#141413]'
                      : 'bg-[#171715] border-[#282724] text-[#F2EFE9]'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links: Live Demo, GitHub Repository, Deep-Dive Modal */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D4633B] text-[#F2EFE9] font-tech-mono text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                <span>Live Deployment</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border font-tech-mono text-xs uppercase tracking-wider transition-colors ${
                  isLight
                    ? 'border-[#141413] hover:bg-[#141413] hover:text-[#F4F1EA]'
                    : 'border-[#F2EFE9]/60 hover:bg-[#F2EFE9] hover:text-[#0D0D0C]'
                }`}
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
              </a>
            )}

            <button
              type="button"
              onClick={() => onOpenCaseStudy(project)}
              className="inline-flex items-center gap-1.5 px-3 py-2 font-tech-mono text-xs uppercase tracking-wider text-[#A8B8A0] hover:text-[#D4633B] transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Inspect Case Study</span>
            </button>
          </div>
        </div>

        {/* Visual / Interactive Blueprint Column (7 cols) */}
        <div className={`lg:col-span-7 space-y-3 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
          {/* Mode Switcher Bar */}
          <div className="flex items-center justify-between">
            <div className="inline-flex rounded-sm border border-current/15 p-0.5 text-xs font-tech-mono">
              <button
                type="button"
                onClick={() => setViewMode('blueprint')}
                className={`px-3 py-1 rounded-sm transition-colors ${
                  viewMode === 'blueprint'
                    ? 'bg-[#D4633B] text-[#F2EFE9]'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                System Blueprint
              </button>
              <button
                type="button"
                onClick={() => setViewMode('contributions')}
                className={`px-3 py-1 rounded-sm transition-colors ${
                  viewMode === 'contributions'
                    ? 'bg-[#D4633B] text-[#F2EFE9]'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                Engineering Contributions ({project.contribution.length})
              </button>
            </div>

            <button
              type="button"
              onClick={() => onOpenCaseStudy(project)}
              className="text-xs font-tech-mono opacity-70 hover:opacity-100 hover:text-[#D4633B] transition-colors"
            >
              Full Specs ↗
            </button>
          </div>

          {viewMode === 'blueprint' ? (
            <ArchitecturePreview project={project} isLight={isLight} />
          ) : (
            <div
              className={`p-6 sm:p-8 rounded-sm border space-y-4 ${
                isLight ? 'bg-white border-[#D8D2C7]' : 'bg-[#121210] border-[#282724]'
              }`}
            >
              <div className="font-tech-mono text-xs uppercase tracking-widest text-[#D4633B]">
                // Key Engineering Contributions — {project.title}
              </div>
              <ul className="space-y-3.5">
                {project.contribution.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className="font-tech-mono text-xs text-[#A8B8A0] mt-0.5">0{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
