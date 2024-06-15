import type { ReactNode } from "react";
import { Theme, Container } from "@radix-ui/themes";

type Props = {
  children: ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
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
        {children}
      </Container>
    </Theme>
  );
};
