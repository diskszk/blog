import { z, defineCollection } from "astro:content";

const profileCollection = defineCollection({
  type: "content",
  schema: z.object({}),
});

const blogSchema = z.object({
  title: z.string(),
  topics: z.array(z.string()),
  published: z.boolean(),
  description: z.string().optional().nullable(),
  published_at: z.string(),
});

const blogCollection = defineCollection({
  type: "content",
  schema: blogSchema,
});

export const collections = {
  profile: profileCollection,
  blog: blogCollection,
};

export type BlogSchema = z.infer<typeof blogSchema>;
