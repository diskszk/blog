import { readFile } from "node:fs/promises";
import { err, ok, Result } from "neverthrow";

export async function getFile(path: string): Promise<Result<string, Error>> {
  try {
    const file = await readFile(path, "utf-8");
    return ok(file);
  } catch {
    return err(new Error("No such file or directory"));
  }
}
