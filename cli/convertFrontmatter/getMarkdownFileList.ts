import { readdir } from "node:fs/promises";
import { err, ok, Result } from "neverthrow";

export async function getMarkdownFileList(
  path: string,
): Promise<Result<string[], Error>> {
  try {
    const filenameList = await readdir(path);

    return ok(filenameList.filter((filename) => filename.match(".md")));
  } catch {
    return err(new Error(`No such file or directory\npath: ${path}`));
  }
}
