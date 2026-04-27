//one browser same context multiple pages
//https://app.vwo.com/#/login   
//example : one broswer, context1 : login as admin 
// page1 - open dashboard, page2- open settings, page3- open profile    
//context1 : login as user 
// page4 - open dashboard, page5- open settings

import {test,expect ,chromium} from '@playwright/test'

test('one browser same context multiple pages',async () =>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    const page3 = await context.newPage();
    const page4 = await context.newPage();
    const page5 = await context.newPage();
    await page1.goto('https://app.vwo.com/#/login');
    await expect(page1).toHaveTitle("login - VWO"); 
    await page2.goto('https://app.vwo.com/#/login');    
    await expect(page2).toHaveTitle("login - VWO");
    await page3.goto('https://app.vwo.com/#/login');    
    await expect(page3).toHaveTitle("login - VWO");

    await context.close();
    await browser.close();
});