import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCreativeStory = async (topic?: string): Promise<{ title: string; content: string }> => {
  try {
    const prompt = topic 
      ? `Write a very short, poetic, and evocative story title and paragraph about: ${topic}. Format as JSON with keys 'title' and 'content'. Keep the content under 80 words. The tone should be nostalgic and warm.`
      : `Write a very short, poetic, and evocative story title and paragraph about the connection between human creativity and artificial intelligence. Format as JSON with keys 'title' and 'content'. Keep the content under 80 words. The tone should be nostalgic and warm.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    const json = JSON.parse(text);
    return {
      title: json.title || "Untitled",
      content: json.content || "No story generated.",
    };

  } catch (error) {
    console.error("Error generating story:", error);
    return {
      title: "Connection Lost",
      content: "The threads of imagination are temporarily tangled. Please try again in a moment.",
    };
  }
};