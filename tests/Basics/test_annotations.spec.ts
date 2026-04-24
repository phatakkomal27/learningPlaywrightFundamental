import {test, expect} from '@playwright/test'

test('should have title in annotations.spec.ts',async ({page})=>{
    test.slow();
    await page.goto('https://playwright.dev/')
    await expect(page).toHaveTitle(/Playwright/)
});

// Slow test (3x timeout)
test('slow test', async ({ page }) => {
    test.slow();
    // Has extended timeout
});

test('should have get started link',async ({page})=>{
    await page.goto('https://playwright.dev/')
    await page.getByRole('link',{name:'Get started'}).click()
    await expect(page.getByRole('heading',{name:'Installation'})).toBeVisible()
});

test.skip('should have get started link 1',async ({page})=>{
    await page.goto('https://playwright.dev/')
    await page.getByRole('link',{name:'Get started'}).click()
    await expect(page.getByRole('heading',{name:'Installation'})).toBeVisible()
});

test.only('should have get started link 2',async ({page})=>{
    await page.goto('https://playwright.dev/')
    await page.getByRole('link',{name:'Get started'}).click()
    await expect(page.getByRole('heading',{name:'Installation'})).toBeVisible()
});

test.fail('should have get started link 3',async ({page})=>{
    await page.goto('https://playwright.dev/')
    await page.getByRole('link',{name:'Get started'}).click()
    await expect(page.getByRole('heading',{name:'Installation'})).toBeVisible()
});
test('Conditional test', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium', 'This test is skipped on Chromium');
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});

