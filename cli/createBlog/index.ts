import fs, { access } from "node:fs/promises";
import { join } from "node:path";
import { format } from "date-fns";
import { err, ok, type Result } from "neverthrow";
import type { BlogSchema } from "@/content/config";

function validateSlug(slug: string): boolean {
  // 半角英小文字（a-z）、半角数字（0-9）、ハイフン（-）、アンダースコア（_）の12〜50字の組み合わせ
  const pattern = /^[a-z0-9_-]{12,50}$/;

  return pattern.test(slug);
}

async function createNewFile(
  path: string,
  data: string,
): Promise<Result<void, Error>> {
  try {
    await fs.writeFile(path, data);
    return ok(void 0);
  } catch {
    return err(new Error(`ファイルの書き込みに失敗しました。\nfile: ${path}`));
  }
}

export async function createBlog(
  targetDir: string,
  slug: string,
): Promise<void> {
  if (!validateSlug(slug)) {
    console.error(
      "ブログのsluugは半角英小文字（a-z）、半角数字（0-9）、ハイフン（-）、アンダースコア（_）の12〜50字の組み合わせで入力してください",
    );
    process.exit(1);
  }

  try {
    await access(targetDir);
  } catch {
    console.error(`${targetDir} does not exists`);
    process.exit(1);
  }

  try {
    await access(join(targetDir, `${slug}.md`));
    console.error(`${targetDir}/${slug}.md  exists`);
  } catch {
    /* empty */
  }

  const publishedAt = format(new Date(), "yyyy-MM-dd");

  const data: BlogSchema = {
    title: "",
    topics: [""],
    published: false,
    published_at: publishedAt,
  };

  const frontmatter = `---
title: ${data.title}
topics: [${data.topics.map((v) => `"${v}"`)}]
published: ${data.published}
published_at: '${data.published_at}'
description:
---`;

  const createNewFileResult = await createNewFile(
    join(targetDir, `${slug}.md`),
    frontmatter,
  );

  if (createNewFileResult.isErr()) {
    console.error(createNewFileResult.error);
    process.exit(1);
  }

  console.log(
    "Complate create markdown file\npath:",
    join(targetDir, `${slug}.md`),
  );
}
