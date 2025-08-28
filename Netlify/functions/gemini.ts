import { GoogleGenAI } from "@google/genai";
import type { Handler, HandlerEvent } from "@netlify/functions";

const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  const fallbackMessage = (name: string) => `Congratulations, ${name}! Your hard work has paid off. Excellent job completing all your tasks!`;

  let studentName = 'Student';

  try {
    const body = event.body ? JSON.parse(event.body) : {};
    studentName = body.studentName || 'Student';

    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      console.error("API_KEY environment variable not set in Netlify.");
      return {
        statusCode: 200, // Still return success to not break the UI
        body: JSON.stringify({ message: fallbackMessage(studentName) }),
        headers: { 'Content-Type': 'application/json' },
      };
    }

    const ai = new GoogleGenAI({ apiKey });

    const prompt = `Generate a short, fun, and random congratulatory message for a student named ${studentName} who just completed all their project tasks. Be enthusiastic, encouraging, and use one or two emojis. Keep it under 30 words.`;

    const result = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            temperature: 0.9,
        }
    });

    const message = result.text || fallbackMessage(studentName);

    return {
      statusCode: 200,
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' },
    };

  } catch (error) {
    console.error("Error in Netlify function:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: fallbackMessage(studentName) }),
      headers: { 'Content-Type': 'application/json' },
    };
  }
};

export { handler };