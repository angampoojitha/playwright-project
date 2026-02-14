const {test,expect} = require('@playwright/test')
test('GetbyMethods', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/angularpractice/')
    await page.locator('[name="name"]').first().fill('Jd')
    await page.locator('[name="email"]').fill('angampoojitha99@gmail.com')
     await page.getByPlaceholder('Password').fill("Ammu@401");
    await page.getByLabel('Check me out if you Love IceCreams!').click();
    await page.getByLabel('Gender').selectOption('Male');
    await page.getByLabel('Employed').click();
    await page.getByRole('button',{name :'Submit'}).click();
    // await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await expect (page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();
    await page.getByRole('link',{name: 'Shop'}).click();
    await expect (page.getByText('Shop Name')).toBeVisible();
    await page.locator('app-card').filter({hasText:'iphone X'}).getByRole('button',{name:'Add'}).click();
    await page.locator('[class="nav-link btn btn-primary"]').click();
    await expect(page.getByText('iphone X')).toBeVisible();
    await page.getByRole('button',{name : /Checkout/ }).click();
    await page.getByText('I agree with the term &').click();
    await page.getByRole('button', { name: 'Purchase' }).click();
    await expect(page.getByText('Success!',{exactly : true})).toBeVisible();
    await page.getByRole('link', {name :'close'}).click();



    
});