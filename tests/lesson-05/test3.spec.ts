// Truy cập trang https://material.playwrightvn.com/, 
// click vào “Bài học 3: Todo page”. 
// Thêm mới 100 todo item có nội dung “Todo <i>”
// Xoá các todo có số lẻ

import { test } from "@playwright/test";

test("Add/Delete tasks", async ({ page }) => {
    await test.step("Step 1: Truy cập trang https://material.playwrightvn.com/", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step('Step 2: click vào "Bài học 3: Todo page”', async () => {
        await page.getByRole("link", { name: "Bài học 3: Todo page" }).click();
    });

    await test.step('Step 3: Thêm mới 100 todo item có nội dung “Todo <i>”', async () => {
        for (let i = 1; i <= 100; i++) {
            let taskContent = `Todo ${i}`;
            await page.getByRole("textbox", { name: "Enter a new task" }).fill(taskContent);
            await page.getByRole("button", { name: "Add Task" }).click();
        };
    });

    await test.step("Step 4: Xoá các todo có số lẻ", async () => {
        page.on('dialog', async dialog => dialog.accept());
        for (let i = 1; i <= 100; i += 2) {
            await page.getByRole("listitem").filter({ has: page.getByText(`Todo ${i}`, { exact: true }) }).getByRole("button", { name: "Delete" }).click();
        };
    });
});