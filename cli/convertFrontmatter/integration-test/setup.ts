import path from "node:path";
import { fileURLToPath } from "node:url";
import { mkdir, access, writeFile } from "node:fs/promises";
import { deleteAsync } from "del";

const __filename = fileURLToPath(import.meta.url);

const fileAContent = `---
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
const fileBContent = `---
title: 初めてのReact
tags:
  - React
  - Next
private: true
updated_at: '2024-06-14T17:36:49+09:00'
id: 89c33609ff3450a8d7b0
organization_url_name: null
slide: false
ignorePublish: false
---

## 序文
いろはにほへと

## 2
チリヌルを

## おわりに
浅き夢見し 酔ひもせず
`;
export const tmpDir = path.join(path.dirname(__filename), "/tmp");
export async function setup() {
  try {
    await access(tmpDir);
  } catch {
    await mkdir(tmpDir);
  }

  await writeFile(path.join(tmpDir, "test-file-A.md"), fileAContent);
  console.log(`setup: ${tmpDir}/test-file-A.md is crated.`);

  await writeFile(path.join(tmpDir, "test-file-B.md"), fileBContent);
  console.log(`setup: ${tmpDir}/test-file-B.md is crated.`);
}

export async function cleanup() {
  await deleteAsync(tmpDir);
  console.log(`cleanup: ${tmpDir}/*.md file deleted`);
}
