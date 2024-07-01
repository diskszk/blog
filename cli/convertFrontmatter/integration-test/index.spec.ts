import { readFile } from "node:fs/promises";
import path from "node:path";
import { test, describe, beforeAll, afterAll, expect } from "vitest";
import { convertForntmatter } from "../index";
import { setup, cleanup, tmpDir } from "./setup";

describe("作成したファイルのfrontmatterを書き換える", async () => {
  beforeAll(async () => {
    await setup();
    await convertForntmatter(tmpDir);
  });

  afterAll(async () => {
    await cleanup();
  });

  test("ファイルのfrontmatterを一括で書き換えること", async () => {
    const fileAContent = await readFile(
      path.join(tmpDir, "test-file-A.md"),
      "utf-8",
    );

    expect(fileAContent).toEqual(`---
title: web開発入門
topics: ["CSS","HTML","JavaScript"]
published: true
published_at: '2024-06-14T17:36:49+09:00'
description: 
---

## 序文
はるはあけぼの

## おわりに
白しろき灰はひがちになりて、わろし。
`);

    const fileBContent = await readFile(
      path.join(tmpDir, "test-file-B.md"),
      "utf-8",
    );

    expect(fileBContent).toEqual(`---
title: 初めてのReact
topics: ["React","Next"]
published: false
published_at: '2024-06-14T17:36:49+09:00'
description: 
---

## 序文
いろはにほへと

## 2
チリヌルを

## おわりに
浅き夢見し 酔ひもせず
`);
  });

  test("元の文章を書き換えないこと", async () => {
    const fileAContent = await readFile(
      path.join(tmpDir, "test-file-A.md"),
      "utf-8",
    );
    expect(fileAContent).toContain(`
## 序文
はるはあけぼの

## おわりに
白しろき灰はひがちになりて、わろし。
`);

    const fileBContent = await readFile(
      path.join(tmpDir, "test-file-B.md"),
      "utf-8",
    );

    expect(fileBContent).toContain(`# 序文
いろはにほへと

## 2
チリヌルを

## おわりに
浅き夢見し 酔ひもせず
`);
  });
});
