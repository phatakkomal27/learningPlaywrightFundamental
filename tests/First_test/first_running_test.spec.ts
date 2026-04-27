import {test,expect } from '@playwright/test'

test('first running test case',async ({page}) => {

    await page.goto('https://app.vwo.com/#dashboard/home');
    await expect(page).toHaveURL('https://app.vwo.com/#/dashboard/home');
    await expect(page).toHaveTitle('login - VWO');
    
    const img = page.locator('img');
    await expect(img).toBeVisible();
    
    page.close();
});
