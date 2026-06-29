import { ai } from "./genkit";

console.log("📚 Smart Library Assistant Started...\n");

async function main() {
  const response = await ai.generate({
    prompt: "Hello! Introduce yourself as a smart library assistant.",
  });

  console.log("🤖 Assistant Response:\n");
  console.log(response.text);
}

main();

