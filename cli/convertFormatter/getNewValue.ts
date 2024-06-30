/*
  private と published を反転する
 */
export function getNewValue(oldValue: {
  title: string | undefined;
  tags: string[];
  isPrivate: string | undefined;
}): string {
  let published: boolean;
  if (oldValue.isPrivate === "true" || oldValue.isPrivate === "false") {
    published = oldValue.isPrivate === "true" ? false : true;
  } else {
    published = true;
  }

  return `---
title: ${oldValue.title}
topic: [${oldValue.tags.map((v) => `"${v}"`)}]
published: ${published}
---`;
}
