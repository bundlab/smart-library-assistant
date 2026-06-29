import dotenv from "dotenv";
dotenv.config();

import { genkit } from "genkit";
import { googleAI, gemini10Pro } from "@genkit-ai/googleai";

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GEMINI_API_KEY,
    }),
  ],
  model: gemini10Pro,
});

