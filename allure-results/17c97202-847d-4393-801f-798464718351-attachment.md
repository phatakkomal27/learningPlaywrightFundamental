# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ShadowDOM Elements\shadowdom.spec.ts >> Handle Shadow DOM elements
- Location: tests\ShadowDOM Elements\shadowdom.spec.ts:4:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByTestId('card-account').locator('input[name="email"]')

```

# Test source

```ts
  1  | 
  2  | import {test, expect} from '@playwright/test';
  3  | let url ='https://app.thetestingacademy.com/playwright/widgets/shadow-dom';
  4  | test('Handle Shadow DOM elements', async ({page}) => {
  5  | 
  6  |       const card = page.getByTestId('card-account');
> 7  |         await card.locator('input[name="email"]').fill('student@thetestingacademy.com');
     |                                                   ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  8  |         await card.locator('input[name="password"]').fill('pw');
  9  |         await card.getByTestId('card-account-submit').click();
  10 |         await expect(page.getByTestId('card-account-status'))
  11 |             .toContainText('student@thetestingacademy.com');
  12 | 
  13 |         const cart = page.getByTestId('counter-cart');
  14 |         await cart.getByRole('button', { name: 'Increment' }).click();
  15 |         await cart.getByRole('button', { name: 'Increment' }).click();
  16 |         await expect(cart.getByTestId('counter-value')).toHaveText('5');
  17 | 
  18 |         await page.getByTestId('nested-host');
  19 |         await page.getByTestId('card-inside-email').fill('pramod@thetestingacdemy.com');
  20 |         await page.getByTestId('card-inside-password').fill('pramod@123');
  21 |         await page.getByTestId('card-inside-submit').click();
  22 | 
  23 |         await page.waitForTimeout(5000);
  24 | 
  25 | 
  26 | });
  27 | 
  28 | 
```