"use client";
import Split from "react-split";
import React, { useState, useEffect } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { SearchInput } from "@/components/research/SearchInput";
import { SuggestedPrompts } from "@/components/research/SuggestedPrompts";
import { ResearchReport } from "@/components/research/ResearchReport";
import { SourcesPanel } from "@/components/research/SourcesPanel";
import {
  mockSuggestedPrompts,
  mockExampleQuestions,
  mockRecentSearches,
  generateMockResearch,
} from "@/lib/mock-data";
import { ResearchResult } from "@/types/research";
import SuggestedCard from "@/components/research/SuggestedCard";

export default function research() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [recentSearches, setRecentSearches] =
    useState<string[]>(mockRecentSearches);
  const [currentResearch, setCurrentResearch] = useState<ResearchResult | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  // Toggle theme state and update root HTML element classes
  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      //  document.documentElement.classList.remove('light');
    } else {
      // document.documentElement.classList.add('light');
      document.documentElement.classList.remove("dark");
    }
  };

  // Handle user executing a search query
  const handleSearch = (query: string) => {
    setIsLoading(true);
    // Simulate API latency
    setTimeout(() => {
      const result = generateMockResearch(query);
      setCurrentResearch(result);

      // Prepend to recent searches if not already present
      setRecentSearches((prev) => {
        if (prev.includes(query)) return prev;
        return [query, ...prev.slice(0, 5)];
      });

      setIsLoading(false);
    }, 600);
  };

  // Reset view for "New Chat"
  const handleNewChat = () => {
    setCurrentResearch(null);
  };


  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-gray-100 transition-colors duration-200">
      <Sidebar
        recentSearches={recentSearches}
        onSelectSearch={handleSearch}
        onNewChat={handleNewChat}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="flex-1 flex flex-col h-screen">
        <Header
          userName="Dheeraj Kumar"
          theme={theme}
          onToggleTheme={toggleTheme}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <Split className="split"
         minSize={300}
          direction="horizontal"
        sizes={[90, 10]}
          gutterSize={5} 
          gutterAlign="end">
          <main className="flex-1 max-w-4xl w-full mx-auto p-6 md:p-8 space-y-8">
              <div className="space-y-6 pt-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                    Good morning, Dheeraj <span className="text-2xl">👋</span>
                  </h2>
                  <p className="text-[13px] font-sans font-medium text-slate-600 dark:text-gray-400 mt-1">
                    Ask anything, and I&apos;ll search the web to give you the
                    most accurate and up-to-date information.
                  </p>
                </div>

                <SuggestedCard
                  prompts={mockSuggestedPrompts}
                  onSelectQuery={handleSearch}
                />

                <SearchInput onSearch={handleSearch} isLoading={isLoading} />

                <SuggestedPrompts
                  exampleQuestions={mockExampleQuestions}
                  onSelectQuery={handleSearch}
                />
              </div>

            {/* {isLoading && (
              <div className="flex flex-col items-center justify-center py-24 space-y-4">
                <div className="w-12 h-12 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin" />
                <p className="text-sm font-medium text-slate-600 dark:text-gray-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-500 dark:text-indigo-400 animate-pulse" />
                  Searching web and synthesizing research report...
                </p>
              </div>
            )} */}
{/* 
            {currentResearch && !isLoading && (
              <div className="space-y-6 pt-2">
                <div className="flex items-center justify-between">
                  <button
                    onClick={handleNewChat}
                    className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                  >
                    ← Back to New Search
                  </button>
                </div>

                <SearchInput onSearch={handleSearch} isLoading={isLoading} />
                <ResearchReport result={currentResearch} />
              </div>
            )} */}
          </main>

          <SourcesPanel
            sources={
              currentResearch
                ? currentResearch.sources
                : [
                    {
                      id: 1,
                      title: "Google DeepMind - AI Agent Report 2026",
                      url: "https://deepmind.google/research/ai-agents-2026",
                    },
                    {
                      id: 2,
                      title: "TechCrunch - The Future of AI Agents",
                      url: "https://techcrunch.com/ai-agents-2026",
                    },
                    {
                      id: 3,
                      title: "Stanford HAI - AI Index 2026",
                      url: "https://hai.stanford.edu/ai-index-2026",
                    },
                  ]
            }
          />
        </Split>
      </div>
    </div>
  );
}
