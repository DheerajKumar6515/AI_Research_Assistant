import React, { useState } from 'react';
import { Source } from '@/types/research';
import { ExternalLink, BookOpen, Layers } from 'lucide-react';

interface SourcesPanelProps {
  sources: Source[];
}

export const SourcesPanel: React.FC<SourcesPanelProps> = ({ sources }) => {
  const [activeTab, setActiveTab] = useState<'Summary' | 'Sources'>('Summary');

  return (
    <aside className="w-80 dark:bg-[#0d1322] border-l border-gray-300 flex flex-col h-screen select-none shrink-0 p-2">
      {/* Panel Top Header */}
      <div className="px-2 py-1 border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="w-3.5 h-3.5 dark:text-indigo-400" />
          <h3 className="font-bold font-sans text-sm dark:text-white">Search Results</h3>
        </div>
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 cursor-pointer bg-gray-200/60 dark:bg-gray-800 px-2.5 py-1 rounded-xl">
          {sources.length} sources
        </span>
      </div>

      {/* Tab Switcher */}
      <div className="flex mt-1 bg-gray-100 rounded-2xl dark:border-gray-800 p-1 gap-2 dark:bg-[#121829]/50">
        <button
          onClick={() => setActiveTab('Summary')}
          className={`flex-1 py-1.5 text-xs cursor-pointer font-medium rounded-xl transition-all ${
            activeTab === 'Summary'
              ? 'dark:bg-indigo-600 bg-white/70 text-indigo-700 dark:text-white shadow-sm'
              : 'dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800/60 hover:bg-white'
          }`}
        >
          Summary
        </button>
        <button
          onClick={() => setActiveTab('Sources')}
          className={`flex-1 py-1.5 cursor-pointer text-xs font-medium rounded-lg transition-all ${
            activeTab === 'Sources'
              ? 'dark:bg-indigo-600 bg-white rounded-xl text-indigo-500 shadow-sm dark:text-white'
              : 'text-gray-500 dark:hover:text-gray-200 hover:text-indigo-700 rounded-xl hover:bg-white dark:hover:bg-gray-800/60'
          }`}
        >
          Sources
        </button>
      </div>

      <div className='p-2 mt-2 border overflow-y-scroll scrollbar-none rounded-lg border-gray-400/30 shadow'>
      {/*Search result answer */}
        <div className='overflow-y-scroll scroll-smooth max-h-104 h-auto'>
        {/*search result */}
        <div>
           <h1 className='text-sm font-sans font-medium py-1 truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, incidunt!</h1>
        <p className='text-xs text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum reiciendis nobis quo perspiciatis laborum natus reprehenderit voluptatum, magni minima aut architecto ipsum magnam deleniti iusto sed labore! Sed, eligendi necessitatibus.</p>

        <h1 className='text-sm font-sans font-medium py-1'>key highlights:</h1>
        <ul>
          <li className='text-xs text-gray-500'>Lorem ipsum dolor sit amet.</li>
          <li className='text-xs text-gray-500'>Lorem ipsum dolor sit amet.</li>
          <li className='text-xs text-gray-500'>Lorem ipsum dolor sit amet.</li>
          <li className='text-xs text-gray-500'>Lorem ipsum dolor sit amet.</li>
          <li className='text-xs text-gray-500'>Lorem ipsum dolor sit amet.</li>
        </ul>

         <h1 className='text-sm font-sans font-medium py-1 truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, incidunt!</h1>
        <p className='text-xs text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum reiciendis nobis quo perspiciatis laborum natus reprehenderit voluptatum, magni minima aut architecto ipsum magnam deleniti iusto sed labore! Sed, eligendi necessitatibus.</p>

        <h1 className='text-sm font-sans font-medium py-1'>key highlights:</h1>
        <ul>
          <li className='text-xs text-gray-500'>Lorem ipsum dolor sit amet.</li>
          <li className='text-xs text-gray-500'>Lorem ipsum dolor sit amet.</li>
          <li className='text-xs text-gray-500'>Lorem ipsum dolor sit amet.</li>
          <li className='text-xs text-gray-500'>Lorem ipsum dolor sit amet.</li>
          <li className='text-xs text-gray-500'>Lorem ipsum dolor sit amet.</li>
        </ul>
        </div>
     
        </div>

          {/* Panel Content Body */}
      <div className="flex-1 overflow-y-auto mt-3 p-0 space-y-4">
        {activeTab === 'Summary' ? (
          <div className="space-y-1">
            <h4 className="text-xs font-semibold dark:text-gray-400 uppercase tracking-wider">
              Referenced Citations
            </h4>
            <div className="space-y-1">
              {sources.map((source) => (
                <a
                  key={source.id}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-1 rounded-xl dark:bg-[#121829] border-gray-800/80 dark:hover:border-indigo-500/50 dark:hover:bg-[#161f33] transition-all group"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-md bg-indigo-100 dark:bg-gray-800 dark:text-indigo-400 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5 dark:group-hover:bg-indigo-600 dark:group-hover:text-white transition-colors">
                      {source.id}
                    </span>
                    <div className="overflow-hidden">
                      <p className="text-xs font-medium text-gray-800/80
                      dark:text-white/80 dark:group-hover:text-indigo-300 transition-colors truncate">
                        {source.title}
                      </p>
                      <p className="text-[10px] text-blue-500 dark:text-gray-500 truncate mt-0.5">
                        {source.url}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <h4 className="text-xs font-semibold dark:text-gray-400 uppercase tracking-wider">
              All Indexed Sources ({sources.length})
            </h4>
            {sources.map((source) => (
              <div 
                key={source.id}
                className="p-2 rounded-xl dark:bg-[#121829] border border-gray-200 shadow space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold dark:text-indigo-400 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    Source [{source.id}]
                  </span>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dark:text-gray-400 dark:hover:text-white transition-colors hover:text-black/60"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <p className="text-xs font-medium dark:text-gray-200">{source.title}</p>
                <p className="text-[10px] text-blue-500 dark:text-gray-400 truncate dark:bg-gray-900  rounded">
                  {source.url}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      </div>

    
    </aside>
  );
};