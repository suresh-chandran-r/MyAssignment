import { test , expect} from "@playwright/test";


test(`Interact with frame using URL`,async ({page}) => {
    
    await page.goto(`https://leafground.com/frame.xhtml`);


    //URL of frame


    const frameURL = page.frame({url:"https://leafground.com/default.xhtml"})


   // await page.locator("").click() --> to interact with web elements in the main page
    await frameURL?.locator("#Click").click();


    /* ?. --> Optional Chaining
    if(frame){
    await frame.locator("#Click").click();
    }
else{
    console.log("Frame not found")
} */
    await page.waitForTimeout(3000) 



})


//name :


test(`Interact with frame using name`,async ({page}) => {
    
    await page.goto(`https://leafground.com/frame.xhtml`);


    //Name of frame


    const frameName = page.frame({name:"frame2"})


   // await page.locator("").click() --> to interact with web elements in the main page
    await frameName?.locator("#Click").click();


    /* ?. --> Optional Chaining
    if(frame){
    await frame.locator("#Click").click();
    }
else{
    console.log("Frame not found")
} */
    await page.waitForTimeout(3000) 



})



//frameLocator


test(`Interact with frame using frame Locartors`,async ({page}) => {
    
    await page.goto(`https://leafground.com/frame.xhtml`);


    //Interact using frameLocator


    const frameRef = page.frameLocator(`[src="default.xhtml"]`);


    await frameRef.locator(`#Click`).click()
    
    await page.waitForTimeout(3000) 



})



//frameLocator Nested frames


test.only(`Interact with nested frame using frame Locators`,async ({page}) => {
    
    await page.goto(`https://leafground.com/frame.xhtml`);

    const frame = page.frameLocator('iframe[src="default.xhtml"]');

    // Locate the button
    const buttonText = frame.locator('#Click');

    // Assert initial text
    await expect(buttonText).toHaveText('Click Me');

    // Click the button
    await frame.locator('#Click').click();

    // Assert text changed
    await expect(buttonText).toHaveText('Hurray! You Clicked Me.');

    //Get the total count of frames present in the page
    const frames = page.frames();
    console.log('Total frames count:', frames.length);

    //Interact using frameLocator
    const frame_Outerframe = page.frameLocator(`[src="page.xhtml"]`);
    const frame_Innerframe = frame_Outerframe.frameLocator(`[src="framebutton.xhtml"]`);

    const buttonText1 = frame_Innerframe.locator('#Click');

    // Assert initial text
    await expect(buttonText1).toHaveText('Click Me');

    await frame_Innerframe.locator("#Click").click()

    // Assert changed text
    await expect(buttonText1).toHaveText('Hurray! You Clicked Me.');

    await page.waitForTimeout(5000) 

})