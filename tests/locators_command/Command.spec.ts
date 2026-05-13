import {test, expect} from '@playwright/test';

test('test for different waitUntil option',async({page})=>{

    //domcontentloaded waits for the initial HTML document 
    // to be completely loaded and parsed, without waiting for
    //  stylesheets, images, and subframes to finish loading.
    //  This is useful for pages that have a lot of static 
    // content and do not rely heavily on JavaScript for 
    // rendering.
    page.goto("https://app.vwo.com/#/login", {waitUntil:'domcontentloaded'});
    console.log("waitUntil: domcontentloaded");

    //networkidle waits for the network to be idle, 
    // which means that there are no more than 0 network 
    // connections for at least 500 ms. This is useful for
    //  pages that load additional content dynamically after
    //  the initial load, such as single-page applications or 
    // pages with heavy JavaScript usage.
        page.goto("https://app.vwo.com/#/login", {waitUntil:'networkidle'});    
    console.log("waitUntil: networkidle");
    
    //default waitUntil is load
        page.goto("https://app.vwo.com/#/login", {waitUntil:'load'});    
    console.log("waitUntil: load");

    //commit is the earliest event, it waits for the response to be received and the document to start loading, but does not wait for any content to be loaded or rendered.
    page.goto("https://app.vwo.com/#/login", {waitUntil:'commit'});    
    console.log("waitUntil: commit");

});