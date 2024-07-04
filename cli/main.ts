import { join } from "node:path";
import { Command } from "commander";
import { convertForntmatter } from "./convertFrontmatter";
import { __dirname } from "./util";
import { createBlog } from "./createBlog";

const program = new Command();
program.name("blog-cli").version("1.0.0", "-v, --version");

program
  .command("convert-frontmatter <path>")
  .description("Convert frontmatter of markdown file")
  .action(async (path) => {
    const targetDir = join(__dirname, path);

    console.log("run: blog-cli/convert-frontmatter");
    console.log("target directory: ", targetDir);
    await convertForntmatter(targetDir);
    return;
  });

program
  .command("create <path> <slug>")
  .description("Create a markdown file")
  .action(async (path, slug) => {
    const targetDir = join(__dirname, path);

    await createBlog(targetDir, slug);
  });

program.parse(process.argv);
