import type { ReactNode } from "react";
import { Theme, ThemePanel } from "@radix-ui/themes";

type Props = {
  children: ReactNode
};

export const ThemeProvider: React.FC<Props> = ({ children }) => (
  <Theme
    accentColor="mint"
    grayColor="gray"
    radius="small"
  >
    {children}
    {import.meta.env.MODE === "development" && <ThemePanel />}
  </Theme>
);
