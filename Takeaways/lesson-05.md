# Takeaway lesson 05
## 5.1 DOM
DOM is a HTML structure of website.
DOM contain many nodes. Node structure: `<div id="text-id">Text content</div>`
- `<div></div>` is Open/close tag
- `id="text-id"` are attribute and attribute value of tag.
- A tag can have one or many atttributes.
A tag can have many nested tag
    ```
    <div>
        <span>Nest</span>
        <div>
            <span>Nest2</span>
        </div>
    </div>
    ```
- Auto close tag: `<br />`...
- Defaults tags
    ```
    <html>
        <head></head>
        <body></body>
    </html>
    ```
 **Reference links**: 
 
 https://material.playwrightvn.com/035-DOM-elements.html
 
 https://material.playwrightvn.com/01-xpath-register-page.html

## 5.2 Basic syntax of Playwright
### 5.2.1 `test()`
```
import { test, expect } from '@playwright/test';

test('test name', async ({ page }) => {
    //Test Steps 
});

```
### 5.2.2 `test.step()`
```
import { test, expect } from '@playwright/test';

test('test name', async ({ page }) => {
    await test.step("Step1: Truy cập trang chủ", async () => {
        // Actions
    });
    await test.step("Step2: Click Menu", async () => {
        // Actions
    });
});

```
### 5.2.3 Actions
#### 5.2.3.1 Navigate `goto()`
```
// goto() allow access to a URL
await page.goto("https://e-commerce-dev.betterbytesvn.com/"); 

// Use option "referer" trong hàm goto() to emulate user arriving from a specific previous website instead of visiting the URL directly
await page.goto("https://e-commerce-dev.betterbytesvn.com/", { 
    referer: "https://google.com"  
}); 

// Use option "timeout" to wait 1s before acccess to URL
await page.goto("https://e-commerce-dev.betterbytesvn.com/", { 
    timeout: 1_000 
}); 

// Use option "waitUntill" to wait page just completed an event such as "commit", "domcontentloaded", "load", "networkidle" (Recommend use load)
await page.goto("https://e-commerce-dev.betterbytesvn.com/", { 
    waitUntill: "load" 
}); 
```

#### 5.2.3.2 Get Locators
```
await page.getByRole("link", { name: "Danh sách khoá học" });
```
Priority follow below:

- getByRole()
- getByText()
- getByLabel()
- getByPlaceholder()
- getByAltText()
- getByTitle()
- getByTestId()

#### 5.2.3.3 Choose an element `first()`, `last()`, `nth(index)`
```
await page.getByRole("link", { name: "Danh sách khoá học" }).nth(0); // Get the element have index is 0
await page.getByRole("link", { name: "Danh sách khoá học" }).first(); // Get the first element
await page.getByRole("link", { name: "Danh sách khoá học" }).last(); // Get the last element
```
**Note**: Should not use this solution. Recommend use anchor element technical.  
#### 5.2.3.4 Click `click()`
```
cosnt clickArea = page.getByRole("link", { name: "Danh sách khoá học" });
await clickArea.click(); // default is left click in one time
await clickArea.click({ button: "right" }); // right click in one time
await clickArea.click({ button: "middle" }); // middle click in one time
await clickArea.click({ clickCount: 100 }); // left click in 100 times
await clickArea.click({ delay: 3000 }); // wait 3s and then left click one time
await clickArea.click({ force: true }); // click immediately, no apply auto wait of Playwright 
await clickArea.click({ modifiers: ['Alt'] }); // press Alt + left click in one time
await clickArea.click({ position: { x: 100, y: 100 } }); // left click in one time on (100, 100)
await clickArea.click({ trial: true }); // no click. Just trial
```

#### 5.2.3.5 Input `fill()`, `press()`, `pressSequentially()`
```
cosnt inputArea = page.getByRole("textbox", { name: "s" });
await inputArea.fill("product 01", { // fill text "product 01" into textbox
    force: true, // No apply auto waiting of Playwwright, fill text immediatelly
    delay: 3000, // wait 3s and then fill text
    timeout: 10000, // if after 10s, playwright can not fill text then return false
}); 

await inputArea.press("a"); // press button "a" on our keyboard. Ex: "Alt" is Alt button on keyboard

await inputArea.pressSequentially("product 01"); // press one by one character 

await inputArea.fill("2026-12-23"); // Fill date follow format YYYY-MM-DD

await inputArea.fill("2026-12-23T15:20"); // Fill datetime follow format YYYY-MM-DDThh:mm

await inputArea.fill("15:20"); // Fill time follow format hh:mm

await inputArea.fill("2026-12"); // Fill month follow format YYYY-MM

await inputArea.fill("2026-W06"); // Fill week follow format YYYY-Www
```

#### 5.2.3.6 Radio/Checkbox `check()`, `uncheck()`
- Checkbox
    ```
    const checkboxArea = page.getByRole("checkbox", { id: "subcriber"};
    await checkboxArea.check(); // tick on checkbox
    let isChecked = checkboxArea.IsChecked(); // return true if ticked, false if inticked

    await checkboxArea.uncheck(); // untick on checkbox
    ```
- Radio button
    ```
    await maleRadioBtn.check(); // check on value "Male" of radio buttons
    await expect(maleRadioBtn).toBeChecked(); // expect radio button is checked
    await expect(maleRadioBtn).not.toBeChecked(); // expect radio button is not checked
    ```

#### 5.2.3.7 Selection `selectOption()`
```
await countrySelect.sellectOption("vn"); // select option that have value is "vn"
await expect(countrySelect).toHaveValue("vn"); // expect option contain value is "vn"

await countrySelect.sellectOption({ label: "Vietnam" }); // select option that have label is "Vietnam"

await countrySelect.sellectOption(["vn", "us", "uk"]); // select multiple options that have values are "vn", "us", "uk"

await countryDataList.fill("Vietnam"); // fill text to select data as normally
```

#### 5.2.3.8 Upload file `setInputFiles()`
```
await fileInput.setInputFiles("data/demo.js"); // attach demo.js file into input field
```
#### 5.2.3.9 Hover `hover()`
```
await hoverLocator.hover(); // hover on position of locator 
```

#### 5.2.3.10 Dialog
```
page.on('dialog', async dialog => dialog.accept());
await clickButton.click(); // Although on UI, after click button then appear dialog. We have to put the dialog code row before click button action.
```
