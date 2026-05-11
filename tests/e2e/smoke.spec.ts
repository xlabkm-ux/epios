import { test, expect } from "@playwright/test";

test.describe("EPOS Smoke Tests", () => {
  test.beforeEach(async ({ page }) => {
    // Mock the API response for missions
    await page.route("**/missions", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify([
          { id: "m1", title: "Test Mission 1", status: "ACTIVE" },
          { id: "m2", title: "Test Mission 2", status: "PAUSED" },
        ]),
      });
    });
  });

  test("should load the demo shell and select a mission", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });

    // Check if the sidebar is visible
    await expect(page.locator('span:has-text("EPOS")')).toBeVisible();

    // Check if the missions are loaded in the sidebar (using specific test IDs)
    await expect(page.getByTestId("nav-test-mission-1")).toBeVisible();
    await expect(page.getByTestId("nav-test-mission-2")).toBeVisible();

    // By default, the first mission should be selected
    await expect(page.getByTestId("mission-room-active")).toBeVisible();
    await expect(page.getByTestId("mission-title")).toHaveText(
      "Test Mission 1",
    );

    // Open Command Palette
    await page.keyboard.press("Control+k");
    await expect(page.getByTestId("command-palette-input")).toBeVisible();

    // Click "Create New Mission"
    await page.getByTestId("command-item-create-new-mission").click();
    await expect(page.getByTestId("command-palette-input")).not.toBeVisible();
  });

  test("should switch missions via sidebar", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });

    // Initial mission
    await expect(page.getByTestId("mission-title")).toHaveText(
      "Test Mission 1",
    );

    // Click second mission
    await page.getByTestId("nav-test-mission-2").click();

    // Should switch to second mission
    await expect(page.getByTestId("mission-title")).toHaveText(
      "Test Mission 2",
    );
  });

  test("should see governance panel", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });

    // Governance panel should be visible in MissionRoom
    await expect(page.getByText("Governance & Claims")).toBeVisible();
  });
});
