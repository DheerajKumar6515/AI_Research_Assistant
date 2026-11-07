import React from 'react';
import { Sun, ChevronDown, Moon, Menu } from 'lucide-react';

interface HeaderProps {
  userName?: string;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  setIsSidebarOpen:React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<HeaderProps> = ({
   userName = 'Dheeraj Kumar',
   theme,
   setIsSidebarOpen,
   onToggleTheme, }) => {
  // Extract initials for the avatar badge
  const initials = userName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 1);

  return (
   <header className="h-16 border-b border-slate-200 dark:border-gray-800/80 bg-white/80 dark:bg-[#0b0f19]/80 backdrop-blur-md py-1 px-4 sm:px-6 flex items-center justify-between xl:justify-end sticky top-0 z-20 transition-colors duration-200">
      {/* Breadcrumbs */}
      <div onClick={()=>setIsSidebarOpen((prev)=>!prev)} className="xl:hidden sm:flex items-center gap-2 text-xs md:text-sm cursor-pointer text-slate-600 dark:text-gray-400">
        <Menu />
      </div>

      <div className="flex sm:hidden items-center gap-2">
        <span className="text-sm font-bold text-slate-900 dark:text-white truncate">
          AI Research
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          type="button"
          onClick={onToggleTheme}
          aria-label="Toggle theme"
          className="w-9 h-9 flex items-center justify-center transition-all cursor-pointer shrink-0"
        >
          {theme === 'dark' ? (
             <Sun className="w-4 h-4 text-indigo-600" />
          ) : (         
            <Moon className="w-4 h-4 text-black" />
          )}
        </button>

        <div className="flex items-center gap-2 dark:bg-gray-900/90 border border-slate-100 dark:border-gray-800 px-2.5 sm:px-2 py-1.5 rounded-xl shadow-inner cursor-pointer hover:border-slate-300 dark:hover:border-gray-700 transition-all">
          <div className="w-7 h-7 rounded-full bg-black dark:bg-linear-to-tr from-indigo-600 to-violet-500 text-white font-bold text-xs flex items-center justify-center shadow shrink-0">
            {initials}
          </div>
          <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-gray-200 max-w-25 sm:max-w-none truncate">
            {userName}
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-500 dark:text-gray-400 hidden sm:block" />
        </div>
      </div>
    </header>
  );
};