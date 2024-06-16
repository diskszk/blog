import { GitHubLogoIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Flex,
  Heading,
  IconButton,
  TabNav,
  Box,
  Button,
} from "@radix-ui/themes";
import { useCallback, useState, type KeyboardEvent } from "react";
import { siteConfig } from "@/siteConfig";
import { styles } from "@/constants";
import { anchor, border, radius } from "./style.css";
import { VerticalNavigation } from "./VerticalNavigation";

type Props = {
  currentPath: string;
};

export const Header: React.FC<Props> = ({ currentPath }) => {
  const iconSize = "48px";

  const [isOpen, setIsOpen] = useState(false);
  const handleClickMenuIcon = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleKeydown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (!isOpen) {
        return;
      }
      if (event.key !== "Escape") {
        return;
      }

      setIsOpen(false);
    }, [isOpen, setIsOpen]);

  return (
    <header>
      {isOpen && <VerticalNavigation handleClick={handleCloseMenu} />}
      <Flex
        align="center"
        className={border}
        height={{
          initial: styles.headerHeight.sp,
          sm: styles.headerHeight.pc,
        }}
        justify="between"
        onKeyDown={handleKeydown}
        pt={{
          initial: "0px",
          sm: "8px",
        }}
        px="24px"
      >
        <Flex
          display={{
            initial: "flex",
            sm: "none",
          }}
          mr="-32px"
        >
          <IconButton
            color="gray"
            onClick={handleClickMenuIcon}
            radius="medium"
            variant="outline"
          >
            <HamburgerMenuIcon />
          </IconButton>
        </Flex>
        <Flex
          gapX="8px"
          mx={{
            initial: "auto",
            sm: "0",
          }}
        >
          <Button
            asChild
            className={anchor}
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
                size={{
                  initial: "6",
                  sm: "8",
                }}
                weight="regular"
              >
                {siteConfig.siteName}
              </Heading>
            </a>
          </Button>
        </Flex>
        <Flex
          align="center"
          display={{
            initial: "none",
            sm: "flex",
          }}
          gap="16px"
        >
          <TabNav.Root>
            <TabNav.Link
              active={currentPath === "blog"}
              href="/blog"
            >
              Blog
            </TabNav.Link>
            <TabNav.Link
              active={currentPath === "tags"}
              href="/tags"
            >
              タグ一覧
            </TabNav.Link>
            <TabNav.Link
              active={currentPath === "profile"}
              href="/profile"
            >
              Profile
            </TabNav.Link>
          </TabNav.Root>
          <IconButton
            asChild
            className={anchor}
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
