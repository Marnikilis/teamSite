import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../utils/connectDB";
import mongoose from "mongoose";

export default async function newsLetterHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    const client = await connectDB();
    const emailsCollection = mongoose.connection.db.collection("emails");
    const existingEmail = await emailsCollection.findOne({ email: userEmail });

    if (!userEmail || !userEmail.includes("@")) {
      return res.status(400).json({ message: "Invalid input" });
    } else if (existingEmail?.email === userEmail) {
      return res.status(208).json({ message: "You are already subscribed!" });
    } else {
      await emailsCollection.insertOne({ email: userEmail });
    }

    client.disconnect();

    return res.status(201).json({ message: "Successful subscription!" });
  }
}
