import { Flex } from "@radix-ui/themes";
import { Tag } from "@/components";

type Props = {
  tags: string[];
};

export const TagList: React.FC<Props> = ({ tags }) => (
  <Flex
    asChild
    gap="4px"
    px="8px"
    wrap="wrap"
  >
    <ul>
      {tags.map((tag, index) => (
        <li key={index}>
          <Tag
            href={`/tags/${tag.replaceAll(" ", "_")}`}
            size="3"
            tag={tag}
          />
        </li>
      ))}
    </ul>
  </Flex>
);
