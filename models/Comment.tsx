import { Schema, model, models } from "mongoose";

const CommentSchema = new Schema({
  id: String,
  avatar: String,
  author: String,
  text: String,
});

const Comment = models.Comment || model("Comment", CommentSchema);

export default Comment;
