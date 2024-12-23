import { z } from "zod";

const postSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long" })
    .max(255, { message: "Title must be at most 255 characters long" }),
    description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters long" }),
    author: z
    .string()
    .min(3, { message: "Author must be at least 3 characters long" })
    .max(255, { message: "Author must be at most 255 characters long" }),
});

export function validatePost(post) {
  return postSchema.safeParse(post);
}

export function validatePartialPost(post) {
  return postSchema.partial().safeParse(post);
}
