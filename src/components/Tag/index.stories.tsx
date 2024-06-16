import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./index";

const meta = {
  title: "components/Tag",
  component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ReactTag: Story = {
  args: {
    href: "#",
    tag: "React",
    size: "1",
  },
};
