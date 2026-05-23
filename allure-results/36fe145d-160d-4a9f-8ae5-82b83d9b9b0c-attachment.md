# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Projects\TTA_Bank\TTA_Bank_VerifyAmtTransfer.spec.ts >> TTA Bank - Verify Amount Transfer >> Verify transfer amount successfully
- Location: tests\Projects\TTA_Bank\TTA_Bank_VerifyAmtTransfer.spec.ts:5:3

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "45000"
Received string:    "$45,000.00"
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - generic:
      - status [ref=e9]: Transfer processed successfully.
      - status [ref=e15]: Account created successfully!
    - generic [ref=e16]:
      - complementary [ref=e17]:
        - generic [ref=e18]:
          - img [ref=e19]
          - generic [ref=e22]: TTA Bank
        - navigation [ref=e24]:
          - button "Dashboard" [active] [ref=e25] [cursor=pointer]:
            - img [ref=e26]
            - text: Dashboard
          - button "Transfer Funds" [ref=e31] [cursor=pointer]:
            - img [ref=e32]
            - text: Transfer Funds
          - button "Expense Tracker" [ref=e35] [cursor=pointer]:
            - img [ref=e36]
            - text: Expense Tracker
          - button "Transactions" [ref=e39] [cursor=pointer]:
            - img [ref=e40]
            - text: Transactions
          - button "AI Support" [ref=e44] [cursor=pointer]:
            - img [ref=e45]
            - text: AI Support
          - button "Settings" [ref=e47] [cursor=pointer]:
            - img [ref=e48]
            - text: Settings
        - generic [ref=e51]:
          - generic [ref=e52]:
            - img "User" [ref=e53]
            - generic [ref=e54]:
              - generic [ref=e55]: Test User
              - generic [ref=e56]: abc@example.com
          - button "Sign Out" [ref=e57] [cursor=pointer]:
            - img [ref=e58]
            - text: Sign Out
      - main [ref=e61]:
        - generic [ref=e62]:
          - heading "Dashboard" [level=1] [ref=e63]
          - button [ref=e65] [cursor=pointer]:
            - img [ref=e66]
        - generic [ref=e71]:
          - generic [ref=e72]:
            - generic [ref=e73]:
              - generic [ref=e74]:
                - generic [ref=e75]:
                  - paragraph [ref=e76]: Total Balance
                  - heading "$45,000.00" [level=3] [ref=e77]
                - img [ref=e79]
              - generic [ref=e82]:
                - generic [ref=e83]:
                  - img [ref=e84]
                  - text: +2.5%
                - generic [ref=e87]: from last month
            - generic [ref=e88]:
              - generic [ref=e89]:
                - generic [ref=e90]:
                  - paragraph [ref=e91]: Monthly Income
                  - heading "$50,000" [level=3] [ref=e92]
                - img [ref=e94]
              - paragraph [ref=e97]: Based on recent activity
            - generic [ref=e98]:
              - generic [ref=e99]:
                - generic [ref=e100]:
                  - paragraph [ref=e101]: Monthly Expenses
                  - heading "$5,315.48" [level=3] [ref=e102]
                - img [ref=e104]
              - paragraph [ref=e107]: Total debit transactions
          - generic [ref=e108]:
            - generic [ref=e109]:
              - heading "Balance History" [level=3] [ref=e110]
              - application [ref=e114]:
                - generic [ref=e125]:
                  - generic [ref=e126]:
                    - generic [ref=e128]: Mon
                    - generic [ref=e130]: Tue
                    - generic [ref=e132]: Wed
                    - generic [ref=e134]: Thu
                    - generic [ref=e136]: Fri
                    - generic [ref=e138]: Sat
                    - generic [ref=e140]: Sun
                  - generic [ref=e141]:
                    - generic [ref=e143]: $0k
                    - generic [ref=e145]: $15k
                    - generic [ref=e147]: $30k
                    - generic [ref=e149]: $45k
                    - generic [ref=e151]: $60k
            - generic [ref=e152]:
              - generic [ref=e153]:
                - heading "Recent Activity" [level=3] [ref=e154]
                - button "View All" [ref=e155] [cursor=pointer]
              - generic [ref=e156]:
                - generic [ref=e157]:
                  - generic [ref=e158]:
                    - img [ref=e160]
                    - generic [ref=e162]:
                      - paragraph [ref=e163]: Transfer to Sarah Smith
                      - paragraph [ref=e164]: 5/23/2026
                  - generic [ref=e165]: "-$5000.00"
                - generic [ref=e166]:
                  - generic [ref=e167]:
                    - img [ref=e169]
                    - generic [ref=e171]:
                      - paragraph [ref=e172]: Whole Foods Market
                      - paragraph [ref=e173]: 10/25/2023
                  - generic [ref=e174]: "-$129.99"
                - generic [ref=e175]:
                  - generic [ref=e176]:
                    - img [ref=e178]
                    - generic [ref=e181]:
                      - paragraph [ref=e182]: Opening Deposit
                      - paragraph [ref=e183]: 10/24/2023
                  - generic [ref=e184]: +$50000.00
                - generic [ref=e185]:
                  - generic [ref=e186]:
                    - img [ref=e188]
                    - generic [ref=e190]:
                      - paragraph [ref=e191]: Netflix Subscription
                      - paragraph [ref=e192]: 10/23/2023
                  - generic [ref=e193]: "-$15.99"
              - button "Quick Transfer" [ref=e194] [cursor=pointer]
  - generic [ref=e195]: $0k
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
  41 |     const balanceValue = await page.locator("xpath=//p[text()='Total Balance']/following-sibling::h3").textContent();
  42 |     console.log("Balance Value: ", balanceValue);
> 43 |     await expect(balanceValue).toContain(expectedFundValue.toString());
     |                                ^ Error: expect(received).toContain(expected) // indexOf
  44 | 
  45 | 
  46 | }
```