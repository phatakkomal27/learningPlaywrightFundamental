import {test,expect } from '@playwright/test'

test('Automate Cura website and varify make appointment lable is visible or not', async({page})=> {
    
    await page.goto('https://katalon-demo-cura.herokuapp.com/');

    let make_appointment_btn = page.locator('#btn-make-appointment');
    await make_appointment_btn.click();
   
    await expect(page).toHaveURL('https://katalon-demo-cura.herokuapp.com/profile.php#login')
    let usename = page.locator('#txt-username');
    let pwd = page.locator('#txt-password');
    let login_btn = page.locator('#btn-login');

    await usename.fill('John Doe');
    await pwd.fill('ThisIsNotAPassword');
    await login_btn.click();

    await expect(page).toHaveURL('https://katalon-demo-cura.herokuapp.com/#appointment');
    await expect(page.locator("xpath=//h2[text()='Make Appointment']")).toBeVisible();

    });
