# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Projects\TTA_Bank\TTA_Bank_VerifyAmtTransfer.spec.ts >> TTA Bank - Verify Amount Transfer >> Verify transfer amount successfully
- Location: tests\Projects\TTA_Bank\TTA_Bank_VerifyAmtTransfer.spec.ts:5:3

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('text=Total Balance')
Expected: "45000"
Received: "Total Balance"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('text=Total Balance')
    14 × locator resolved to <p class="text-blue-100 text-sm font-medium">Total Balance</p>
       - unexpected value "Total Balance"

```

```yaml
- paragraph: Total Balance
```

# Test source

```ts
  1  | import {test,expect,Page} from '@playwright/test';
  2  | const Base_url = 'https://tta-bank-digital-973242068062.us-west1.run.app/';
  3  | 
  4  | test.describe('TTA Bank - Verify Amount Transfer', () => {
  5  |   test('Verify transfer amount successfully', async ({page}) => {
  6  |        const actualFundValue = 50000;
  7  |        const transferFundValue = 5000;
  8  |         await signUpForm(page);
  9  |         await TransferFund(page,transferFundValue);
  10 |         await VerifySuccessfulTransfer(page, actualFundValue, transferFundValue);
  11 | 
  12 |         });
  13 |     });
  14 | 
  15 | 
  16 | async function signUpForm(page: Page): Promise<void>
  17 | {
  18 |     await page.goto(Base_url);
  19 |     await page.waitForTimeout(2000);
  20 |     await page.getByRole('button', { name: 'Sign Up' }).click();
  21 |     await page.getByPlaceholder('John Doe').fill('Test User');
  22 |     await page.getByPlaceholder('you@example.com').fill('abc@example.com');
  23 |     await page.locator("xpath=//input[@type='password']").fill('Test@1234');
  24 |     await page.getByRole('button', { name: 'Create Account' }).click();
  25 | }
  26 | 
  27 | async function TransferFund(page : Page,transferFundValue:number) : Promise<void>
  28 | {
  29 |     await page.getByRole('button', { name: 'Transfer Funds' }).click();
  30 |     await page.getByPlaceholder('0.00').fill(transferFundValue.toString());
  31 |     await page.getByRole('button', { name: 'Continue' }).click();
  32 |     await page.getByRole('button', { name: 'Confirm Transfer' }).click();
  33 |     
  34 | }
  35 | 
  36 | async function VerifySuccessfulTransfer(page : Page,actualFundValue:number,
  37 |     transferFundValue:number) : Promise<void>
  38 | {
  39 |     await page.getByRole('button',{ name:'Dashboard'}).click();
  40 |     const expectedFundValue = actualFundValue - transferFundValue;
> 41 |     await expect(page.locator('text=Total Balance')).toHaveText(expectedFundValue.toString());
     |                                                      ^ Error: expect(locator).toHaveText(expected) failed
  42 | 
  43 | 
  44 | }
```