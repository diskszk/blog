import type { BlogSchema } from "@/content/config";
import type { OldFrontmatter } from "./types";

/*
  private と published を反転する
 */
export function getNewValue(oldFrontmatter: OldFrontmatter): string {
  let published: boolean;
  if (
    oldFrontmatter.isPrivate === "true" ||
    oldFrontmatter.isPrivate === "false"
  ) {
    published = oldFrontmatter.isPrivate === "true" ? false : true;
  } else {
    published = true;
  }

  const schema: BlogSchema = {
    title: oldFrontmatter.title || "",
    topics: oldFrontmatter.tags,
    published,
    description: oldFrontmatter.description || "",
    published_at: oldFrontmatter.updated_at || "",
  };

  return `---
title: ${schema.title}
topics: [${schema.topics.map((v) => `"${v}"`)}]
published: ${schema.published}
published_at: ${schema.published_at}
description: ${schema.description}
---`;
}
