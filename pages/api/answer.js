import { sendOk, sendBadRequest } from "@/utils/apiMethods";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return sendBadRequest(res, "Only POST requests are allowed");
  }

  const { messages, type } = req.body;
  if (!messages || !type) {
    return sendBadRequest(res, "Messages and type are required");
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
    });
    const reply = response.choices[0].message;
    return sendOk(res, { message: reply });
  } catch (error) {
    console.error("OpenAI API error:", error);
    return sendBadRequest(res, "Failed to get response from OpenAI");
  }
}