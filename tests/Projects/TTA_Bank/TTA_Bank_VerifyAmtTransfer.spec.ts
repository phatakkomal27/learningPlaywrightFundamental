import {test,expect,Page} from '@playwright/test';
const Base_url = 'https://tta-bank-digital-973242068062.us-west1.run.app/';

test.describe('TTA Bank - Verify Amount Transfer', () => {
  test('Verify transfer amount successfully', async ({page}) => {
       const actualFundValue = 50000;
       const transferFundValue = 5000;
        await signUpForm(page);
        await TransferFund(page,transferFundValue);
        await VerifySuccessfulTransfer(page, actualFundValue, transferFundValue);

        });
    });


async function signUpForm(page: Page): Promise<void>
{
    await page.goto(Base_url);
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Sign Up' }).click();
    await page.getByPlaceholder('John Doe').fill('Test User');
    await page.getByPlaceholder('you@example.com').fill('abc@example.com');
    await page.locator("xpath=//input[@type='password']").fill('Test@1234');
    await page.getByRole('button', { name: 'Create Account' }).click();
}

async function TransferFund(page : Page,transferFundValue:number) : Promise<void>
{
    await page.getByRole('button', { name: 'Transfer Funds' }).click();
    await page.getByPlaceholder('0.00').fill(transferFundValue.toString());
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Confirm Transfer' }).click();
    
}

async function VerifySuccessfulTransfer(page : Page,actualFundValue:number,
    transferFundValue:number) : Promise<void>
{
    await page.getByRole('button',{ name:'Dashboard'}).click();
    const expectedFundValue = actualFundValue - transferFundValue;
    const balanceValue = await page.locator("xpath=//p[text()='Total Balance']/following-sibling::h3").textContent();
    const actualBalance = convertCurrencyToNumber(balanceValue || '0');
    await expect(actualBalance).toBe(expectedFundValue);
}


function convertCurrencyToNumber(currencyString: string): number {
    return parseFloat(currencyString.replace(/[$,]/g, ''));
}