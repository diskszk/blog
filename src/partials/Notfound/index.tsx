import { Box, Button, Flex, Heading, Link, Text } from "@radix-ui/themes";

export const Notfound: React.FC = () => (
  <Flex
    align="center"
    direction="column"
    gapY="24px"
    my="64px"
    width="100%"
  >
    <Heading
      as="h2"
      size="8"
      weight="light"
    >
      404: Not found
    </Heading>
    <Box width="60%">
      <Text
        color="gray"
        weight="medium"
      >
        お探しのページは見つかりませんでした。削除、変更されたか URL が間違っている可能性がございます。
      </Text>
    </Box>
    <Button
      asChild
      color="gray"
      variant="outline"
    >
      <Link href="/">
        トップページへ
      </Link>
    </Button>
  </Flex>
);
