export function getFrontmatter(content: string): string | undefined {
  const matchedContent = content.match(/^---\n([\s\S]*?)\n---/);
  if (!matchedContent) {
    return;
  }
  const frontmatter = matchedContent[1];
  if (!frontmatter) {
    return;
  }

  return frontmatter;
}
