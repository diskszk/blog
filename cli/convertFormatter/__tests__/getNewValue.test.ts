import { test, expect } from "vitest";
import { getNewValue } from "../getNewValue";

test("元のprivateがfalseの場合、publishはtrueである", () => {
  const value = {
    title: "WepAPIの設計",
    tags: ["nestjs", "express"],
    isPrivate: "false",
  };

  const newValue = getNewValue(value);
  expect(newValue).toContain("published: true");
});
test("元のprivateがtrueの場合、publishはfalseである", () => {
  const value = {
    title: "WepAPIの設計",
    tags: ["nestjs", "express"],
    isPrivate: "true",
  };

  const newValue = getNewValue(value);
  expect(newValue).toContain("published: false");
});
test("元のprivateが文字列の場合、publishはtrueである", () => {
  const value = {
    title: "WepAPIの設計",
    tags: ["nestjs", "express"],
    isPrivate: "publish",
  };

  const newValue = getNewValue(value);
  expect(newValue).toContain("published: true");
});
