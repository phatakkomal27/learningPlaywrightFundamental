import {test,expect } from '@playwright/test'

test('first running test case',async ({page}) => {

    await page.goto('https://app.vwo.com/#/login');
    await expect(page).toHaveURL('https://app.vwo.com/#/login');
    await expect(page).toHaveTitle('Login - VWO');
    
    const img = page.locator('#vow-login-logo');
    await expect(img).toBeVisible();
    
    page.close();
});
