import { Bot, Laptop, Code, Leaf, ChevronRight, Lightbulb } from 'lucide-react';
import { SuggestedPrompt, ExampleQuestion } from '@/types/research';

interface SuggestedPromptsProps {
  exampleQuestions: ExampleQuestion[];
  onSelectQuery: (query: string) => void;
}

export const SuggestedPrompts: React.FC<SuggestedPromptsProps> = ({
  exampleQuestions,
  onSelectQuery,
}) => {

 
  return (
    <div className="space-y-6">
      {/* Example Questions Section */}
      <div className=" rounded-2xl p-1 ">
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb className="w-4 h-4 text-indigo-400" />
          <h3 className="text-sm font-semibold text-black/70 dark:text-gray-200">Example questions</h3>
        </div>
        <div className="">
          {exampleQuestions.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectQuery(item.question)}
              className="w-full flex items-center justify-between py-3 text-left text-xs sm:text-sm text-black/70 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-800/40 px-2 rounded-lg transition-colors group border border-gray-300 dark:border-gray-800 mb-1"
            >
              <span className="group-hover:translate-x-1 transition-transform">
                {item.question}
              </span>
              <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-indigo-400 shrink-0" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};