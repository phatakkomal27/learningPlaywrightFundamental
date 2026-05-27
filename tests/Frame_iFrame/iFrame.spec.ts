import { test, expect, FrameLocator } from '@playwright/test';

test('iFrame Test - Verify Vehicle Registration', async ({ page }) => {

    
    await page.goto('https://app.thetestingacademy.com/playwright/frames/');

    let vechileFrame: FrameLocator = await page.frameLocator('#frame-one');
    await vechileFrame.locator('#RESULT_TextField-1').fill('Nexon');
    await vechileFrame.locator('#RESULT_TextField-2').fill('Komal P');
    await vechileFrame.locator('#RESULT_TextField-3').fill('1584');
    await vechileFrame.locator('#RESULT_RadioButton-1').selectOption('Hatchback');

    await vechileFrame.locator('#RESULT_TextField-4').fill('2026');

    await vechileFrame.locator('#RESULT_TextArea-1').fill('Family Car');

    await vechileFrame.getByText('Submit registration', { exact: true }).click();

    let output = await vechileFrame.locator("#vehicle-output").innerText();
    console.log(output);

    await page.waitForTimeout(5000);

});
