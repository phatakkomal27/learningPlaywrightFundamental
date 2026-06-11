import {test,expect} from '@playwright/test'

const url= 'https://selectorshub.com/xpath-practice-page/';

test('form filling for shadow DOM elements',async({page})=>{

    await page.goto(url);
    await page.getByRole('textbox',{name : 'user name field'}).fill('test user');
    await page.getByPlaceholder('Enter pizza name').fill('cheese pizza');
    page.keyboard.press('Tab'); // to move to the next field
    await page.keyboard.type("Playwright");
    page.keyboard.press('Tab+Tab'); // to move to the next field
    await page.keyboard.type("Pwd123");
    await page.waitForTimeout(5000);

});