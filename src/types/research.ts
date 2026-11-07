
/*
 * @file research.ts
 * @description Type definitions for research results, sources, and prompts.
 */

export interface Source {
  id: number;
  title: string;
  url: string;
  snippet?: string;
}

export interface ResearchResult {
  id: string;
  query: string;
  summary: string;
  highlights: string[];
  sources: Source[];
  createdAt: string;
}

export interface SuggestedPrompt {
  id: string;
  title: string;
  iconName: string;
  query: string;
}

export interface ExampleQuestion {
  id: string;
  question: string;
}

export interface ResearchSource {
  title: string;
  url: string;
}

export interface ResearchData {
  answer: string;
  sources: ResearchSource[];
  searchQueries: string[];
}

export interface ResearchApiResponse {
  success: boolean;
  data?: ResearchData;
  message?: string;
}