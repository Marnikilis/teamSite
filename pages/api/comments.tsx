import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../utils/connectDB';
import Comment from '../../models/Comment';


export default async function commentsHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await connectDB();
    const comments = await Comment.find({});
    client.disconnect()
    return res.status(200).json({comments})
  } catch (e) {
    return res.status(404).json({message: 'Not found'});
  }
}