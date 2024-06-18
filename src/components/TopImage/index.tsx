import { Flex } from "@radix-ui/themes";
import { image } from "./styles.css";

type Props = {
  tag: string;
  logoImage: {
    src: string;
    name: string;
  };
};

export const TopImage: React.FC<Props> = ({ tag, logoImage }) => (
  <Flex
    align="center"
    direction="row"
    gap="8px"
  >
    {logoImage.name !== "恐竜" && (
      <img
        alt="トップ画像"
        className={image}
        height="40px"
        src={logoImage.src}
      />
    )}
    <h2>
      {tag}
      のタグが付いたブログ一覧
    </h2>
  </Flex>
);
