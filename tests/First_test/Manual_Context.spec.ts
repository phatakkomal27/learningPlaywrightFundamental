import {test,expect} from '@playwright/test'

test('Admin and guest test with one browser diff contexts and pages',async({browser})=>{

    const adminContext = await browser.newContext();
    const adminPage = await adminContext.newPage();
    await adminPage.goto("https://app.vwo.com/login");
    console.log("Admin: on login page");

    const guestContext = await browser.newContext();
    const guestPage = await guestContext.newPage();
    await guestPage.goto("https://app.vwo.com/login");
    console.log("Guest: on login page");    

    await adminContext.close();
    await guestContext.close();     
    
});