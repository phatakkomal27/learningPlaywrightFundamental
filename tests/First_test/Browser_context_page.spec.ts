import {chromium,Browser,BrowserContext,Page} from 'playwright'

async function run()
{
    const browser:Browser = await chromium.launch({headless:false});
    console.log('Browser Launched');
    const context:BrowserContext = await browser.newContext();
    const page:Page = await context.newPage();
    await page.goto('https://app.vwo.com/login');
    const title = await page.title();
    console.log('Page Title:', title);
    // Keep browser open for 5 seconds so you can see it
    await page.waitForTimeout(5000);
    await page.close();
    await context.close();
    await browser.close();
}

run();
