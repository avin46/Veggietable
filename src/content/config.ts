import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),   // ✅ THIS IS THE FIX
  }),
});

export const collections = {
  blog,
};
