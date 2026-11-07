"use client"
import React,{useState} from 'react';
import { 
  Plus, 
  Home, 
  MessageSquare, 
  Bookmark, 
  Settings, 
  Clock, 
  Globe 
} from 'lucide-react';

interface SidebarProps {
  recentSearches: string[];
  onSelectSearch: (query: string) => void;
  onNewChat: () => void;
  isSidebarOpen:boolean
}

export const Sidebar: React.FC<SidebarProps> = ({
  recentSearches,
  onSelectSearch,
  onNewChat,
  isSidebarOpen
}) => {
  return (
    <aside className={` ${isSidebarOpen ? "w-64" : "hidden"} bg-[#0d1322] border-r border-gray-800 flex flex-col h-screen select-none shrink-0 light:bg-red-500 transition-all duration-300`}>
      {/* App Brand Header */}
      <div className="p-4 border-b border-gray-800/60 flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-linear-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <Globe className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="font-bold text-sm tracking-wide text-white">AI Research Assistant</h1>
          <p className="text-[11px] text-gray-400">Search • Research • Get Answers</p>
        </div>
      </div>

      {/* New Chat Button */}
      <div className="p-4 ">
        <button
          onClick={onNewChat}
          className="w-full flex items-center gap-2.5 bg-linear-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-medium px-4 py-2.5 rounded-xl text-sm shadow-md shadow-indigo-600/30 transition-all active:scale-[0.98] cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>New Chat</span>
        </button>
      </div>

      {/* Navigation Links */}
      <div className="px-3 py-2 space-y-1 text-sm font-medium text-gray-400">
        <button 
          onClick={onNewChat}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800/60 hover:text-gray-200 transition-colors text-indigo-400 bg-indigo-500/10 cursor-pointer"
        >
          <Home className="w-4 h-4 text-indigo-400" />
          <span>Home</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800/60 hover:text-gray-200 transition-colors cursor-pointer">
          <MessageSquare className="w-4 h-4" />
          <span>Chat History</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800/60 hover:text-gray-200 transition-colors cursor-pointer">
          <Bookmark className="w-4 h-4" />
          <span>Saved Results</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800/60 hover:text-gray-200 transition-colors cursor-pointer">
          <Settings className="w-4 h-4" />
          <span>Settings</span>
        </button>
      </div>

      {/* Recent Searches List */}
      <div className="flex-1 overflow-y-auto px-4 py-3 mt-2 border-t border-gray-800/60">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5 px-1">
          Recent Searches
        </h3>
        <div className="space-y-1">
          {recentSearches.map((search, idx) => (
            <button
              key={idx}
              onClick={() => onSelectSearch(search)}
              className="w-full text-left flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors truncate group cursor-pointer"
            >
              <Clock className="w-3.5 h-3.5 text-gray-200 group-hover:text-indigo-400 shrink-0" />
              <span className="truncate">{search}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Powered by Footer Badge */}
      <div className="p-4 m-3 rounded-xl bg-gray-900/80 border border-gray-700 flex items-center gap-3 ">
        <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 shadow">
          <span className="text-xs font-bold text-blue-600">G</span>
        </div>
        <div className="overflow-hidden">
          <p className="text-xs font-semibold text-gray-200 truncate">Powered by Google Search</p>
          <p className="text-[10px] text-gray-400">Get real-time web information from the web withtrusted sources.</p>
        </div>
      </div>
    </aside>
  );
};