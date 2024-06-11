import { Heading } from "@radix-ui/themes";
import { siteConfig } from "@/siteConfig";

export const Header: React.FC = () => {
  return (
    <header>
      <Heading as="h1" color="red">
        {siteConfig.siteName}
      </Heading>
    </header>
  );
};
