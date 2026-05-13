import {test,expect} from '@playwright/test'

test.describe('Context reuse',()=>{


   test('test1',async({browser})=>{
        const context = await browser.newContext();
        const page = await context.newPage();
    await page.goto('https://app.vwo.com/login');
    console.log("Test 1: Context reuse test");
   });
   
   test('test2',async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://app.vwo.com/login');
    console.log("Test 2: Context reuse test");
   });

   test.use({ 
    viewport: { width: 1280, height: 720 },
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    locale: "fr-FR",    
    timezoneId: "Europe/Paris",
    geolocation: { latitude: 40.7128, longitude: -74.0060 },
    permissions: ["geolocation"],
    colorScheme: "dark",
    acceptDownloads: true,  

   });

});