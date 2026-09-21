// Truy cập trang https://material.playwrightvn.com/, 
// click vào “Bài học 2: Product page”, 
// hãy thêm sản phẩm để giỏ hàng có số lượng sản phẩm như sau:
// Sản phẩm 1: 2 sản phẩm
// Sản phẩm 2: 3 sản phẩm
// Sản phẩm 3: 1 sản phẩm

import { test } from "@playwright/test";

test("Add to Cart", async ({ page }) => {
    // Collect locators of product page
    const productsLoc = {
        pageLink: page.getByRole("link", { name: "Bài học 2: Product page" }),
        firstItem: page.getByText("Product 1 $10.00 This is a great product.").getByRole("button", { name: "Add to Cart" }),
        secondItem: page.getByText("Product 2 $20.00 This is another great product.").getByRole("button", { name: "Add to Cart" }),
        thirdItem: page.getByText("Product 3 $30.00 This product is the best.").getByRole("button", { name: "Add to Cart" })
    };

    await test.step("Step 1: Truy cập trang https://material.playwrightvn.com/", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step('Step 2: Click vào "Bài học 2: Product page"', async () => {
        await productsLoc.pageLink.click();
    });

    await test.step("Step 3: Thêm sản phẩm vào giỏ hàng", async () => {
        // Sản phẩm 1: 2 sản phẩm
        await productsLoc.firstItem.dblclick();

        // Sản phẩm 2: 3 sản phẩm
        await productsLoc.secondItem.click({ clickCount: 3 });

        // Sản phẩm 3: 1 sản phẩm
        await productsLoc.thirdItem.click();
    });
});