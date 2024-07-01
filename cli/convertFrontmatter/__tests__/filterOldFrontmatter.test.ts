import { test, expect } from "vitest";
import { filterOldFrontmatter } from "../filterOldFrontmatter";

test("古いタイプのfrontmatterが渡ってきた場合そのまま返す", () => {
  const frontmatter = `title: web開発入門
tags:
  - CSS
  - HTML
  - JavaScript
private: false
updated_at: '2024-06-14T17:36:49+09:00'
id: 89c33609ff3450a8d7b0
organization_url_name: null
slide: false
ignorePublish: false
`;

  expect(filterOldFrontmatter(frontmatter)).toBe(frontmatter);
});

test("新しいタイプのfrontmatterが渡ってきた場合、undefinedを返す", () => {
  const frontmatter = `title: web開発入門
topic: ["CSS", "HTML", "JavaScript"]
published: false
emoji: "😸" 
type: "tech"
published: true`;
  expect(filterOldFrontmatter(frontmatter)).toBeUndefined();
});
