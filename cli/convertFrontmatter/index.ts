import path from "node:path";
import { filterOldFrontmatter } from "./filterOldFrontmatter";
import { getMarkdownFileList } from "./getMarkdownFileList";
import { getFile } from "./getFile";
import { getFrontmatter } from "./getFrontmatter";
import { getOldValue } from "./getOldValue";
import { updateOriginFile } from "./updateOriginFile";
import { getNewValue } from "./getNewValue";

export async function convertForntmatter(targetDir: string) {
  const readDirResult = await getMarkdownFileList(targetDir);

  if (readDirResult.isErr()) {
    console.error(readDirResult.error);
    process.exit(1);
  }

  const filenameList = readDirResult.value;

  await Promise.all(
    filenameList.map(async (filename) => {
      const readFileResult = await getFile(path.join(targetDir, filename));

      if (readFileResult.isErr()) {
        console.error(readFileResult.error);
        return;
      }

      const content = readFileResult.value;
      const frontmatter = getFrontmatter(content);

      if (!frontmatter) {
        console.error(filename, "にはfrontmatterが存在しません");
        return;
      }

      const oldFrontmatter = filterOldFrontmatter(frontmatter);

      if (!oldFrontmatter) {
        console.info(`info: skip file: ${path.join(targetDir, filename)}`);
        return;
      }

      const oldValue = getOldValue(oldFrontmatter);
      const newValue = getNewValue(oldValue);

      const writeFileResult = await updateOriginFile(
        path.join(targetDir, filename),
        newValue,
      );

      if (writeFileResult.isErr()) {
        console.error(writeFileResult.error);
        process.exit(1);
      }

      console.log(`convert frontmatter at ${filename}`);
    }),
  );
}
