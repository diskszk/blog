import { readFile, writeFile } from "node:fs/promises";
import { err, ok, type Result } from "neverthrow";

export async function updateOriginFile(
  path: string,
  newValue: string,
): Promise<Result<void, Error>> {
  const originFileContent = await readFile(path, "utf-8");
  const pattern = new RegExp(/---[\s\S]*?---/);
  const converted = originFileContent.replace(pattern, newValue);

  try {
    await writeFile(path, converted);
    return ok(void 0);
  } catch {
    return err(new Error(`ファイルの書き込みに失敗しました。\nfile: ${path}`));
  }
}
