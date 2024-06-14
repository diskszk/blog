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
    <Box maxWidth="360px">
      <Card
        asChild
        size="2"
      >
        <Link href={`blog/${entry.slug}`}>
          <Flex align="center">
            <Text
              truncate
              weight="medium"
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
    <ul>
      <Grid
        columns={{
          initial: "1",
          sm: "3",
        }}
        gapX="20px"
        gapY="16px"
        width="auto"
      >
        {entries.map((entry) => (
          <li key={entry.slug}>
            <BlogListItem entry={entry} />
          </li>
        ))}
      </Grid>
    </ul>
  );
};
