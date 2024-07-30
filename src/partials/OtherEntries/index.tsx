import { Flex } from "@radix-ui/themes";
import type { ZennArticle } from "@/remote";
import { ZennEntriy } from "@/components";

type Props = {
  entries: ZennArticle[];
};

export const OtherEntries: React.FC<Props> = ({ entries }) => {
  return (
    <Flex
      asChild
      direction="column"
      gapY="8px"
    >
      <ul>
        {entries.map((entry) => (
          <ZennEntriy
            entry={entry}
            key={entry.slug}
          />
        ))}
      </ul>
    </Flex>
  );
};
