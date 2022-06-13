import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../utils/connectDB";
import Post from "../../../models/Post";

export default async function PostHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postId = req.query.postId;

  try {
    const client = await connectDB();
    const selectedPost = await Post.findOne({ slug: postId })
      .populate("author")
      .exec();
    res.status(200).json({ selectedPost });
    client.disconnect();
  } catch (e) {
    return res.status(404).json({ message: "Not found" });
  }
}
