import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { researchModel } from "./model";
import {RESEARCH_SYSTEM_PROMPT} from './prompts'
import type {ResearchSource,ResearchData} from '@/types/research'


//extract text and source metadata from gemini response
function extractResearchData(response: any): ResearchData {
  const metadata =
    response.response_metadata?.groundingMetadata ??
    response.response_metadata?.grounding_metadata ??
    response.additional_kwargs?.groundingMetadata ??
    {};

  const chunks = metadata.groundingChunks ?? [];

  const sources: ResearchSource[] = chunks
    .map((chunk: any) => {
      const web = chunk.web;

      if (!web?.uri || !web?.title) {
        return null;
      }

      // Only allow HTTP and HTTPS source links.
      try {
        const parsedUrl = new URL(web.uri);

        if (!["http:", "https:"].includes(parsedUrl.protocol)) {
          return null;
        }

        return {
          title: web.title,
          url: parsedUrl.toString(),
        };
      } catch {
        return null;
      }
    })
    .filter((source: ResearchSource | null): source is ResearchSource =>
      source !== null
    );

  // Remove duplicate source URLs.
  const uniqueSources = Array.from(
    new Map(sources.map((source) => [source.url, source])).values()
  );

  return {
    answer: response.text || "",
    sources: uniqueSources,
    searchQueries: metadata.webSearchQueries ?? [],
  };
}

// Main research function.
export async function performResearch(
  userQuery: string
): Promise<ResearchData> {
  const response = await researchModel.invoke([
    new SystemMessage(RESEARCH_SYSTEM_PROMPT),
    new HumanMessage(userQuery)
  ]);

  return extractResearchData(response);
}