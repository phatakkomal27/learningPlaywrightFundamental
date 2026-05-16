import {test, expect} from '@playwright/test';

test('validate email field on free trial form', async ({page}) => {
    await page.goto('https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage');
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Business Email' }).pressSequentially('rasal.komal@gmail.com' , {delay : 200});
    await expect(page.getByText("gmail.com doesn't look like a business domain. Please use your business email.")).toBeVisible();
});