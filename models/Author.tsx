import { Schema, model, models } from 'mongoose';


const AuthorSchema = new Schema({
  id: String,
  name: String,
  avatar: String,
})

const Author = models.Author || model('Author', AuthorSchema)

export default Author;