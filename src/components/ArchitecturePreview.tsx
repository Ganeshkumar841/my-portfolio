import React, { useState } from 'react';
import { Cpu, Database, FileText, Activity, CheckCircle2, Layers } from 'lucide-react';
import { ProjectItem } from '../data/portfolio';

interface ArchitecturePreviewProps {
  project: ProjectItem;
  isLight: boolean;
}

export const ArchitecturePreview: React.FC<ArchitecturePreviewProps> = ({ project, isLight }) => {
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(0);

  return (
    <div
      className={`relative overflow-hidden rounded-sm border transition-colors ${
        isLight
          ? 'bg-[#EAE5DC]/70 border-[#D8D2C7] text-[#141413]'
          : 'bg-[#121210] border-[#282724] text-[#F2EFE9]'
      }`}
    >
      {/* Top Technical Window Bar */}
      <div
        className={`flex items-center justify-between px-4 py-2.5 border-b text-[11px] font-tech-mono tracking-wider uppercase ${
          isLight ? 'border-[#D8D2C7] bg-[#E2DDD2]/60 text-[#57544E]' : 'border-[#282724] bg-[#161614] text-[#A09C92]'
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#D4633B]" />
          <span className="inline-block w-2 h-2 rounded-full bg-[#A8B8A0]" />
          <span className="ml-1 truncate">{project.blueprintTitle}</span>
        </div>
        <span className="hidden sm:inline opacity-75">SYS.{project.index} // INTERACTIVE BLUEPRINT</span>
      </div>

      {/* Main Schematic Body */}
      <div className="p-5 sm:p-6 space-y-5">
        {/* Metrics Ribbon */}
        <div className="grid grid-cols-3 gap-2.5">
          {project.metrics.map((metric, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-sm border ${
                isLight ? 'bg-white/80 border-[#D8D2C7]' : 'bg-[#171715] border-[#282724]'
              }`}
            >
              <div className="font-display-condensed text-xl sm:text-2xl tracking-wide text-[#D4633B]">
                {metric.value}
              </div>
              <div
                className={`text-[11px] font-tech-mono mt-1 leading-tight ${
                  isLight ? 'text-[#57544E]' : 'text-[#A09C92]'
                }`}
              >
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive 3-Stage Architecture Pipeline */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-tech-mono uppercase tracking-widest opacity-70">
              Click a pipeline stage to inspect data flow:
            </span>
            <span className="text-[11px] font-tech-mono text-[#A8B8A0]">
              Stage 0{activeNodeIndex + 1} / 0{project.blueprintNodes.length}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {project.blueprintNodes.map((node, idx) => {
              const isSelected = activeNodeIndex === idx;
              return (
                <button
                  key={node.stage}
                  type="button"
                  onClick={() => setActiveNodeIndex(idx)}
                  className={`text-left p-3.5 rounded-sm border transition-all focus:outline-none focus:ring-2 focus:ring-[#D4633B] ${
                    isSelected
                      ? isLight
                        ? 'bg-[#141413] text-[#F2EFE9] border-[#141413]'
                        : 'bg-[#F2EFE9] text-[#0D0D0C] border-[#F2EFE9]'
                      : isLight
                      ? 'bg-white/60 border-[#D8D2C7] hover:border-[#141413]/50'
                      : 'bg-[#171715] border-[#282724] hover:border-[#F2EFE9]/40'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-tech-mono tracking-widest uppercase opacity-75">
                    <span>{node.stage}</span>
                    {idx === 0 && <Layers className="w-3.5 h-3.5" />}
                    {idx === 1 && <Database className="w-3.5 h-3.5" />}
                    {idx === 2 && <Cpu className="w-3.5 h-3.5" />}
                  </div>
                  <div className="font-semibold text-sm mt-1.5 leading-snug">{node.title}</div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Inspector Readout */}
          <div
            className={`mt-3 p-3.5 rounded-sm border font-tech-mono text-xs leading-relaxed flex items-start gap-3 ${
              isLight
                ? 'bg-[#E2DDD2]/50 border-[#D8D2C7] text-[#141413]'
                : 'bg-[#0D0D0C] border-[#282724] text-[#F2EFE9]'
            }`}
          >
            <Activity className="w-4 h-4 text-[#D4633B] shrink-0 mt-0.5" />
            <div>
              <span className="text-[#D4633B] font-semibold mr-2">
                [{project.blueprintNodes[activeNodeIndex]?.stage}]
              </span>
              <span>{project.blueprintNodes[activeNodeIndex]?.detail}</span>
            </div>
          </div>
        </div>

        {/* Bottom Architectural Note */}
        <div
          className={`pt-3 border-t flex items-center justify-between text-[11px] font-tech-mono ${
            isLight ? 'border-[#D8D2C7] text-[#57544E]' : 'border-[#282724] text-[#A09C92]'
          }`}
        >
          <span className="truncate">{project.architectureNotes}</span>
          <CheckCircle2 className="w-3.5 h-3.5 text-[#A8B8A0] shrink-0 ml-2" />
        </div>
      </div>
    </div>
  );
};
