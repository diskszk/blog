import path from "node:path";
import { filterOldFrontmatter } from "./filterOldFrontmatter";
import { getMarkdownFileList } from "./getMarkdownFileList";
import { getFile } from "./getFile";
import { getFrontmatter } from "./getFrontmatter";
import { getOldValue } from "./getOldValue";
import { updateOriginFile } from "./updateOriginFile";
import { getNewValue } from "./getNewValue";

// こうしないとtestテストが通らない
const PATH_TO_TARGET_DIR =
  import.meta.env.MODE === "test" ? "./integration-test/tmp" : "./tmp";

const targetDir = path.join(__dirname, PATH_TO_TARGET_DIR);
const targetFile = (filename: string) => path.join(targetDir, filename);

export async function main(targetDir: string) {
  const readDirResult = await getMarkdownFileList(targetDir);

  if (readDirResult.isErr()) {
    console.error(readDirResult.error);
    process.exit(1);
  }

  const filenameList = readDirResult.value;

  await Promise.all(
    filenameList.map(async (filename) => {
      const readFileResult = await getFile(targetFile(filename));

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
        console.info(`info: skip file: ${targetFile(filename)}`);
        return;
      }

      const oldValue = getOldValue(oldFrontmatter);
      const newValue = getNewValue(oldValue);

      const writeFileResult = await updateOriginFile(
        targetFile(filename),
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

// await main(targetDir);
