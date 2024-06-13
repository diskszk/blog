import { z, defineCollection } from "astro:content";

const profileCollection = defineCollection({
  type: "content",
  schema: z.object({}),
});

export const collections = {
  profile: profileCollection,
};
