import { Link, Badge } from "@radix-ui/themes";
import type { Responsive } from "@radix-ui/themes/props";

type Props = {
  href: string;
  tag: string;
  size: Responsive<"1" | "2" | "3">;
};

export const Tag: React.FC<Props> = ({ href, tag, size }) => (
  <Link href={href}>
    <Badge
      radius="large"
      size={size}
      variant="surface"
    >
      {tag}
    </Badge>
  </Link>
);
