import { Flex } from "@radix-ui/themes";
import type { ReactNode } from "react";
import { styles } from "@/constants";

type Props = {
  children: ReactNode;
};

export const MainContainer: React.FC<Props> = ({ children }) => {
  const mainHeight = {
    sp: `calc(100vh - ${styles.headerHeight.sp} - ${styles.footerHeight.sp})`,
    pc: `calc(100vh - ${styles.headerHeight.pc} - ${styles.footerHeight.pc})`,
  };

  return (
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
  );
};
