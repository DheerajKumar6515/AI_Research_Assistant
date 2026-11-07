import { NextRequest, NextResponse } from "next/server";
import { performResearch } from "@/lib/ai/research";

// POST /api/research
export async function POST(request: NextRequest) {
  try {
    // 1. Read request body.
    const body: unknown = await request.json();

    // 2. Validate the incoming query.
    if (
      typeof body !== "object" ||
      body === null ||
      !("query" in body) ||
      typeof body.query !== "string"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "A valid research query is required.",
        },
        { status: 400 },
      );
    }

    const query = body.query.trim();

    // 3. Check empty queries and maximum length.
    if (!query || query.length > 2000) {
      return NextResponse.json(
        {
          success: false,
          message: "Query must contain 1–2000 characters.",
        },
        { status: 400 },
      );
    }

    // 4. Check API key configuration.
    if (!process.env.GOOGLE_API_KEY) {
      throw new Error("GOOGLE_API_KEY is not configured.");
    }

    // 5. Execute LangChain research workflow.
    const research = await performResearch(query);

    // 6. Return research result.
    return NextResponse.json({
      success: true,
      data: {
        answer: research.answer,
        sources: research.sources,
        searchQueries: research.searchQueries,
      },
    });
  } catch (error) {
    // Log actual error on the server, not in the client response.
    console.error("Research API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to complete your research. Please try again.",
      },
      { status: 500 },
    );
  }
}
