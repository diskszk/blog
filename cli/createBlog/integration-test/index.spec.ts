import path from "node:path";
import { access, writeFile, readFile } from "node:fs/promises";
import { test, describe, expect, afterAll, vitest } from "vitest";
import { createBlog } from "../index";
import { cleanup, setup, tmpDir } from "./setup";

describe("[slug].mdファイルを新規作成する", () => {
  const mockExit = vitest
    .spyOn(process, "exit")
    .mockImplementation((number) => {
      throw new Error("process.exit: " + number);
    });

  afterAll(async () => {
    await cleanup();
    mockExit.mockRestore();
  });
  test("sample-1234_asdf.mdファイルを作成する", async () => {
    await setup();

    await createBlog(tmpDir, "sample-1234_asdf");
    expect(access(path.resolve(`${tmpDir}/sample-1234_asdf.md`))).resolves.ok;
  });

  test("すでに同名のファイルが存在する場合、異常終了する", async () => {
    await setup();

    await writeFile(path.join(tmpDir, "exists-123456.md"), "exists");

    expect(createBlog(tmpDir, "exists-123456")).rejects.toThrow(
      "process.exit: 1",
    );
    expect(await readFile(path.join(tmpDir, "exists-123456.md"), "utf-8")).toBe(
      "exists",
    );
  });
});
