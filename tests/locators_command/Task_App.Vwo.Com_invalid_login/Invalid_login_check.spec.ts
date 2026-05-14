import {test,expect} from '@playwright/test'

test('Invalid login chck with getByRole locator', async({page})=>{

    await page.goto('https://app.vwo.com/#/login');
    let uname = page.getByRole('textbox', {name : 'Email address'});
    let pwd = page.getByRole('textbox', {name : 'password'});
    let loginBtn = page.getByRole('button', {name : 'Sign in',exact: true } );

    await uname.fill("admin");
    await pwd.fill("pass123");
    await loginBtn.click();

    const error_msg = page.locator('#js-notification-box-msg');
    await expect(error_msg).toContainText('Your email, password, IP address or location did not match');

});