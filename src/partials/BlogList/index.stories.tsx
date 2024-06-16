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
          updated_at: "2021-08-01T09:00:00",
        },
      },
      {
        slug: "pokewin",
        data: {
          title: "必ず勝てるポケモンバトル",
          tags: ["TypeScript", "react"],
          updated_at: "2021-07-21T09:00:00",
        },
      },
      {
        slug: "doublebattle",
        data: {
          title: "ダブルバトルの覇者になる",
          tags: ["CSS", "TypeScript"],
          updated_at: "2021-06-15T09:00:00",
        },
      },
      {
        slug: "strong100",
        data: {
          title: "強いポケモン100選",
          tags: ["Astro", "TypeScript"],
          updated_at: "2023-08-21T09:00:00",
        },
      },
      {
        slug: "saporter",
        data: {
          title: "サポートポケモンの選び方",
          tags: ["AWS", "TypeScript"],
          updated_at: "2020-01-21T09:00:00",
        },
      },
      {
        slug: "gard",
        data: {
          title: "まもるを使うタイミングが全て",
          tags: ["node.js", "TypeScript"],
          updated_at: "2024-06-16T09:00:00",
        },
      },
      {
        slug: "pokepoke",
        data: {
          title: "全体わざと単体技どちらを選ぶか",
          tags: ["Nest.js", "TypeScript"],
          updated_at: "2021-08-21T09:00:00",
        },
      },
    ],
  },
};
