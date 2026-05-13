import { test, expect } from "@playwright/test";

test.describe("ADR Flow E2E", () => {
  test("should navigate through the ADR review flow", async ({ page }) => {
    // 1. Go to the app
    await page.goto("http://localhost:5173/");

    // 2. Switch to ADR view
    await page.click('button[data-testid="nav-adr-review"]');

    // 3. Verify ADR Index is visible
    await expect(page.locator("h1")).toContainText("ADR Index");

    // 4. Select a proposed ADR
    await page.click('button[data-testid="adr-item-ADR-0026"]');
    await expect(page.locator("h2")).toContainText("Use Apache-2.0");

    // 5. Start Analysis
    await page.click('button:has-text("Run Epistemic Analysis")');
    await expect(
      page.locator("text=Analyzing Architectural Impact"),
    ).toBeVisible();

    // 6. Wait for Review step (mock timeout is 2s)
    await page.waitForSelector('button:has-text("Approve Decision")', {
      timeout: 5000,
    });

    // 7. Approve
    await page.click('button:has-text("Approve Decision")');

    // 8. Verify Finalized state
    await expect(page.locator("text=Finalized")).toBeVisible();
    await expect(page.locator("text=ACCEPTED")).toBeVisible();
  });
});
