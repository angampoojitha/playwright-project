const {test,expect} = require('@playwright/test')
test.only('UI Controls', async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

    const [newpage] = await Promise.all(
        [
        context.waitForEvent('page'),
        await page.locator('[class="blinkingText"]').click(),
        ]
    )
    
    const text = await newpage.locator('[class="im-para red"]').textContent();
    const arraytext = text.split("@")
    const domain = arraytext[1].split(" ")[0]
    console.log(domain);
    await page.locator('#username').fill(domain);
    await page.pause();
    console.log(await page.locator('#username').inputValue());

})