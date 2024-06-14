import type { Meta, StoryObj } from "@storybook/react";
import { BlogList } from "./index";

const meta = {
  title: "partials/BlogList",
  component: BlogList,
} satisfies Meta<typeof BlogList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    entries: [
      {
        slug: "asdfasdf",
        data: {
          title: "ポケモンダブルバトル必勝法",
          tags: ["React", "vite", "css", "apple", "pokemon", "ポケモンSV"],
        },
      },
      {
        slug: "pokewin",
        data: {
          title: "必ず勝てるポケモンバトル",
          tags: ["React", "TypeScript"],
        },
      },
      {
        slug: "doublebattle",
        data: {
          title: "ダブルバトルの覇者になる",
          tags: ["React", "TypeScript"],
        },
      },
      {
        slug: "strong100",
        data: {
          title: "強いポケモン100選",
          tags: ["React", "TypeScript"],
        },
      },
      {
        slug: "saporter",
        data: {
          title: "サポートポケモンの選び方",
          tags: ["React", "TypeScript"],
        },
      },
      {
        slug: "gard",
        data: {
          title: "まもるを使うタイミングが全て",
          tags: ["React", "TypeScript"],
        },
      },
    ],
  },
};
