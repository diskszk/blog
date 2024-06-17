import { Box, Card, Flex, Link, Text } from "@radix-ui/themes";
import { format } from "date-fns";
import { getLogoImageByTag } from "@/helpers";
import { siteConfig } from "@/siteConfig";
import { Tag } from "@/components";
import { iconImage, text } from "./styles.css";

type Props = {
  entry: {
    slug: string;
    data: {
      title: string;
      tags: string[];
      updated_at: string;
    };
  };
};

export const BlogCard: React.FC<Props> = ({ entry }) => {
  const logoImage = getLogoImageByTag(entry.data.tags[0] || "");

  const formateDate = format(entry.data.updated_at, "yyyy年MM月dd日");

  return (
    <Box>
      <Card
        asChild
        size="4"
      >
        <Flex
          direction="row"
          p="24px"
        >
          <Flex
            align="center"
            gapX="8px"
          >
            <img
              alt={`${logoImage.name}のアイコン画像`}
              aria-label="ブログカードの画像"
              className={iconImage}
              height="40px"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = siteConfig.userIcon;
                event.currentTarget.alt = "恐竜のアイコン画像";
              }}
              src={logoImage.src}
              width="40px"
            />
            <Link
              className={text}
              color="gray"
              href={`/blog/${entry.slug}`}
              size="3"
            >
              {entry.data.title}
            </Link>
          </Flex>
          <Text
            color="gray"
            size="1"
            weight="light"
          >
            {formateDate}
          </Text>
          <Flex
            asChild
            gapX="4px"
            pt="8px"
          >
            <Flex
              asChild
              wrap="wrap"
            >
              <ul>
                {entry.data.tags.slice(0, 5).map((tag, index) => (
                  <li key={index}>
                    <Tag
                      href={`/tags/${tag}`}
                      size="1"
                      tag={tag}
                    />
                  </li>
                ))}
              </ul>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </Box>
  );
};
