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
          topics: ["React", "vite", "css", "apple", "pokemon", "ポケモンSV"],
          published_at: "2021-08-01T09:00:00",
          published: true,
        },
      },
      {
        slug: "pokewin",
        data: {
          title: "必ず勝てるポケモンバトル",
          topics: ["TypeScript", "react"],
          published_at: "2021-07-21T09:00:00",
          published: true,
        },
      },
      {
        slug: "doublebattle",
        data: {
          title: "ダブルバトルの覇者になる",
          topics: ["CSS", "TypeScript"],
          published_at: "2021-06-15T09:00:00",
          published: true,
        },
      },
      {
        slug: "strong100",
        data: {
          title: "強いポケモン100選",
          topics: ["Astro", "TypeScript"],
          published_at: "2023-08-21T09:00:00",
          published: true,
        },
      },
      {
        slug: "saporter",
        data: {
          title: "サポートポケモンの選び方",
          topics: ["AWS", "TypeScript"],
          published_at: "2020-01-21T09:00:00",
          published: true,
        },
      },
      {
        slug: "gard",
        data: {
          title: "まもるを使うタイミングが全て",
          topics: ["node.js", "TypeScript"],
          published_at: "2024-06-16T09:00:00",
          published: true,
        },
      },
      {
        slug: "pokepoke",
        data: {
          title: "全体わざと単体技どちらを選ぶか",
          topics: ["Nest.js", "TypeScript"],
          published_at: "2021-08-21T09:00:00",
          published: true,
        },
      },
    ],
  },
};
