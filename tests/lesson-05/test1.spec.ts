// Tạo file test1.spec.ts. 
// Truy cập trang https://material.playwrightvn.com/, 
// click vào “Bài học 1: Register Page (có đủ các element)”
// Nhập thông tin cho các field: Username, Email, Gender, Hobbies, Interests, Country, Date of Birth, Profile Picture, Biography
// Click button Register

import { test } from "@playwright/test";

test(" Submit Register Form", async ({ page }) => {
    // Collect locators of register form
    const registerLoc = {
        pageLink: page.getByRole("link", { name: "Bài học 1: Register Page" }),
        username: page.getByRole("textbox", { name: "username" }),
        email: page.getByRole("textbox", { name: "email" }),
        gender: {
            male: page.getByRole("radio", { name: "Male", exact: true }),
            female: page.getByRole("radio", { name: "Female", exact: true })
        },
        hobbies: {
            reading: page.getByRole("checkbox", { name: "reading" }),
            traveling: page.getByRole("checkbox", { name: "traveling" }),
            cooking: page.getByRole("checkbox", { name: "cooking" })
        },
        interests: page.getByRole("listbox", { name: "interests" }),
        country: page.getByRole("combobox", { name: "country" }),
        dob: page.getByRole("textbox", { name: "date of birth" }),
        profilePicture: page.getByRole("button", { name: "profile picture" }),
        biography: page.getByRole("textbox", { name: "biography" }),
        registerBtn: page.getByRole("button", { name: "register" })
    };

    // Collect data of register form
    const registerData = {
        username: "Linh Trinh Huu",
        email: "linhth@mail.com",
        interests: ["sports", "science"],
        country: "uk",
        dob: "1999-12-23",
        profilePicture: "data/hellcat_shirt.png",
        biography: "**Hà Nội**\nMùa thu\nMùi hoa sữa"
    };
    
    await test.step("Step 1: Truy cập trang https://material.playwrightvn.com/", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Step 2: Click vào 'Bài học 1: Register Page (có đủ các element)'", async () => {
        await registerLoc.pageLink.click();
    });

    await test.step("Step 3: Nhập thông tin cho các field: Username, Email, Gender, Hobbies, Interests, Country, Date of Birth, Profile Picture, Biography", async () => {
        // Fill data for Username
        await registerLoc.username.fill(registerData.username);

        // Fill data for Email
        await registerLoc.email.fill(registerData.email);

        // Fill data for Gender
        await registerLoc.gender.male.check();

        // Fill data for Hobbies
        await registerLoc.hobbies.cooking.check();
        await registerLoc.hobbies.traveling.check();

        // Fill data for Interests
        await registerLoc.interests.selectOption(registerData.interests);

        // Fill data for Country
        await registerLoc.country.selectOption(registerData.country);

        // Fill data for Date of Birth
        await registerLoc.dob.fill(registerData.dob);

        // Fill data for Profile Picture
        await registerLoc.profilePicture.setInputFiles(registerData.profilePicture);

        // Fill data for Biography
        await registerLoc.biography.fill(registerData.biography);
    });

    await test.step("Step 4: Click button Register", async () => {
        await registerLoc.registerBtn.click();
    });
});