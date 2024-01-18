import { BlogDTO } from "@/dto/blog";
import { updateBlogSchema } from "@/validations/blog.validation";
import { Request, Response } from "express";
import Blog from "@/models/blog";
import slugify from "slugify";

export default async (req: Request, res: Response) => {
  try {
    const { slug: inputSlug } = req.params;
    const { title, content, excerpt, image, published, slug } =
      req.body as BlogDTO;

    const result = updateBlogSchema.safeParse({
      title,
      slug: slugify(slug, { lower: true, remove: /[*+~.()'"!:@]/g }),
      content,
      excerpt,
      image,
      published,
    });
    if (!result.success) {
      return res.status(400).json(result.error.flatten().fieldErrors);
    } else {
      const updatedBlog = await Blog.findOneAndUpdate(
        { slug: inputSlug },
        result.data,
        {
          new: true,
        }
      );
      return res.status(200).json(updatedBlog);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send("Something went wrong");
  }
};
