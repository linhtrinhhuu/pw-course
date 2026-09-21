// Truy cập trang https://material.playwrightvn.com/, 
// click vào “Bài học 4: Personal notes”.
// 1. Thêm mới 10 note với nội dung sau ở bảng dưới đây.
// 1.1 Field “Title”: điền nội dung ở cột “Tên action”
// 1.2 Field “Content”: điền nội dung ở cột “Mô tả”
// 2. Thực hiện search với keyword “một hoặc nhiều”

import { expect, test } from '@playwright/test';

test("Add/Search actions", async ({ page }) => {
    // Collect locators of Personal Notes
    const personalNotesLoc = {
        pageLink: page.getByRole("link", { name: "Bài học 4: Personal notes" }),
        title: page.getByRole("textbox", { name: "Title:" }),
        content: page.getByRole("textbox", { name: "Content:" }),
        addNoteBtn: page.getByRole("button", { name: "Add Note" }),
        searchNotes: page.getByRole("textbox", { name: "Search Notes:" })
    };

    // Declare table data
    const actions = [
        { stt: 1, name: "click", describer: "Hàm click dùng để thực hiện click vào các phần tử trên trang web" },
        { stt: 2, name: "fill", describer: "Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web" },
        { stt: 3, name: "type", describer: "Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng" },
        { stt: 4, name: "hover", describer: "Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover" },
        { stt: 5, name: "check", describer: "Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked" },
        { stt: 6, name: "uncheck", describer: "Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked" },
        { stt: 7, name: "selectOption", describer: "Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown" },
        { stt: 8, name: "press", describer: "Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác" },
        { stt: 9, name: "dblclick", describer: "Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web" },
        { stt: 10, name: "dragAndDrop", describer: "Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web" }
    ];


    await test.step("Step 1: Truy cập trang https://material.playwrightvn.com/", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step('Step 2: Click vào “Bài học 4: Personal notes”', async () => {
        await personalNotesLoc.pageLink.click();
    });

    await test.step("Step 3: Thêm mới 10 notes", async () => {
        for (const action of actions) {
            // Field “Title”: điền nội dung ở cột “Tên action”
            await personalNotesLoc.title.fill(action.name);

            // Field “Content”: điền nội dung ở cột “Mô tả”
            await personalNotesLoc.content.fill(action.describer);

            // Click "Add Note" button
            await personalNotesLoc.addNoteBtn.click();
        }
    });

    await test.step("Step 4: Thực hiện search với keyword “một hoặc nhiều", async () => {
        // Case 1: Thực hiện search với một keyword; Expect return matching a result after search a keyword
        await personalNotesLoc.searchNotes.fill(actions[6].name);
        await expect(page.getByRole("listitem")).toContainText(`${actions[6].name} ${actions[6].describer}`);
        await expect(page.getByText("Total Notes:")).toHaveText("Total Notes: 1");

        // Case 2: Thực hiện search với nhiều keywords; Expect return matching a result after search many keywords
        await personalNotesLoc.searchNotes.fill(actions[9].describer);
        await expect(page.getByRole("listitem")).toContainText(`${actions[9].name} ${actions[9].describer}`);
        await expect(page.getByText("Total Notes:")).toHaveText("Total Notes: 1");

        // Case 3: Thực hiện search với một keyword; Expect return matching many results
        await personalNotesLoc.searchNotes.fill("check");
        await expect(page.getByRole("listitem")).toContainText(["check", "uncheck"]);
        await expect(page.getByText("Total Notes:")).toHaveText("Total Notes: 2");
    });
});