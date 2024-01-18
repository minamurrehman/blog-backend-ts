import z from "zod";

export const createBlogSchema = z.object({
  title: z.string({ required_error: "Blog title is required" }).min(1).max(255),
  slug: z.string({ required_error: "Blog slug is required" }).min(1).max(255),
  excerpt: z.string({ required_error: "Excerpt is required" }).min(1).max(255),
  image: z.string({ required_error: "Blog image is required" }).min(1).max(255),
  content: z
    .string({ required_error: "Blog content is required" })
    .min(1)
    .max(255),
  published: z.boolean().default(false),
});

// partial schema
export const updateBlogSchema = createBlogSchema.partial();
