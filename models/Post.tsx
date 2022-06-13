import { Schema, model, models } from 'mongoose';
import Author from './Author';

const PostSchema = new Schema({
  id: String,
  title: String,
  text: String,
  postPhoto: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: Author
  },
})

const Post = models.Post || model('Post', PostSchema)

export default Post;