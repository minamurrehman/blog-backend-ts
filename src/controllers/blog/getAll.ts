import { Request, Response } from "express";
import Blog from "@/models/blog";

export default async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.find();
    return res.status(200).json(blogs);
  } catch (err) {
    return res.status(500).json(err);
  }
};
