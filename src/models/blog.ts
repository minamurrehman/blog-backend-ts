import mongoose, { Schema } from "mongoose";

const blogSchema: Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  slug: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  content: {
    type: String,
    required: true,
    minlength: 3,
  },
  excerpt: {
    type: String,
    required: true,
    minlength: 3,
  },
  image: {
    type: String,
    required: true,
    minlength: 3,
  },
  published: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Blog", blogSchema);
