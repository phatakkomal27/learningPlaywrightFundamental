// one browser multiple context
//https://app.vwo.com/#/login

//example : one broswer, context1 : login as admin 
//context2 : login as user

import {test,expect , chromium } from '@playwright/test'

test('one browser multiple context ',async () =>{
  const browser = await chromium.launch();
  const context1 = await browser.newContext();
  const context2 = await browser.newContext();

  const page1 = await context1.newPage();
  const page2 = await context2.newPage();

  await page1.goto('https://app.vwo.com/#/login');
  await expect(page1).toHaveTitle("login - VWO");

    await page2.goto('https://app.vwo.com/#/login');
    await expect(page2).toHaveTitle("login - VWO");

    await browser.close();      

     
});