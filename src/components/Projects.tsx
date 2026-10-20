import React from 'react';
import { FocusTrack, PortfolioData, ProjectItem } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';

interface ProjectsProps {
  data: PortfolioData;
  activeTrack: FocusTrack;
  onSelectTrack: (track: FocusTrack) => void;
  isLight: boolean;
  onOpenCaseStudy: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  data,
  activeTrack,
  onSelectTrack,
  isLight,
  onOpenCaseStudy,
}) => {
  const filteredProjects = data.projects.filter((project) => {
    if (activeTrack === 'all') return true;
    if (project.category === 'both') return true;
    return project.category === activeTrack;
  });

  return (
    <section id="work" className="py-20 sm:py-28 border-b border-current/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-current/15">
          <div>
            <div className="font-tech-mono text-xs uppercase tracking-widest text-[#D4633B] mb-2">
              01 // SELECTED ENGINEERING WORKS
            </div>
            <h2 className="font-display-condensed text-5xl sm:text-7xl tracking-tight">
              SELECTED <span className="font-editorial-serif italic font-normal text-[#A8B8A0] lowercase">projects</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects by domain">
            {(
              [
                { id: 'all', label: `All Works (${data.projects.length})` },
                {
                  id: 'ai',
                  label: `AI / RAG & ML (${
                    data.projects.filter((p) => p.category === 'ai' || p.category === 'both').length
                  })`,
                },
                {
                  id: 'fullstack',
                  label: `Full-Stack Systems (${
                    data.projects.filter((p) => p.category === 'fullstack' || p.category === 'both').length
                  })`,
                },
              ] as { id: FocusTrack; label: string }[]
            ).map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => onSelectTrack(filter.id)}
                className={`px-4 py-2 rounded-full text-xs font-tech-mono uppercase tracking-wider border transition-all ${
                  activeTrack === filter.id
                    ? 'bg-[#D4633B] text-[#F2EFE9] border-[#D4633B]'
                    : isLight
                    ? 'border-[#D8D2C7] hover:border-[#141413]'
                    : 'border-[#282724] hover:border-[#F2EFE9]/50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Entries */}
        <div className="divide-y divide-current/15">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              idx={idx}
              isLight={isLight}
              onOpenCaseStudy={onOpenCaseStudy}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
