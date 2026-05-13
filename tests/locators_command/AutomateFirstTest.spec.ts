import {test , expect} from '@playwright/test';

test('', async ({page})=>{   
    await page.goto("https://app.vwo.com/#/login");

    let uname = page.locator('#login-username');
    let pwd = page.locator('#login-password');
    let loginBtn = page.locator('#js-login-btn');

    await uname.fill("admin");
    await pwd.fill("pass123");
    await loginBtn.click();

    console.log("action complteted");

    let error_msg = page.locator('#js-notification-box-msg');
    await expect(error_msg).toContainText('Your email, password, IP address or location did not match');
});