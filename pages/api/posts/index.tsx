import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../utils/connectDB";
import Post from "../../../models/Post";

export default async function postsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const numOfPosts = 9;
  const page = +req.query.page;

  try {
    const client = await connectDB();
    const posts = await Post.find({})
      .skip(page > 1 ? (page - 1) * numOfPosts : 0)
      .limit(numOfPosts)
      .populate("author")
      .exec();
    const postsLength = await Post.find({}).count();
    const pages = Math.ceil(postsLength / numOfPosts);
    client.disconnect();
    return res.status(200).json({ posts, pages });
  } catch (e) {
    return res.status(404).json({ message: "Not found" });
  }
}
