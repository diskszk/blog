import { Flex, Heading } from "@radix-ui/themes";

export const Notfound: React.FC = () => (
  <Flex
    align="center"
    justify="center"
    pb="64px"
    width="100%"
  >
    <Heading
      as="h2"
      size="8"
      weight="light"
    >
      404: Not found
    </Heading>
  </Flex>
);
