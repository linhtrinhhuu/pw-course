# Take away lesson 09
## 1. POM and TypeScript
### 1.1 POM
- **Concept**: Treat a web page as an Object (Class).

- **Elements**: Store page locators (text fields, buttons, links).

- **Actions**: Define user interactions (fill forms, click buttons, submit).

### 1.2 TypeScript
NodeJS only read JavaScript. So we need to use VCS to compile TypeScript to JavaScript.

TypeScript support maintain code better than JavaScript.

TypeScript is supperset of JavaScript.

TypeScript allow declare data type. Use syntax `type` or `interface`.
*Example*:
```
// Declare type "Students"
type Students = {
    name: string;
    age: number;
}

// Declare constant "stu1" with type is "Students"
const stu1: Students = {
    name: "Linh",
    age: 18
}

// Use "interface"
interface Students {
    name: string;
    age: number;
}

const stu1: Students = {
    name: "Linh",
    age: 18
}
```

`interface` should use for Object. `type` use for the rest types.ư

To quick run a TypeScript code `npx tsx <file_name.ts>`

## 2. Class & Extends
### 2.1 Class
Example for class with a file `practice.page.ts`
```TypeScript
import { Locator, Page } from "@playwright/test";

export class LoginAdminPage {
    // Propertises
    page: Page;
    pageURL: string;
    usernameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    errorMessage: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;
        this.pageURL = "https://pw-practice-dev.playwrightvn.com/wp-login.php";
        this.usernameInput = page.getByRole("textbox", { name: "Username or Email Address" });
        this.passwordInput = page.getByRole("textbox", { name: "Password" });
        this.loginButton = page.getByRole("button", { name: "Log In" });
        this.errorMessage = page.locator("#login_error");
    }

    // Methods
    async go() {
        await this.page.goto(this.pageURL);
    }

    async fillUsername(username: string) {
        await this.usernameInput.fill(username);
    }

    async fillPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }
}
```


Example for a test file. It will import class above.
```TypeScript
import { expect, test } from "@playwright/test";
import { LoginAdminPage } from "../tests/practice.page";

test.describe("Login unhappy cases", async () => {
    let loginAdminPage: LoginAdminPage;

    test.beforeEach(async ({ page }) => {
        loginAdminPage = new LoginAdminPage(page);
        await loginAdminPage.go();
    });

    test("Login unsuccessful with wrong username", async ({ page }) => {
        const username = "abc";
        const loginData = {
            username,
            password: "thy",
            errorMessage: `Error: The username ${username} is not registered on this site. If you are unsure of your username, try your email address instead.`
        };

        await test.step("Step 1: Fill an invalid username and  an valid password", async () => {
            await loginAdminPage.fillUsername(loginData.username);
            await loginAdminPage.fillPassword(loginData.password);
        });

        await test.step("Step 2: Click Signin button", async () => {
            await loginAdminPage.clickLoginButton();
        });

        await test.step("Step 3: Verify error message displayed", async () => {
            await expect(loginAdminPage.errorMessage).toContainText(loginData.errorMessage);
        });
    });
});
```

### 2.2 Extends
Extends help child class use properties, methods of parent class.

Example Parent Class `BasePage.ts`
```TypeScript
import { Page, Locator } from '@playwright/test';

export class BasePage {
    page: Page;
    searchInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.getByPlaceholder('Search...'); // Dùng chung
    }

    async navigateTo(url: string) {
        await this.page.goto(url); // Dùng chung
    }
}
```

Example Child Class `LoginPage.ts`
```TypeScript
import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage { // 1. extends Class cha
    loginBtn: Locator;

    constructor(page: Page) {
        super(page); // 2. BẮT BUỘC: Gọi constructor của Class cha
        this.loginBtn = page.getByRole('button', { name: 'Log in' }); // Thuộc tính riêng
    }
}
```

Example use in test file `login.spec.ts`
```TypeScript
const loginPage = new LoginPage(page);

await loginPage.navigateTo('/login'); //  Hàm kế thừa từ BasePage
await loginPage.searchInput.fill('ABC'); //  Locator kế thừa từ BasePage
await loginPage.loginBtn.click(); //  Locator riêng của LoginPage
```

## 3. POM Manager
This approach use a main POM to manage all other POMs.

## 4. POM return other POM
On a Page A, we click on an action to negative to a Page B. Then we can use approach POM return other POM.
 