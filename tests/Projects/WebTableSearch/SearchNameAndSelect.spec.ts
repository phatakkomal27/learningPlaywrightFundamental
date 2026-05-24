import { test, expect } from '@playwright/test';

test.describe('Web Table Search and Select', () => {

    test('Search for a specific name and select it', async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/webtable');
        await page.locator('#employee-search').fill('kabir');
        await page.locator("xpath=//tbody/tr[@data-username='Kabir.Khan']/td/input").click();
        await expect(page.locator('#selected-output')).toHaveText('Kabir.Khan');
    });
});