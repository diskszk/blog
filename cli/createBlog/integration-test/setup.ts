import path from "node:path";
import { fileURLToPath } from "node:url";
import { mkdir, access } from "node:fs/promises";
import { deleteAsync } from "del";

const __filename = fileURLToPath(import.meta.url);

export const tmpDir = path.join(path.dirname(__filename), "/tmp");
export async function setup() {
  try {
    await access(tmpDir);
  } catch {
    await mkdir(tmpDir);
  }
}

export async function cleanup() {
  await deleteAsync(tmpDir);
  console.log(`cleanup: ${tmpDir}`);
}
