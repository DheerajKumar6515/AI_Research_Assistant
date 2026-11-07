import React from 'react';
import { ResearchResult } from '@/types/research';
import { CheckCircle2, Share2, BookmarkPlus, Sparkles } from 'lucide-react';

interface ResearchReportProps {
  result: ResearchResult;
}

export const ResearchReport: React.FC<ResearchReportProps> = ({ result }) => {
  return (
    <div className="bg-[#121829] border border-gray-800 rounded-2xl p-6 shadow-xl space-y-6">
      {/* Header with Title and Quick Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Verified Report
            </span>
            <span className="text-xs text-gray-400">• {result.createdAt}</span>
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            {result.query}
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button 
            title="Save result"
            className="p-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-gray-700 transition-colors"
          >
            <BookmarkPlus className="w-4 h-4" />
          </button>
          <button 
            title="Share report"
            className="p-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-gray-700 transition-colors"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Summary paragraph */}
      <div className="space-y-2">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Executive Summary
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed bg-[#0b0f19]/60 p-4 rounded-xl border border-gray-800/60">
          {result.summary}
        </p>
      </div>

      {/* Key Highlights bullet points */}
      <div className="space-y-3">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Key Highlights
        </h3>
        <ul className="space-y-2.5">
          {result.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
              <span className="leading-normal">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};