import { z, defineCollection } from "astro:content";

const profileCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  profile: profileCollection,
};
