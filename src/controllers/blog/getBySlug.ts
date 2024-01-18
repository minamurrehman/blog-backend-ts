import { Request, Response } from "express";
import Blog from "@/models/blog";

export default async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    return res.status(200).json(blog);
  } catch (err) {
    return res.status(500).json(err);
  }
};
