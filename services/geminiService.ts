
import { GoogleGenAI } from "@google/genai";

export async function generateBio(name: string): Promise<string> {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `Generate a short, witty, and professional bio for a software engineer named ${name}. Mention skills in React, TypeScript, and AI. Keep it under 150 characters.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    
    return response.text.trim();
  } catch (error) {
    console.error("Error generating bio with Gemini API:", error);
    throw new Error("Failed to generate bio. Please try again.");
  }
}
