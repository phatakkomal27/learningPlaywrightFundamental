import {test,expect, Page} from '@playwright/test';
const Base_URL = 'https://app.thetestingacademy.com/playwright/tables/practice';

test.describe('QA Profile Form Filling', () => {
    test('Fill the form and verify the data', async ({ page }) => {
        await page.goto(Base_URL);

        const userInfo : UserData = {
            firstName: 'Komal',
            lastName: 'Phatak',
            gender: 'Female',
            yearsOfExperience: 6,
            date: '26-08-2022',
            profession: ['Automation Tester'],
            tools: ['Selenium WebDriver', ' UFT'],
            continent: ['Asia', 'Europe'],
            commands: ['Browser Commands', 'Navigation Commands']
        };

        await fillForm(page, userInfo);

        // Get the JSON output and parse it
        const outputText = await page.locator('.submission-output').textContent();
        const actualOutput = JSON.parse(outputText || '{}');

        // Verify the form submission data
        expect(actualOutput.firstName).toBe(userInfo.firstName);
        expect(actualOutput.lastName).toBe(userInfo.lastName);
        expect(actualOutput.gender).toBe(userInfo.gender);
        expect(actualOutput.yearsExperience).toBe(userInfo.yearsOfExperience.toString());
        expect(actualOutput.profession).toBe(userInfo.profession[0]);
        expect(actualOutput.continents).toEqual(expect.arrayContaining(userInfo.continent));
    });
});

interface UserData {
    firstName: string;
    lastName: string;
    gender: 'Male' | 'Female';
    yearsOfExperience: number;
    date: string;
    profession: string[];
    tools: string[];
    continent: string[];
    commands: string[];

}

async function fillForm(page :Page, userData: UserData): Promise<void> {
    await page.getByRole('textbox', { name: 'First Name' }).fill(userData.firstName);
    await page.getByRole('textbox', { name: 'Last Name' }).fill(userData.lastName);
    await page.getByRole('radio', ({name :userData.gender})).click(); 
    await page.selectOption('#years-experience', userData.yearsOfExperience.toString());
    await page.locator('#profile-date').pressSequentially(userData.date);
    for (const profession of userData.profession) {
        await page.getByRole('radio', { name: profession }).check();
    }
    for (const tool of userData.tools) {
        await page.getByRole('checkbox', { name: tool }).check();
    }   
    for(const continent of userData.continent) {
        await page.getByRole('checkbox', { name: continent }).check();
    }
 
    await page.getByRole('tab',{name: 'Switch Commands'}).click();
    await page.locator('#upload-image').setInputFiles('tests/Projects/QA_Profile_Form_Filling/QAProfile.txt');
    await page.getByRole('button',{name : 'Save profile'}).click();
   

}