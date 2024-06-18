import { z, defineCollection } from "astro:content";

const profileCollection = defineCollection({
  type: "content",
  schema: z.object({}),
});

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    id: z.string(),
    title: z.string(),
    updated_at: z.string(),
    private: z.boolean(),
    tags: z.array(z.string()),
    description: z.string().optional() || "",
  }),
});

export const collections = {
  profile: profileCollection,
  blog: blogCollection,
};
