import { Avatar, Badge, Box, Card, Flex, Grid, Link } from "@radix-ui/themes";
import { siteConfig } from "@/siteConfig";
import { text } from "./styles.css";

type ItemProps = {
  entry: {
    slug: string;
    data: {
      title: string;
      tags: string[];
    };
  };
};

const BlogListItem: React.FC<ItemProps> = ({ entry }) => (
  <Box>
    <Card
      asChild
      size="4"
    >
      <Flex
        direction="row"
        p="24px"
      >
        <Flex
          align="center"
          gapX="8px"
        >
          <Avatar
            fallback="T"
            radius="full"
            size="3"
            src={String(siteConfig.userIcon)}
          />
          <Link
            className={text}
            color="gray"
            href={`blog/${entry.slug}`}
            size="3"
          >
            {entry.data.title}
          </Link>
        </Flex>
        <Flex
          asChild
          gapX="4px"
          pt="8px"
        >
          <Flex
            asChild
            wrap="wrap"
          >
            <ul>
              {entry.data.tags.slice(0, 5).map((tag) => (
                <li>
                  {/* pages/tags/*.astroへのリンク */}
                  <Link href="./#">
                    <Badge
                      radius="large"
                      size="1"
                      variant="surface"
                    >
                      {tag}
                    </Badge>
                  </Link>
                </li>
              ))}
            </ul>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  </Box>
);

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
          <BlogListItem entry={entry} />
        </li>
      ))}
    </ul>
  </Grid>
);
