import { test, expect } from '@playwright/test';

test.describe('Hover Menu Tests', () => {
  

  test.beforeEach(async ({ page }) => {
         await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Hover on Add-ons and Click', async ({ page }) => {
     await page.getByTestId('nav-add-ons').hover();
     await page.getByTestId('test-id-Wifi').click();
     await page.waitForTimeout(5000);
     let outputText = await page.locator('#output').innerText();
     await expect(outputText).toContain('Wi-Fi');
  });
});
