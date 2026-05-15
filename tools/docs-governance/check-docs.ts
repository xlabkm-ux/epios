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

function checkDocConsistency() {
  console.log("--- Checking Document Consistency (File vs Register) ---");
  const register = parseRegister();
  let errorCount = 0;

  const walk = (dir: string) => {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        if (
          file !== "90_archive" &&
          file !== "node_modules" &&
          file !== "20_reference" &&
          file !== "04_delivery"
        ) {
          walk(fullPath);
        }
      } else if (file.endsWith(".md") && file !== "README.md") {
        const content = fs.readFileSync(fullPath, "utf-8");

        if (file === "DOCUMENT_REGISTER.md") return;

        const hasOwner =
          /owner|владелец/i.test(content) ||
          /@architect|@pm|@dev/i.test(content);

        const statusMatch = content.match(
          /^\s*(?:\*\*|#)*\s*(?:status|статус)[:*]*\s*([a-z_]+)/im,
        );
        let fileStatus = statusMatch ? statusMatch[1].toLowerCase() : null;

        if (fileStatus === "active") fileStatus = "accepted";

        if (!hasOwner) {
          console.error(
            `[ERROR] Missing Owner in: ${path.relative(DOCS_DIR, fullPath)}`,
          );
          errorCount++;
        }

        if (!fileStatus) {
          console.error(
            `[ERROR] Missing Status in: ${path.relative(DOCS_DIR, fullPath)}`,
          );
          errorCount++;
        }

        const registerStatus = register[file];
        if (registerStatus && fileStatus && registerStatus !== fileStatus) {
          const normalizedFileStatus =
            fileStatus === "proposed" ? "planning" : fileStatus;
          const normalizedRegStatus =
            registerStatus === "proposed" ? "planning" : registerStatus;

          if (normalizedFileStatus !== normalizedRegStatus) {
            console.error(
              `[ERROR] Status mismatch for ${file}: File=${fileStatus}, Register=${registerStatus}`,
            );
            errorCount++;
          }
        } else if (!registerStatus && dir.includes("01_foundation")) {
          console.error(
            `[ERROR] Foundation Document ${file} is not in DOCUMENT_REGISTER.md`,
          );
          errorCount++;
        }
      }
    });
  };

  walk(DOCS_DIR);
  return errorCount === 0;
}

function main() {
  const consistencyOk = checkDocConsistency();

  if (!consistencyOk) {
    console.error("\n[GOVERNANCE] Documentation checks FAILED.");
    process.exit(1);
  } else {
    console.log("\n[GOVERNANCE] Documentation checks PASSED.");
    process.exit(0);
  }
}

main();
