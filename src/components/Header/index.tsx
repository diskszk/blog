import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Flex, Heading, IconButton, TabNav, Box, Button } from "@radix-ui/themes";
import { siteConfig } from "@/siteConfig";
import { styles } from "@/constants";
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
        height={styles.headerHeight}
        justify="between"
        pt="8px"
        px="24px"
      >
        <Flex gapX="8px">
          <Button
            asChild
            color="gray"
            variant="ghost"
          >
            <a
              aria-label="Homeへのリンク"
              href="/"
            >
              <Box
                height={iconSize}
                m="auto"
                width={iconSize}
              >
                <img
                  alt="アイコン画像"
                  className={radius}
                  height={iconSize}
                  src={siteConfig.userIcon.src}
                  width={iconSize}
                />
              </Box>
              <Heading
                align="center"
                as="h1"
                size="8"
                weight="regular"
              >
                {siteConfig.siteName}
              </Heading>
            </a>
          </Button>
        </Flex>
        <Flex
          align="center"
          gap="16px"
        >
          <TabNav.Root>
            <TabNav.Link
              active={currentPath === "blog" || !currentPath}
              href="/blog"
            >
              Blog
            </TabNav.Link>
            <TabNav.Link
              active={currentPath === "about"}
              href="/about"
            >
              About
            </TabNav.Link>
          </TabNav.Root>
          <IconButton
            asChild
            color="gray"
            variant="ghost"
          >
            <a
              aria-label="GitHubリポジトリへのリンク"
              href={siteConfig.repoURL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <GitHubLogoIcon
                color="black"
                height="36px"
                width="36px"
              />
            </a>
          </IconButton>
        </Flex>
      </Flex>
    </header>
  );
};
