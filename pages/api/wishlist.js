// pages/api/wishlist.js
import { getCollection } from "@/utils/functions";
import { sendOk, sendBadRequest } from "@/utils/apiMethods";

export default async function handler(req, res) {
  const wishlist = await getCollection("wishlist");

  if (req.method === "GET") {
    const userId = req.query.userId || "default";
    const items = await wishlist.find({ userId }).toArray();
    return sendOk(res, items);
  } else if (req.method === "POST") {
    const { userId = "default", flowerId } = req.body;
    const result = await wishlist.insertOne({ userId, flowerId, addedAt: new Date() });
    return sendOk(res, { status: "added", id: result.insertedId });
  } else if (req.method === "DELETE") {
    const { userId = "default", flowerId } = req.query;
    await wishlist.deleteOne({ userId, flowerId });
    return sendOk(res, { status: "removed" });
  } else {
    return sendBadRequest(res, "Method not allowed");
  }
}