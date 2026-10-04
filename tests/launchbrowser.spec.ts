import {chromium,test} from "@playwright/test"

test("Launching of browser", async()=>{


const browser = await chromium.launch({headless:false,channel:"chrome"}) 
const context = await browser.newContext(); 
const page = await context.newPage() 

await page.goto("https://www.google.com")

await page.waitForTimeout(5000) 

} 
)