import type { ReactNode } from "react";
import { Theme, Container, Flex } from "@radix-ui/themes";
import { Header, Footer } from "@/components";
import { styles } from "@/constants";

type Props = {
  pathname: string;
  children: ReactNode;
};
export const Layout: React.FC<Props> = ({ pathname, children }) => (
  <Theme
    accentColor="mint"
    grayColor="auto"
    radius="medium"
  >
    <Container size="3">
      <Header currentPath={pathname.split("/")[1] || ""} />
      <Flex
        direction="column"
        minHeight={`calc(100vh - ${styles.headerHeight} - ${styles.footerHeight})`}
        role="main"
      >
        {children}
      </Flex>
      <Footer />
    </Container>
  </Theme>
);
