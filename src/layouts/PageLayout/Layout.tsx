import type { ReactNode } from "react";
import { Theme, Container } from "@radix-ui/themes";
import { Header, Footer } from "@/components";
import { mainContainer } from "./styles.css";

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
      <main className={mainContainer}>
        {children}
      </main>
      <Footer />
    </Container>
  </Theme>
);
