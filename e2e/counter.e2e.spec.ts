import { test, expect } from "@playwright/test";

test.describe("카운터 테스트", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/counter");
  });

  test("초기에 카운터가 0으로 표시되는가?", async ({ page }) => {
    await expect(page.getByText("카운터: 0")).toBeVisible();
  });

  test("+1 버튼 클릭 시 카운터가 1이 되는가?", async ({ page }) => {
    const button = page.getByRole("button", { name: "+1" });
    await button.click();

    await expect(page.getByText("카운터: 1")).toBeVisible();
  });

  test("-1 버튼 클릭 시 카운터가 -1이 되는가?", async ({ page }) => {
    const button = page.getByRole("button", { name: "-1" });
    await button.click();

    await expect(page.getByText("카운터: -1")).toBeVisible();
  });

  test("reset 버튼 클릭 시 카운터가 0으로 초기화되는가?", async ({ page }) => {
    const increaseButton = page.getByRole("button", { name: "+1" });
    await increaseButton.click();
    await increaseButton.click();

    await expect(page.getByText("카운터: 2")).toBeVisible();

    const resetButton = page.getByRole("button", { name: "reset" });
    await resetButton.click();

    await expect(page.getByText("카운터: 0")).toBeVisible();
  });
});
