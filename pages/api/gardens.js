// pages/api/gardens.js
import { getCollection } from "@/utils/functions";
import { sendOk, sendBadRequest } from "@/utils/apiMethods";

export default async function handler(req, res) {
  const gardens = await getCollection("gardens");

  if (req.method === "GET") {
    const userId = req.query.userId || "default"; // Fără autentificare, folosim un userId implicit
    const items = await gardens.find({ userId }).toArray();
    return sendOk(res, items);
  } else if (req.method === "POST") {
    const { userId = "default", flowers } = req.body;
    const result = await gardens.insertOne({ userId, flowers, createdAt: new Date() });
    return sendOk(res, { id: result.insertedId, status: "saved" });
  } else {
    return sendBadRequest(res, "Method not allowed");
  }
}