import { getCollection } from "astro:content";

function dateToTime(date: string): number {
  return new Date(date).getTime();
}

export const getBlogEntries = async () => {
  const allBlogEntries = await getCollection("blog");
  const publicBlogEntries = allBlogEntries.filter(({ data }) => !data.private);

  const sortedByUpdateAtEntries = publicBlogEntries.sort(
    (a, b) => dateToTime(b.data.updated_at) - dateToTime(a.data.updated_at),
  );

  return sortedByUpdateAtEntries;
};
