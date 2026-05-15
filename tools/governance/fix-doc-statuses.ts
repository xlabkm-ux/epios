import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOCS_DIR = path.join(__dirname, "../../docs");
const REGISTER_FILE = path.join(DOCS_DIR, "00_project/DOCUMENT_REGISTER.md");

function parseRegister() {
  const content = fs.readFileSync(REGISTER_FILE, "utf-8");
  const lines = content.split("\n");
  const register: Record<string, string> = {};

  for (const line of lines) {
    const fileMatch = line.match(/\[([^\]]+)\]\(([^)]+\.md)\)/);
    const parts = line.split("|").map((p) => p.trim());

    if (fileMatch && parts.length >= 5) {
      const fileName = path.basename(fileMatch[2]);
      const status = parts[4].toLowerCase();
      register[fileName] = status;
    }
  }
  return register;
}

function fixDocConsistency() {
  console.log("--- Fixing Document Consistency (File vs Register) ---");
  const register = parseRegister();

  const walk = (dir: string) => {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        walk(fullPath);
      } else if (file.endsWith(".md") && file !== "README.md") {
        const content = fs.readFileSync(fullPath, "utf-8");
        const registerStatus = register[file];

        if (registerStatus) {
          // Find status line and replace it
          const statusRegex =
            /^(\s*(?:\*\*|#)*\s*(?:status|статус)[:*]*\s*)([a-z_]+)/im;
          const match = content.match(statusRegex);

          if (match) {
            const currentStatus = match[2].toLowerCase();
            if (currentStatus !== registerStatus) {
              // Title case the status if it's concept or contract for readability
              const newStatusLabel =
                registerStatus.charAt(0).toUpperCase() +
                registerStatus.slice(1);
              const newContent = content.replace(
                statusRegex,
                `$1${newStatusLabel}`,
              );
              fs.writeFileSync(fullPath, newContent, "utf-8");
              console.log(
                `[FIXED] Updated status for ${file} to ${newStatusLabel}`,
              );
            }
          }
        }
      }
    });
  };

  walk(DOCS_DIR);
}

fixDocConsistency();
