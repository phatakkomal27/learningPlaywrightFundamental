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
Error: expect(page).toHaveTitle(expected) failed

Expected: "Dashboard"
Received: "Login - VWO"

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    3 × unexpected value "Login - VWO"

```

```yaml
- banner:
  - link "Go to dashboard":
    - /url: "#/dashboard"
    - img "vwo logo"
  - button "18 days remaining"
  - button "Upgrade"
  - 'button "Selected value: Singleuseemail"':
    - text: "Singleuseemail #1227004"
    - img
  - button "Copy account ID to clipboard":
    - img
  - button "Need Help?":
    - img
    - text: Need Help?
  - button "Open user menu":
    - img "csadadsa dasdas"
- main "Application main content":
  - list:
    - listitem:
      - button "Get Support":
        - img
        - text: Get Support
    - listitem:
      - link "Developer resources":
        - /url: "#/developers"
        - img
        - text: Developer resources
    - listitem:
      - link "Give us a call":
        - /url: tel:+14153493207
        - img
        - text: +1-415-349-3207
  - list:
    - listitem:
      - link "Show logged in users":
        - /url: javascript:void(0)
        - img
        - text: Show logged in users
    - listitem:
      - link "Uptime Status":
        - /url: https://secure-stats.pingdom.com/yd4ybaf8hhh2
        - img
        - text: Uptime Status
  - link "Visit wingify.com":
    - /url: https://wingify.com
    - img "Wingify logo"
  - img
  - text: Language option is now under your profile icon in the top bar.
- img:
  - text: "'"
  - img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import * as allure from 'allure-js-commons';
  3  | 
  4  | test('Login test with Allure reporting', async ({page}) => {
  5  |  await allure.epic("APP VWO Login");
  6  |     await allure.feature("Login Functionality");
  7  |     await allure.story("Valid Login Test");
  8  |     await allure.description("This test verifies that a user can log in with valid credentials.");
  9  | 
  10 |     await page.goto("https://app.vwo.com/#/login");
  11 |     await page.waitForTimeout(2000);
  12 | 
  13 |     await page.fill("#login-username", "opg73@singleuseemail.site");
  14 |     await page.fill("#login-password", "Wingify@4321");
  15 |     await page.waitForTimeout(1500);
  16 | 
  17 |     await page.click("#js-login-btn");
  18 | 
  19 |     // Wait for login to actually complete before snapshotting storage —
  20 |     // otherwise the auth cookie isn't set yet and the saved state is empty.
  21 |     await page.waitForURL(/#\/(dashboard|home)/, { timeout: 15000 });
  22 |    // await page.waitForTimeout(3000);
> 23 |     await expect(page).toHaveTitle("Dashboard");
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  24 | 
  25 | });
  26 | 
  27 | 
```