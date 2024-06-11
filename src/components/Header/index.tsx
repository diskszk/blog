import { Flex, Heading, IconButton, TabNav, Box } from "@radix-ui/themes";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { siteConfig } from "@/siteConfig";
import { border, radius } from "./style.css";

type Props = {
  currentPath: string;
};

export const Header: React.FC<Props> = ({ currentPath }) => {
  const iconSize = "48px";

  return (
    <header>
      <Flex
        align="center"
        className={border}
        height="112px"
        justify="between"
        pt="8px"
        px="24px"
      >
        <Flex gap="8px">
          <Box height={iconSize} m="auto" width={iconSize}>
            <img
              alt="アイコン画像"
              className={radius}
              height={iconSize}
              src={siteConfig.userIcon.src}
              width={iconSize}
            />
          </Box>
          <Heading as="h1" size="8" weight="regular" align="center">
            {siteConfig.siteName}
          </Heading>
        </Flex>
        <Flex align="center" gap="16px">
          <TabNav.Root>
            <TabNav.Link
              active={currentPath === "blog" || !currentPath}
              href="/blog"
            >
              Blog
            </TabNav.Link>
            <TabNav.Link active={currentPath === "about"} href="/about">
              About
            </TabNav.Link>
            <TabNav.Link active={"dev" === currentPath} href="#">
              Document
            </TabNav.Link>
          </TabNav.Root>
          <IconButton asChild color="gray" variant="ghost">
            <a
              href={siteConfig.repoURL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <GitHubLogoIcon height="36px" width="36px" />
            </a>
          </IconButton>
        </Flex>
      </Flex>
    </header>
  );
};
