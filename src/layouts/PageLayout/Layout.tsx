import type { ReactNode } from "react";
import { Theme, Container, Flex } from "@radix-ui/themes";
import { Header, Footer } from "@/components";
import { styles } from "@/constants";

type Props = {
  pathname: string;
  children: ReactNode;
};

export const Layout: React.FC<Props> = ({ pathname, children }) => {
  const mainHeight = {
    sp: `calc(100vh - ${styles.headerHeight.sp} - ${styles.footerHeight.sp})`,
    pc: `calc(100vh - ${styles.headerHeight.pc} - ${styles.footerHeight.pc})`,
  };

  return (
    <Theme
      accentColor="mint"
      grayColor="auto"
      radius="medium"
    >
      <Container
        size={{
          initial: "1",
          sm: "2",
          md: "3",
        }}
      >
        <Header currentPath={pathname.split("/")[1] || ""} />
        <Flex
          direction="column"
          minHeight={{
            initial: mainHeight.sp,
            sm: mainHeight.pc,
          }}
          px={{
            initial: "16px",
            sm: "64px",
          }}
          py="24px"
          role="main"
        >
          {children}
        </Flex>
        <Footer />
      </Container>
    </Theme>
  );
};
