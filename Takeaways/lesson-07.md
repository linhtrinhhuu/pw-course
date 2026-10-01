# Take away lesson 07
## 1. Test suite/group
It used to group testcases that have same function/module/..
So the testcases will be written in `test.describe()` 

*Examples*:
```
import { test } from "@playwright/test";

test.describe("Submit happy cases", async () => {
    test("Test 1: Submit with only username and password", async ({ page }) => {
        // actions
    });

    test("Test 2: Submit with username and password and the rest fields", async ({ page }) => {
        // actions
    });
});
```

## 2. Hooks
- `beforeEach()`: run before each test
- `afterEach()`: run after each test
- `beforeAll()`: run before all tests
- `afterAll()`: run after all tests

*Example*:
```
import { test } from "@playwright/test";

test.describe("Test_suite_name", async () => {
    test.beforeAll("Actions before all", async () => {
        console.log("Actions before all");
    });

    test.beforeEach("Actions before each", async () => {
        console.log("Actions before each");
    });

    test.afterEach("Actions after each", async () => {
        console.log("Actions after each");
    });

    test.afterAll("Actions after all", async () => {
        console.log("Actions after all");
    });

    test("Test case 1", async () => {
        console.log("Test case 1");
    });

    test("Test case 2", async () => {
        console.log("Test case 1");
    });
});

// Output:
<!-- 
Running 2 tests using 1 worker
[chromium] › tests\practice.spec.ts:20:9 › Test_suite_name › Test case 1
Actions before all
Actions before each
Test case 1
Actions after each
[chromium] › tests\practice.spec.ts:24:9 › Test_suite_name › Test case 2
Actions before each
Test case 1
Actions after each
Actions after all -->
```

## 3. Assertions
### 3.1 Generic Assertions (*Not recommened because they are not have auto-waiting*)
`expect(value) = (value)`
- `expect(value).toBe(expected);` Compare a value from page with an expectation value.
- `expect(array).toHaveLength(3);` Compare length of an array with a number.
- `expect(string).toContant("text");` Check a string from page contant an expectation text.

### 3.2 Web-first Assertions
`expect(locator) have value`

Playwright will auto wait until timeout on the expectation time.
- `await expect(locator).toBeVisible();` Check that locator is visible.
- `await expect(locator).toBeHidden();` Check that locator is hidden.
- `await expect(locator).toBeEnabled();` Check that locator is enabled.
- `await expect(locator).toBeDisabled();` Check that locator is disabled.
- `await expect(locator).toBeChecked();` Check that locator is checked.
- `await expect(locator).toBeFocused();` Check that locator is focused.
- `await expect(locator).toContainText("Hello");` Check that locator contain text "Hello".
- `await expect(locator).toHaveText("Hello");` Check that locator match text "Hello".
- `await expect(locator).toHaveText(/welcome/i);` Check that locator match regex
- `await expect(locator).toHaveText(['Item 1', 'Item 2']);` Check that locator match both 2 texts.
- `await expect(locator).toHaveAttribute('href', '/about');` Check that locator have attribute is `href` and path is `/about`
- `await expect(locator).toHaveClass('active');` Check that locator have class `active`.
- `await expect(locator).toHaveValue('abc@mail.com');` Check that locator have value `abc@mail.com`.
- `await expect(locator).toHaveCount(5);` Check that locator have 5 number.
- `await expect(page).toHaveURL(/.*checkout/);` Check that page have contain path is checkout.
- `await expect(page).toHaveTitle(/Playwright/);` Check that page have title is Playwright.