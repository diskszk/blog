/*
  id, tags, private, updated_at が key に存在する場合古いものとする
*/
export function filterOldFrontmatter(frontmatter: string): string | undefined {
  if (!frontmatter) {
    return undefined;
  }

  return frontmatter.match("id:") &&
    frontmatter.match("tags:") &&
    frontmatter.match("private") &&
    frontmatter.match("updated_at")
    ? frontmatter
    : undefined;
}
