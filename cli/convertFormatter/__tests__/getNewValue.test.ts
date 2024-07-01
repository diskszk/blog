import { test, expect } from "vitest";
import { getNewValue } from "../getNewValue";
import type { OldFrontmatter } from "../types";

test("元のprivateがfalseの場合、publishはtrueである", () => {
  const value: OldFrontmatter = {
    title: "WepAPIの設計",
    tags: ["nestjs", "express"],
    isPrivate: "false",
    updated_at: "2024-06-14T13:42:23+09:00",
  };

  const newValue = getNewValue(value);
  expect(newValue).toContain("published: true");
});
test("元のprivateがtrueの場合、publishはfalseである", () => {
  const value = {
    title: "WepAPIの設計",
    tags: ["nestjs", "express"],
    isPrivate: "true",
    updated_at: "2024-06-14T13:42:23+09:00",
  };

  const newValue = getNewValue(value);
  expect(newValue).toContain("published: false");
});
test("元のprivateが文字列の場合、publishはtrueである", () => {
  const value = {
    title: "WepAPIの設計",
    tags: ["nestjs", "express"],
    isPrivate: "publish",
    updated_at: "2024-06-14T13:42:23+09:00",
  };

  const newValue = getNewValue(value);
  expect(newValue).toContain("published: true");
});
