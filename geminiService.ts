// Fix: Add reference to Vite client types to resolve issues with import.meta.env
/// <reference types="vite/client" />

import { GoogleGenAI } from "@google/genai";

export async function generateCongratsMessage(studentName: string): Promise<string> {
  try {
    const apiKey = import.meta.env.VITE_API_KEY;
    if (!apiKey) {
      console.warn("VITE_API_KEY environment variable not found. Using fallback message.");
      return `Congratulations, ${studentName}! Your hard work has paid off. Excellent job completing all your tasks!`;
    }
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Generate a short, fun, and random congratulatory message for a student named ${studentName} who just completed all their project tasks. Be enthusiastic, encouraging, and use one or two emojis. Keep it under 30 words.`,
        config: {
          temperature: 0.9,
        }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API call failed:", error);
    return `Congratulations, ${studentName}! Your hard work has paid off. Excellent job completing all your tasks!`;
  }
}
