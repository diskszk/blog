import { Cross2Icon } from "@radix-ui/react-icons";
import { Flex, IconButton, Link } from "@radix-ui/themes";
import { anchor, verticalNavigation } from "./style.css";

type Props = {
  handleClick: () => void;
};

export const VerticalNavigation: React.FC<Props> = ({ handleClick }) => {
  return (
    <Flex
      align="start"
      className={verticalNavigation}
      direction="column"
      gap="8px"
      height="100vh"
      left="0px"
      position="fixed"
      pt="16px"
      px="8px"
      width="96px"
    >
      <IconButton
        className={anchor}
        color="gray"
        onClick={handleClick}
        size="1"
        variant="outline"
      >
        <Cross2Icon />
      </IconButton>
      <nav>
        <Flex
          direction="column"
          gapY="8px"
        >
          <Link
            color="gray"
            href="/"
          >
            Home
          </Link>
          <Link
            color="gray"
            href="/blog"
          >
            blog
          </Link>
          <Link
            color="gray"
            href="/profile"
          >
            profile
          </Link>
        </Flex>
      </nav>
    </Flex>
  );
};
