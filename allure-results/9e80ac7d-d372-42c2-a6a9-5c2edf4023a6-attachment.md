# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Handle_SVG\Task_SVG\FlipkartSearch.spec.ts >> Flipkart Search >> Search for macmini and validate results
- Location: tests\Handle_SVG\Task_SVG\FlipkartSearch.spec.ts:9:5

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.flipkart.com/search", waiting until "load"

```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | 
  3  | test.describe('Flipkart Search', () => {
  4  | 
  5  |     test.beforeEach(async ({ page }) => {
> 6  |         await page.goto('https://www.flipkart.com/search');
     |                    ^ Error: page.goto: Test timeout of 30000ms exceeded.
  7  |     });
  8  | 
  9  |     test('Search for macmini and validate results', async ({ page }) => {
  10 |         // Search for macmini
  11 |         await page.locator('input[name="q"]').fill("macmini");
  12 |         await page.locator('button[type="submit"]').click();
  13 |         
  14 |         // Wait for results to load
  15 |         await page.waitForSelector('div[data-id]', { timeout: 10000 });
  16 |         
  17 |         // Click on SVG icon (settings/filter icon if available)
  18 |         const svgIcon = page.locator('svg').first();
  19 |         if (await svgIcon.isVisible({ timeout: 5000 })) {
  20 |             await svgIcon.click();
  21 |         }
  22 |         
  23 |         // Get all product results on the first page
  24 |         const productCards = await page.locator('div[data-id]').all();
  25 |         console.log(`Total products found: ${productCards.length}`);
  26 |         
  27 |         // Click on "Price -- Low to High" sorting button
  28 |         const sortOptions = page.locator('//div[contains(text(),"Price -- Low to High")]').first();
  29 |         if (await sortOptions.isVisible({ timeout: 5000 })) {
  30 |             await sortOptions.click();
  31 |             // Wait for sorting to complete
  32 |             await page.waitForLoadState('networkidle');
  33 |         }
  34 |         
  35 |         // Get all results after sorting
  36 |         const sortedProducts = await page.locator('div[data-id]').all();
  37 |         console.log(`Total products after sorting: ${sortedProducts.length}`);
  38 |         
  39 |         // Find first product and print its name and price
  40 |         if (sortedProducts.length > 0) {
  41 |             const firstProduct = sortedProducts[0];
  42 |             const productName = await firstProduct.locator('a[title]').nth(0).textContent();    
  43 |             const productPrice = await firstProduct.locator('//following-sibling::a/div/div').first().textContent();
  44 |             
  45 |             console.log('\n========== CHEAPEST MACMINI ==========');
  46 |             console.log(`Product Name: ${productName}`);
  47 |             console.log(`Price: ${productPrice}`);
  48 |             console.log('======================================\n');
  49 |         }
  50 |         
  51 |     });
  52 | 
  53 | 
  54 | });
```