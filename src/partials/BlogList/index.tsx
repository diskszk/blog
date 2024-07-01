import { Grid } from "@radix-ui/themes";
import type { BlogSchema } from "@/content/config";
import { BlogCard } from "./BlogCard";

type Props = {
  entries: {
    slug: string;
    data: BlogSchema;
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
