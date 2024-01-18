import Blog from "@/models/blog";
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;

    await Blog.findOneAndDelete({ slug });
    return res.status(200).json({
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Something went wrong");
  }
};
