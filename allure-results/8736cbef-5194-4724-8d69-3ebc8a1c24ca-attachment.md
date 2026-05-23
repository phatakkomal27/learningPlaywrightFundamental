# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Allure_Reporting\login.spec.ts >> Login test with Allure reporting
- Location: tests\Allure_Reporting\login.spec.ts:4:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://app.vwo.com/#login", waiting until "load"

```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import * as allure from 'allure-js-commons';
  3  | 
  4  | test('Login test with Allure reporting', async ({page}) => {
  5  | 
  6  |     await allure.epic("APP VWO Login");
  7  |     await allure.feature("Login Functionality");
  8  |     await allure.story("Valid Login Test");
  9  |     await allure.description("This test verifies that a user can log in with valid credentials.");
  10 | 
> 11 |      await page.goto("https://app.vwo.com/#login");
     |                 ^ Error: page.goto: Test timeout of 30000ms exceeded.
  12 |     await page.waitForTimeout(2000);
  13 | 
  14 |     await page.fill("#login-username", "opg73@singleuseemail.site");
  15 |     await page.fill("#login-password", "Wingify@4321");
  16 |     await page.waitForTimeout(1500);
  17 | 
  18 |     await page.click("#js-login-btn");
  19 | 
  20 |     // Wait for login to actually complete before snapshotting storage —
  21 |     // otherwise the auth cookie isn't set yet and the saved state is empty.
  22 |     await page.waitForURL(/#\/(dashboard|home)/, { timeout: 15000 });
  23 |     await page.waitForTimeout(3000);
  24 |     await expect(page).toHaveTitle("Dashboard");
  25 | 
  26 | 
  27 | });
```