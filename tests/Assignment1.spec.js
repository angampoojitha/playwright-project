const {test,expect} = require('@playwright/test')

test('Assignment',async ({page})=> {
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator('#userEmail').fill("angampoojitha99@gmail.com");
await page.locator('#userPassword').fill("Ammu@401");
await page.locator('#login').click();
await page.waitForLoadState("networkidle"); // this is the method to wait untill something is loaded.and what we need to be loaded => networkidle 
// networkidle => So that means it will wait until the network comes to idle state. (with no work left)
//console.log(await page.locator('.card-body b').first().textContent());// first product or
console.log(await page.locator('.card-body b').allTextContents()); 
// all products will print. there is no wait mechanism for this thats why we write networkidle to wait and load all products 

//3rd Another method : 
await page.locator('.card-body b').waitFor();// this waitfor method telling to wait for wait untill that element is loaded.
// but this waitfor method works only when the locator returns only single element. so if we have multiple elements we can use .first() and .last() methods to load

// all 3 methods because that alltextcontents method has not able to auto wait its not having the facility. 
// so thats why we ended up having a one separate step to handle that wait mechanism


})