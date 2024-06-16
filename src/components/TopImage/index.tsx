import { Flex } from "@radix-ui/themes";
import type { ImgHTMLAttributes } from "react";
import { image } from "./styles.css";

export const TopImage: React.FC<ImgHTMLAttributes<HTMLImageElement>> = (
  props,
) => (
  <Flex
    m="auto"
    my="16px"
    width="320px"
  >
    <img
      alt="トップ画像"
      className={image}
      width="100%"
      {...props}
    />
  </Flex>
);
