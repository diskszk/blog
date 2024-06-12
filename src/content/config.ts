import { z, defineCollection } from "astro:content";

const aboutCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  about: aboutCollection,
};
