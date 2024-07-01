import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BlogCard } from "./BlogCard";

describe("タグに応じた画像を表示する", () => {
  const renderWithProps = ({ topics }: { topics: string[] }) => {
    const props = {
      entry: {
        slug: "test-blog-slug-1234",
        data: {
          title: "テスト用ブログタイトル",
          topics: [...topics],
          published_at: "2021-08-21T09:00:00",
          published: true,
        },
      },
    };
    render(<BlogCard {...props} />);
  };

  test("タグが[React]の場合、Reactの画像を表示する", () => {
    renderWithProps({ topics: ["React", "Pokemon"] });
    const img = screen.getByRole("img", { name: "ブログカードの画像" });
    expect(img).toHaveProperty("alt", "reactのアイコン画像");
  });

  test("タグが[css]の場合、CSSの画像を表示する", () => {
    renderWithProps({ topics: ["css"] });
    const img = screen.getByRole("img", { name: "ブログカードの画像" });
    expect(img).toHaveProperty("alt", "cssのアイコン画像");
  });

  test("デフォルトで恐竜の画像を表示する", () => {
    renderWithProps({ topics: ["unknown-tag"] });
    const img = screen.getByRole("img", { name: "ブログカードの画像" });
    expect(img).toHaveProperty("alt", "恐竜のアイコン画像");
  });
});
