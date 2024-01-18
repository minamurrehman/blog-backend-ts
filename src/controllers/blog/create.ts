import { Request, Response } from "express";
import slugify from "slugify";
import { createBlogSchema } from "@/validations/blog.validation";
import { StatusCodes as STATUS } from "http-status-codes";
import { BlogDTO } from "@/dto/blog";
import Blog from "@/models/blog";

export default async (req: Request, res: Response) => {
  try {
    const { title, content, excerpt, image, published } = req.body as BlogDTO;
    const slug = slugify(title, { lower: true, remove: /[*+~.()'"!:@]/g });
    const result = createBlogSchema.safeParse({
      title,
      content,
      slug,
      excerpt,
      image,
      published,
    });
    if (!result.success) {
      return res
        .status(STATUS.BAD_REQUEST)
        .json(result.error.flatten().fieldErrors);
    } else {
      const newBlog = await Blog.create(result.data);
      return res.status(STATUS.CREATED).json(newBlog);
    }
  } catch (err) {
    console.log(err);
    return res
      .status(STATUS.INTERNAL_SERVER_ERROR)
      .send("Something went wrong");
  }
};
