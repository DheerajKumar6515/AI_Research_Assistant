import { ChatGoogle } from "@langchain/google";

//Initialize Gemini model
export const researchModel = new ChatGoogle("gemini-3.8-flash").bindTools([
    {
        googleSearch:{},
    }
])
