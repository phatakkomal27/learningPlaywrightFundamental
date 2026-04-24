import {test,expect } from '@playwright/test'

test('should have title',async ({page})=>{
    await page.goto('https://playwright.dev/')
    await expect(page).toHaveTitle(/Playwright/)
});

test('should have get started link in basics.spec.ts',async ({page})=>{
    await page.goto('https://playwright.dev/')
    await page.getByRole('link',{name:'Get started'}).click()
    await expect(page.getByRole('heading',{name:'Installation'})).toBeVisible()
});