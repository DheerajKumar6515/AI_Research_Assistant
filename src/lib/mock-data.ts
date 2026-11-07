/*
 * @description Provides mock data for recent searches, suggested chips, example questions, and research reports.
 */

import { ResearchResult, SuggestedPrompt, ExampleQuestion } from '@/types/research';

export const mockSuggestedPrompts: SuggestedPrompt[] = [
  {
    id: '1',
    title: 'Latest AI agent developments in 2026',
    iconName: 'Bot',
    query: 'Latest AI agent developments in 2026',
  },
  {
    id: '2',
    title: 'Best laptops for programming under 70k',
    iconName: 'Laptop',
    query: 'Best laptops for programming under 70k',
  },
  {
    id: '3',
    title: 'React vs Next.js comparison',
    iconName: 'Code',
    query: 'React vs Next.js comparison',
  },
  {
    id: '4',
    title: 'Climate change solutions',
    iconName: 'Leaf',
    query: 'Climate change solutions',
  },
];

export const mockExampleQuestions: ExampleQuestion[] = [
  { id: 'e1', question: 'What are the latest features of Next.js 15?' },
  { id: 'e2', question: 'How is AI changing the future of software development?' },
  { id: 'e3', question: 'Best practices for building scalable React applications?' },
  { id: 'e4', question: 'What are the top programming languages in 2025?' },
];

export const mockRecentSearches: string[] = [
  'Latest AI agent developments',
  'Next.js 15 new features',
  'React vs Vue comparison',
  'Best laptops for developers',
  'Climate change solutions',
];

export const mockResearchDatabase: Record<string, ResearchResult> = {
  'Latest AI agent developments in 2026': {
    id: 'res-1',
    query: 'Latest AI agent developments in 2026',
    summary:
      'In 2026, AI agents are becoming more autonomous, multimodal, and integrated into everyday tools. Key developments include improved reasoning, broader tool use, and enterprise adoption.',
    highlights: [
      'More autonomous decision-making capabilities across complex workflows',
      'Multimodal AI agents handling text, image, audio, and video inputs natively',
      'Deep integration with developer productivity tools and operating systems',
      'Increased focus on enterprise safety, guardrails, and robust data governance',
      'Growing cross-industry enterprise adoption replacing legacy automation tools',
    ],
    sources: [
      {
        id: 1,
        title: 'Google DeepMind - AI Agent Report 2026',
        url: 'https://deepmind.google/research/ai-agents-2026',
      },
      {
        id: 2,
        title: 'TechCrunch - The Future of AI Agents',
        url: 'https://techcrunch.com/ai-agents-2026',
      },
      {
        id: 3,
        title: 'Stanford HAI - AI Index 2026',
        url: 'https://hai.stanford.edu/ai-index-2026',
      },
    ],
    createdAt: 'Just now',
  },
  'Best laptops for programming under 70k': {
    id: 'res-2',
    query: 'Best laptops for programming under 70k',
    summary:
      'Laptops under ₹70,000 in 2026 offer stellar performance with AMD Ryzen 7 and Intel Core i5/i7 13th Gen processors, coupled with 16GB RAM as a standard baseline for software compilation and containerized workflows.',
    highlights: [
      'Minimum 16GB RAM configuration recommended for running local Docker and IDEs',
      'Fast NVMe SSD storage (512GB or 1TB) for rapid project boot times',
      'High-resolution displays with anti-glare coatings for prolonged coding sessions',
      'Solid battery life exceeding 7-8 hours under moderate development load',
    ],
    sources: [
      {
        id: 1,
        title: 'NDTV Gadgets 360 - Best Budget Dev Laptops',
        url: 'https://gadgets360.com/laptops/features/best-programming-laptops-under-70k',
      },
      {
        id: 2,
        title: 'IGN India Tech Reviews',
        url: 'https://in.ign.com/laptops/tech-reviews',
      },
    ],
    createdAt: '2 hours ago',
  },
};

// Fallback generator for queries not explicitly in mock database
export function generateMockResearch(query: string): ResearchResult {
  if (mockResearchDatabase[query]) {
    return mockResearchDatabase[query];
  }
  return {
    id: `res-${Date.now()}`,
    query: query,
    summary: `Comprehensive research findings and web analysis regarding "${query}". Synthesized across multiple reputable technical sources and academic indices for 2026.`,
    highlights: [
      `Key market and technical insights regarding ${query}`,
      'Evaluated performance benchmarks, industry standards, and architectural paradigms',
      'Analyzed developer adoption metrics and future trajectory outlook',
    ],
    sources: [
      {
        id: 1,
        title: `Global Tech Research Index - ${query}`,
        url: 'https://techresearch.org/insights',
      },
      {
        id: 2,
        title: 'Developer Ecosystem Quarterly Report',
        url: 'https://dev-ecosystem.io/reports',
      },
    ],
    createdAt: 'Just now',
  };
}