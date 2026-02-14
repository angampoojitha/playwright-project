const{test,expect} = require ('@playwright/test')

test('Signin',async ({browser})=>{
const context = await browser.newContext();
const page = await context.newPage();
const username = page.locator('#username');
const password = page.locator('#username');
const Signin = page.locator('#signInBtn');
const products = page.locator('.card-body a');

await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
await username.fill("rahulshettyacademy567");
await password.fill("learning");
await Signin.click();
console.log(await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block']")).toContainText("Incorrect");
// We used the * in style*='display: block' because it helps match any element where  style attribute contains display: block, 
// even if there are other styles mixed in.
//Simple Example:
//If the element's style is display: block; color: red;, using style='display: block' won't match because it has more than just display: block.
//But using style*='display: block' will match, because it checks if display: block is part of the style, even if there are other styles too.
//So, the * makes the selector more flexible and able to find the element even if the style is a bit more complex.

await username.fill("");// to wipeoff 
await password.fill("rahulshettyacademy");
await Signin.click();
console.log(await products.first().textContent());
console.log(await products.nth(1).textContent());
console.log(await products.last().textContent());

// to Grab all product names in a list format by using a single line 
console.log(await products.allTextContents()); // it will grab all products 

})






