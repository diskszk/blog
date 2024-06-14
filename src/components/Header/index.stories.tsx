import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./index";

const meta = {
  title: "components/Header",
  component: Header,
  args: {
    currentPath: "",
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InHome: Story = {};
