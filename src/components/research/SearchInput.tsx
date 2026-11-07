import React, { useState } from 'react';
import { Search, Globe, Paperclip, Mic, ArrowRight, Sparkles } from 'lucide-react';

interface SearchInputProps {
  onSearch: (query: string) => void;
  isLoading?: boolean;
}

export const SearchInput: React.FC<SearchInputProps> = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('');
  const [searchScope, setSearchScope] = useState('Search the web');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;
    onSearch(query.trim());
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="dark:bg-[#121829] border border-gray-200 dark:border-gray-800/90 rounded-2xl p-4 shadow-lg hover:border-gray-700/80 transition-all focus-within:border-indigo-500/60 focus-within:ring-2 focus-within:ring-indigo-500/20"
    >
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
          }
        }}
        placeholder="Ask a question..."
        rows={2}
        className="w-full bg-transparent dark:text-gray-100 placeholder-gray-500 text-sm focus:outline-none resize-none"
      />

      <div className="flex items-center justify-between pt-3 mt-2">
        {/* Scope Dropdown Selector */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex items-center gap-1.5 text-xs text-black/70 dark:text-indigo-400 dark:bg-indigo-500/10 border border-indigo-500/5 cursor-pointer px-3 py-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-indigo-500/20 transition-colors font-medium"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{searchScope}</span>
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 text-gray-400">
          <button 
            type="button" 
            title="Attach file"
            className="p-2 dark:hover:text-gray-200 text-gray-500 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800/60 rounded-lg transition-colors"
          >
            <Paperclip className="w-4 h-4" />
          </button>
          <button 
            type="button" 
            title="Voice input"
            className="p-2 dark:hover:text-gray-200 dark:hover:bg-gray-800/60 cursor-pointer hover:bg-gray-200 text-gray-500 rounded-lg transition-colors"
          >
            <Mic className="w-4 h-4" />
          </button>
          <button
            type="submit"
            disabled={!query.trim() || isLoading}
            className={`p-2 rounded-xl text-white transition-all shadow-md cursor-pointer ${
              query.trim() && !isLoading
              ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600/30 scale-100 active:scale-95'
            }`}
          >
            {isLoading ?
               <div className="flex flex-col items-center justify-center">
                <div className={`w-4 h-4 rounded-full border-4 ${isLoading ? 'border-white border-t-indigo-500' : 'border-indigo-500/20 border-t-indigo-500'}  animate-spin`} />
              </div>
            :<ArrowRight className="w-4 h-4" />}
            
          </button>
        </div>
      </div>
    </form>
  );
};