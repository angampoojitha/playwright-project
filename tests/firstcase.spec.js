const { test, expect } = require('@playwright/test'); // This is required to run tests

test('Firstcase', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://checkout-uat-uatmesh-jdsportsuk-desktop.nonprod.jdmesh.co/")// launching the site
    await page.contains('Accept All Cookies').first().click();
    
});

// or we can write it as as follows : 
test('Secondcase', async ({page}) => {// we can directly write this fixture 
    await page.goto("https://checkout-uat-uatmesh-jdsportsuk-desktop.nonprod.jdmesh.co/")// launching the site
    await page.locator('[class="btn btn-level1 accept-all-cookies "]').first().click();

});
