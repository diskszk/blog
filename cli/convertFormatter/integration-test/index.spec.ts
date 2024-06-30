import { readFile } from "node:fs/promises";
import path from "node:path";
import { test, describe, beforeAll, afterAll, expect } from "vitest";
import { main } from "../main";
import { setup, cleanup, tmpDir } from "./setup";

describe("作成したファイルのfrontmatterを書き換える", () => {
  beforeAll(async () => {
    await setup();
  });
  afterAll(async () => {
    await cleanup();
  });

  test("ファイルのfrontmatterを一括で書き換えること", async () => {
    await main(tmpDir);

    const fileAContent = await readFile(
      path.join(tmpDir, "test-file-A.md"),
      "utf-8",
    );

    expect(fileAContent).toEqual(`---
title: web開発入門
topic: ["CSS","HTML","JavaScript"]
published: true
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
topic: ["React","Next"]
published: false
---

## 序文
いろはにほへと

## 2
チリヌルを

## おわりに
浅き夢見し 酔ひもせず
`);
  });
});
