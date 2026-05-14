import fs from "fs";

/**
 * Validates that the Pull Request body contains a traceability reference.
 * Either 'Closes #ID' for a GitHub Issue or 'No-Issue-Reason: <reason>' for exceptional cases.
 */
function checkTraceability() {
  const GITHUB_EVENT_PATH = process.env.GITHUB_EVENT_PATH;

  if (!GITHUB_EVENT_PATH) {
    console.log(
      "Not running in GitHub Actions (GITHUB_EVENT_PATH not set), skipping PR traceability check.",
    );
    return;
  }

  try {
    const event = JSON.parse(fs.readFileSync(GITHUB_EVENT_PATH, "utf-8"));

    // Only run on pull requests
    if (!event.pull_request) {
      console.log("Not a pull_request event, skipping traceability check.");
      return;
    }

    const prBody = event.pull_request.body || "";

    const hasCloses = /Closes\s+#\d+/i.test(prBody);
    const hasNoIssue =
      /No-Issue-Reason:\s+(bootstrap|ci-repair|typo|emergency|release)/i.test(
        prBody,
      );

    if (!hasCloses && !hasNoIssue) {
      console.error("\x1b[31m[ERROR] PR Traceability check failed!\x1b[0m");
      console.error(
        "PR description must contain either 'Closes #ID' or 'No-Issue-Reason: <reason>'",
      );
      console.error(
        "Valid reasons for No-Issue-Reason: bootstrap, ci-repair, typo, emergency, release",
      );
      process.exit(1);
    }

    console.log("\x1b[32m[SUCCESS] PR Traceability check passed.\x1b[0m");
  } catch (error) {
    console.error("Failed to read GitHub event:", error);
    process.exit(1);
  }
}

checkTraceability();
