import {test,expect} from '@playwright/test'
import { permission } from 'node:process';

test('context option test',async ({browser})=>{

    const contextOptions = await browser.newContext({
        viewport:{width:1280,height:720},
        userAgent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",    
        locale:"fr-FR",
        timezoneId:"Europe/Paris",
        geolocation:{latitude:40.7128,longitude:-74.0060},
        permissions:["geolocation"],
        colorScheme:"dark",
        acceptDownloads:true, 
    });

    const page= await contextOptions.newPage();
    await page.goto("https://app.vwo.com/#/login");
    console.log("Page opened with context options");

    contextOptions.close();

});