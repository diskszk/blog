import { Text, Flex, Link } from "@radix-ui/themes";
import { format } from "date-fns";
import type { ZennArticle } from "@/remote";
import zennLogo from "./zennLogo.svg";

type Props = {
  entry: ZennArticle;
};
export const ZennEntriy: React.FC<Props> = ({ entry }) => {
  return (
    <Flex
      asChild
      justify="between"
    >
      <li key={entry.slug}>
        <Link
          href={`https://zenn.dev${entry.path}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Flex direction="column">
            <Text
              color="gray"
              size="2"
              weight="light"
            >
              {format(entry.published_at, "yyyy年MM月dd日")}
            </Text>
            <Text
              color="gray"
              size="4"
              weight="bold"
            >
              <Text mr="4px">{entry.emoji}</Text>
              {entry.title}
            </Text>
          </Flex>
        </Link>
        <Flex
          gapX="2px"
          my="auto"
        >
          <img
            alt="zennのロゴ"
            height="24px"
            src={zennLogo.src}
          />
          <Text color="blue">Zenn</Text>
        </Flex>
      </li>
    </Flex>
  );
};
