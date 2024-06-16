import { Grid } from "@radix-ui/themes";
import { BlogCard } from "./BlogCard";

type Props = {
  entries: {
    slug: string;
    data: {
      title: string;
      tags: string[];
      updated_at: string;
    };
  }[];
};

export const BlogList: React.FC<Props> = ({ entries }) => {
  function dateToTime(date: string): number {
    return new Date(date).getTime();
  }

  const sortedByUpdateAtEntries = entries.sort(
    (a, b) => dateToTime(b.data.updated_at) - dateToTime(a.data.updated_at),
  );

  return (
    <Grid
      asChild
      columns={{
        initial: "1",
        sm: "2",
      }}
      gapX="16px"
      gapY="12px"
      width="auto"
    >
      <ul>
        {sortedByUpdateAtEntries.map((entry) => (
          <li key={entry.slug}>
            <BlogCard entry={entry} />
          </li>
        ))}
      </ul>
    </Grid>
  );
};
