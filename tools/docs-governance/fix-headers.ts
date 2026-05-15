import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOCS_DIR = path.join(__dirname, "../../docs/01_foundation");

const files = fs.readdirSync(DOCS_DIR);

files.forEach((file) => {
  if (file.endsWith(".md")) {
    const fullPath = path.join(DOCS_DIR, file);
    const content = fs.readFileSync(fullPath, "utf-8");

    const hasOwner = /owner/i.test(content) || /@architect/i.test(content);
    const hasStatus = /status/i.test(content);

    let prefix = "";
    if (!hasOwner) prefix += "Owner: @architect\n";
    if (!hasStatus) {
      const status = file.includes("roadmap") ? "planning" : "accepted";
      prefix += `Status: ${status}\n`;
    }

    if (prefix) {
      console.log(`Fixing ${file}`);
      fs.writeFileSync(fullPath, prefix + "\n" + content);
    }
  }
});
