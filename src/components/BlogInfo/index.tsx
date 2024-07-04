import { Flex, Text, Heading, Section } from "@radix-ui/themes";
import { format } from "date-fns";
import type { BlogSchema } from "@/content/config";
import { Tag } from "../Tag";

type Props = Pick<BlogSchema, "title" | "topics" | "published_at">;

export const BlogInfo: React.FC<Props> = ({ title, topics, published_at }) => {
  const formateDate = format(published_at, "yyyy年MM月dd日");

  return (
    <Section
      py={{
        initial: "16px",
        sm: "48px",
      }}
    >
      <Flex
        direction="column"
        gapY="8px"
        mx="auto"
        width={{
          initial: "100%",
          sm: "80%",
        }}
      >
        <Heading
          as="h1"
          size="7"
        >
          {title}
        </Heading>
        <Text
          color="gray"
          size="2"
        >
          {formateDate}
          公開
        </Text>
        <Flex
          asChild
          direction="row"
          gapX="8px"
        >
          <ul>
            {topics.map((tag, index) => (
              <li key={index}>
                <Tag
                  href={`/tags/${tag}`}
                  size="2"
                  tag={tag}
                />
              </li>
            ))}
          </ul>
        </Flex>
      </Flex>
    </Section>
  );
};
