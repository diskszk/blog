import { test, expect } from "vitest";
import { getFrontmatter } from "../getFrontmatter";
import { filterOldFrontmatter } from "../filterOldFrontmatter";

test("frontmatterが正しく定義されている場合, frontmatter部分を返す", () => {
  const fileContent = `---
title: web開発入門
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
---

## 序文
はるはあけぼの

## おわりに
白しろき灰はひがちになりて、わろし。
`;

  expect(getFrontmatter(fileContent)).toBe(
    `title: web開発入門
tags:
  - CSS
  - HTML
  - JavaScript
private: false
updated_at: '2024-06-14T17:36:49+09:00'
id: 89c33609ff3450a8d7b0
organization_url_name: null
slide: false
ignorePublish: false`,
  );
});

test("frontmatterが設定されていない場合、undefinedを返す", () => {
  const fileContent = `
## 序文
はるはあけぼの

## おわりに
白しろき灰はひがちになりて、わろし。
`;

  expect(filterOldFrontmatter(fileContent)).toBeUndefined();
});
