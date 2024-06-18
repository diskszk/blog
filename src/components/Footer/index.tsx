import { Flex, Text } from "@radix-ui/themes";
import { styles } from "@/constants";
import { siteConfig } from "@/siteConfig";
import { border } from "./styles.css";

export const Footer: React.FC = () => (
  <footer>
    <Flex
      align="center"
      className={border}
      height={{
        initial: styles.footerHeight.sp,
        sm: styles.footerHeight.pc,
      }}
      px="16px"
    >
      <Text color="gray">
        <small>
          © 2024
          {siteConfig.author}
        </small>
      </Text>
    </Flex>
  </footer>
);
