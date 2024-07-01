import type { OldFrontmatter } from "./types";

function getValue(line: string[], key: string) {
  return line
    .find((v) => v.match(`${key}:`))
    ?.replace(`${key}:`, "")
    .trim();
}

export function getOldValue(frontmatterValue: string): OldFrontmatter {
  const frontmatterLine = frontmatterValue.split("\n");

  const title = getValue(frontmatterLine, "title");
  const isPrivate = getValue(frontmatterLine, "private");
  const updated_at = getValue(frontmatterLine, "updated_at");
  const description = getValue(frontmatterLine, "description") || "";

  // key がないものをtagとする場合
  const tags = frontmatterLine
    .filter((v) => !v.match(":"))
    // eslint-disable-next-line @stylistic/quotes
    .map((v) => v.replaceAll('"', "").replace("-", "").trim());

  return {
    title,
    tags,
    isPrivate,
    description,
    updated_at,
  };
}
