import { Box, Card, Flex, Grid, Link, Text } from "@radix-ui/themes";

type ItemProps = {
  entry: {
    slug: string;
    data: {
      title: string;
    };
  };
};

const BlogListItem: React.FC<ItemProps> = ({ entry }) => {
  return (
    <Box>
      <Card
        asChild
        size="4"
      >
        <Link href={`blog/${entry.slug}`}>
          <Flex
            align="center"
            as="span"
          >
            <Text
              size="3"
              truncate
            >
              {entry.data.title}
            </Text>
          </Flex>
        </Link>
      </Card>
    </Box>
  );
};

type Props = {
  entries: {
    slug: string;
    data: {
      title: string;
    };
  }[];
};

export const BlogList: React.FC<Props> = ({ entries }) => {
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
        {entries.map((entry) => (
          <li key={entry.slug}>
            <BlogListItem entry={entry} />
          </li>
        ))}
      </ul>
    </Grid>
  );
};
