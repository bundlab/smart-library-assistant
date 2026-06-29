import { ai } from "../config/genkit.js";
import { gemini15Flash } from "@genkit-ai/googleai";
import { retrieveLibraryData } from "../retrievers/libraryRetriever.js";

export async function libraryAssistant(question: string) {
  // Step 1: Retrieve library records
  const docs = await retrieveLibraryData(question);

  // Step 2: Build context
  const context = docs.length
    ? docs.join("\n")
    : "No matching library records found.";

  // Step 3: Ask Gemini (correct model!)
  const response = await ai.generate({
    model: gemini15Flash,
    prompt: `
You are Smart Library Assistant AI.

Library Context:
${context}

User Question:
${question}

Answer clearly and professionally:
`,
  });

  return response.text;
}

