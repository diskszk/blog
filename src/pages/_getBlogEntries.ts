import { getCollection } from "astro:content";

function dateToTime(date: string): number {
  return new Date(date).getTime();
}

export const getBlogEntries = async () => {
  const allBlogEntries = await getCollection("blog");
  const publicBlogEntries = allBlogEntries.filter(({ data }) => data.published);

  const sortedByUpdateAtEntries = publicBlogEntries.sort(
    (a, b) => dateToTime(b.data.published_at) - dateToTime(a.data.published_at),
  );

  return sortedByUpdateAtEntries;
};
