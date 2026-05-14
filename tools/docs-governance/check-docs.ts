import fs from "fs";
import path from "path";

const DOCS_DIR = path.join(__dirname, "../../docs");
const ADR_DIR = path.join(DOCS_DIR, "02_adrs");
const ADR_INDEX_FILE = path.join(
  DOCS_DIR,
  "01_foundation/EPIOS-09-adr-index.md",
);

function checkAdrFiles() {
  console.log("--- Checking ADR Files ---");
  const indexContent = fs.readFileSync(ADR_INDEX_FILE, "utf-8");
  const adrRegex = /ADR-(\d{4})/g;
  let match;
  const adrIds = new Set<string>();

  while ((match = adrRegex.exec(indexContent)) !== null) {
    adrIds.add(match[0]);
  }

  const files = fs.readdirSync(ADR_DIR);
  let missingCount = 0;

  adrIds.forEach((id) => {
    const found = files.find((f) => f.startsWith(id));
    if (!found) {
      console.error(`[ERROR] Missing physical file for ADR: ${id}`);
      missingCount++;
    }
  });

  return missingCount === 0;
}

function checkDocMetadata() {
  console.log("--- Checking Document Metadata (Owner/Status) ---");
  let errorCount = 0;

  const walk = (dir: string) => {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        if (file !== "90_archive" && file !== "node_modules") {
          walk(fullPath);
        }
      } else if (file.endsWith(".md") && file !== "README.md") {
        const content = fs.readFileSync(fullPath, "utf-8");
        const hasOwner =
          /owner/i.test(content) ||
          /владелец/i.test(content) ||
          /@architect|@pm|@dev|@architect/i.test(content);
        const hasStatus = /status|статус/i.test(content);

        if (!hasOwner || !hasStatus) {
          // Special case for ADRs which might have status but owner in register
          if (fullPath.includes("02_adrs")) {
            if (!hasStatus) {
              console.error(`[ERROR] Missing Status in ADR: ${file}`);
              errorCount++;
            }
          } else {
            console.error(
              `[ERROR] Missing Owner or Status in: ${path.relative(DOCS_DIR, fullPath)}`,
            );
            errorCount++;
          }
        }
      }
    });
  };

  walk(DOCS_DIR);
  return errorCount === 0;
}

function main() {
  const adrOk = checkAdrFiles();
  const metaOk = checkDocMetadata();

  if (!adrOk || !metaOk) {
    console.error("\n[GOVERNANCE] Documentation checks FAILED.");
    process.exit(1);
  } else {
    console.log("\n[GOVERNANCE] Documentation checks PASSED.");
    process.exit(0);
  }
}

main();
