import { Grid } from "@radix-ui/themes";
import { BlogCard } from "./BlogCard";

type Props = {
  entries: {
    slug: string;
    data: {
      title: string;
      tags: string[];
    };
  }[];
};

export const BlogList: React.FC<Props> = ({ entries }) => (
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
      {entries.map((entry) => (
        <li key={entry.slug}>
          <BlogCard entry={entry} />
        </li>
      ))}
    </ul>
  </Grid>
);
