import {chromium, type Browser, type BrowserContext, type Page} from 'playwright'

async function oneBrowser_multiContext_multiPages(){
    const browser:Browser = await chromium.launch({headless:false});
    console.log('Browser Launched');
    const context1:BrowserContext = await browser.newContext();
    const context2:BrowserContext = await browser.newContext(); 
    const page1:Page = await context1.newPage();
    const page2:Page = await context1.newPage();
    const page3:Page = await context1.newPage();
    const page4:Page = await context2.newPage();
    const page5:Page = await context2.newPage();
    await page1.goto('https://app.vwo.com/login');
    const title1 = await page1.title();
    console.log('Page 1 Title:', title1);   
    await page2.goto('https://app.vwo.com/login');
    const title2 = await page2.title();
    console.log('Page 2 Title:', title2);
    await page3.goto('https://app.vwo.com/login');
    const title3 = await page3.title();
    console.log('Page 3 Title:', title3);
    await page4.goto('https://app.vwo.com/login');
    const title4 = await page4.title();
    console.log('Page 4 Title:', title4);
    await page5.goto('https://app.vwo.com/login');
    const title5 = await page5.title();
    console.log('Page 5 Title:', title5);
    // Keep browser open for 5 seconds so you can see it
    await page1.waitForTimeout(5000);
    await page1.close();
    await page2.close();
    await page3.close();
    await page4.close();
    await page5.close();
    await context1.close();
    await context2.close(); 
    await browser.close();
}       

oneBrowser_multiContext_multiPages();