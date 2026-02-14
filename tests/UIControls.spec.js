const {test,expect} = require('@playwright/test')
test.only('UI Controls', async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('learning')
    await page.locator('span.radiotextsty').last().click();
    await page.locator('#okayBtn').click();
    await expect(page.locator('span.radiotextsty').last()).toBeChecked();
    await page.locator('select.form-control').selectOption('Consultant');
    await page.locator('#terms').click();
    await expect(page.locator('#terms')).toBeChecked();
    await page.locator('#terms').uncheck(); // to check 
     expect (await page.locator('#terms').isChecked()).toBeFalsy(); // assertions for uncheck 
    await page.locator('#signInBtn').click();

    await expect(page.locator('[class="blinkingText"]')).toHaveAttribute('class','blinkingText')

    //Promise all : means a set of steps needs to be parallely, go and wait until all steps are accomplised, then 
    // those steps we can wrap in one array 

    




});