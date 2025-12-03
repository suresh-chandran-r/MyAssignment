
import { chromium, webkit, test } from "@playwright/test";

test("Test to launch a browser",async()=>{

const browser = await chromium.launch()
const context = await browser.newContext()
const page = await context.newPage()

await page.goto(`https://www.amazon.in/`)

const currentUrl = await page.url();
console.log('Current URL:', currentUrl); 

let currentTitle = await page.title();
console.log('Current Title:', currentTitle);  

const browser1 = await webkit.launch()
const context1 = await browser1.newContext()
const page1 = await context1.newPage()

await page1.goto(`https://www.flipkart.com`)

const currentUrl1 = await page1.url();
console.log('Current URL:', currentUrl1); 

let currentTitle1 = await page1.title();
console.log('Current Title:', currentTitle1); 

})
