import { Badge, Box, Card, Flex, Link } from "@radix-ui/themes";
import { getLogoImageByTags } from "@/helpers";
import { siteConfig } from "@/siteConfig";
import { iconImage, text } from "./styles.css";

type Props = {
  entry: {
    slug: string;
    data: {
      title: string;
      tags: string[];
    };
  };
};

export const BlogCard: React.FC<Props> = ({ entry }) => {
  const logoImage = getLogoImageByTags(entry.data.tags);

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
                event.currentTarget.src = siteConfig.userIcon.src;
                event.currentTarget.alt = "恐竜のアイコン画像";
              }}
              src={logoImage.src}
              width="40px"
            />
            <Link
              className={text}
              color="gray"
              href={`blog/${entry.slug}`}
              size="3"
            >
              {entry.data.title}
            </Link>
          </Flex>
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
                    {/* pages/tags/*.astroへのリンク */}
                    <Link href="./#">
                      <Badge
                        radius="large"
                        size="1"
                        variant="surface"
                      >
                        {tag}
                      </Badge>
                    </Link>
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