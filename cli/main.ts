import path from "node:path";
import { program } from "commander";
import { convertForntmatter } from "./convertFrontmatter";
import { __dirname } from "./util";
program.parse(process.argv);

const target = program.args[0];

switch (target) {
  case "convert-frontmatter": {
    const dirPath = program.args[1];
    if (!dirPath) {
      console.error("引数に誤りがあります");
      process.exit(1);
    }

    const targetDir = path.join(__dirname, dirPath);

    console.log(targetDir);

    await convertForntmatter(targetDir);

    break;
  }
  default: {
    console.error("引数に誤りがあります");
    process.exit(1);
  }
}
