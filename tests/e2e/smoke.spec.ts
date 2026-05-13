import { test, expect } from "@playwright/test";

test.describe("EPIOS Smoke Tests", () => {
  test.beforeEach(async ({ page }) => {
    // Mock the API response for workspaces
    await page.route("**/workspaces", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify([
          { id: "w1", title: "Test Workspace 1", status: "ACTIVE" },
          { id: "w2", title: "Test Workspace 2", status: "PAUSED" },
        ]),
      });
    });
  });

  test("should load the demo shell and select a workspace", async ({
    page,
  }) => {
    await page.goto("/", { waitUntil: "networkidle" });

    // Check if the sidebar is visible
    await expect(page.getByText("EPIOS", { exact: true })).toBeVisible();

    // Check if the workspaces are loaded in the sidebar
    await expect(page.getByTestId("nav-test-workspace-1")).toBeVisible();
    await expect(page.getByTestId("nav-test-workspace-2")).toBeVisible();

    // By default, the first workspace should be selected
    await expect(page.getByTestId("workspace-room-active")).toBeVisible();

    // Check if the bottom bar shows the workspace title
    await expect(page.getByTestId("workspace-title-footer")).toHaveText(
      "Test Workspace 1",
    );

    // Open Command Palette
    await page.keyboard.press("Control+k");
    await expect(page.getByTestId("command-palette-input")).toBeVisible();
  });

  test("should switch workspaces via sidebar", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });

    // Click second workspace
    await page.getByTestId("nav-test-workspace-2").click();

    // The footer should now show the second workspace title
    await expect(page.getByTestId("workspace-title-footer")).toHaveText(
      "Test Workspace 2",
    );
  });

  test("should switch to ADR Review view", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });

    // Click ADR Review in sidebar
    await page.getByTestId("nav-adr-review").click();

    // ADR Index should be visible
    await expect(page.getByText("ADR Index")).toBeVisible();

    // Check if mock ADRs are present
    await expect(page.getByTestId("adr-item-ADR-0001")).toBeVisible();
  });
});
