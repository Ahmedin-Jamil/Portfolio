import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini AI client
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || "AIzaSyA3rOWXZ0AaYNCE9KV5gCGChXUMgn9hq_Y");

export async function getGeminiResponse(
  message: string,
  systemPrompt: string
): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: systemPrompt }],
        },
        {
          role: "model",
          parts: [{ text: "I understand my role. I will help visitors understand your expertise while maintaining professionalism and focusing on your AI and development capabilities." }],
        },
      ],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error calling Gemini AI:", error);
    return "I apologize, but I'm having trouble connecting at the moment. Please try again later.";
  }
}