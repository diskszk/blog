import { Flex, Text } from "@radix-ui/themes";
import { border } from "./styles.css";

export const Footer: React.FC = () => (
  <footer>
    <Flex
      align="center"
      className={border}
      height="64px"
      px="16px"
    >
      <Text color="gray">
        <small>© 2024 diskszk </small>
      </Text>
    </Flex>
  </footer>
);
