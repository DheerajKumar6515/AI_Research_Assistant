import { SuggestedPrompt } from '@/types/research';
import { Bot, Laptop, Code, Leaf} from 'lucide-react';

interface SuggestedPromptscard{
  prompts: SuggestedPrompt[];
  onSelectQuery: (query: string) => void;
}

function SuggestedCard({prompts,onSelectQuery}:SuggestedPromptscard) {
    const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return <Bot className="w-4 h-4 text-violet-400" />;
      case 'Laptop': return <Laptop className="w-4 h-4 text-emerald-400" />;
      case 'Code': return <Code className="w-4 h-4 text-rose-400" />;
      case 'Leaf': return <Leaf className="w-4 h-4 text-teal-400" />;
      default: return <Bot className="w-4 h-4 text-indigo-400" />;
    }
  };
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
        {prompts.map((prompt) => (
          <button
            key={prompt.id}
            onClick={() => onSelectQuery(prompt.query)}
            className="flex items-center gap-3 p-3 rounded-xl dark:bg-[#121829] border border-gray-200 dark:border-gray-800/80 dark:hover:border-gray-700 hover:bg-gray-100 dark:hover:bg-[#161f33] transition-all text-left group shadow-sm cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-100/50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center shrink-0 group-hover:scale-108 transition-transform">
              {getIcon(prompt.iconName)}
            </div>
            <span className="text-xs font-medium text-black/70 dark:text-gray-300 dark:group-hover:text-white line-clamp-2">
              {prompt.title}
            </span>
          </button>
        ))}
      </div>      
  )
}

export default SuggestedCard
