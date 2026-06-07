import {test,expect} from '@playwright/test';
test('Print state name list and click on UP state',async({page})=>{
    await page.goto('https://simplemaps.com/svg/country/in');
    
    // Get all SVG path elements (states)
    const statePaths = await page.locator('text tspan').all();
    console.log(`\nTotal states found: ${statePaths.length}\n`);
   
    for (let i = 0; i < statePaths.length; i++) {
        const classAttr = await statePaths[i].textContent();
        console.log(`${i + 1}. ${classAttr}`);
          }
          
console.log ('click on UP state');
  // Print all classnames of the states and click on the UP.
    let allStates = await page.locator('path').all();   
    for (const state of allStates) {
        const className = await state.getAttribute('class');
        if(className){ // checks if className is not null
            //console.log(className);
        
         if(className.endsWith('UP')){ // checks if stateEnd ends with 'UP'
         await state.click();   
         console.log("Clicked on UP");       
     }  
    }
} 
});

