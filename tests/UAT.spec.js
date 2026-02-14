import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://checkout-uat-uatmesh-jdsportsuk-desktop.nonprod.jdmesh.co/');
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  await page.getByRole('textbox', { name: 'Search Nike, adidas, latest' }).fill('4067886571037');
  await page.getByRole('button', { name: 'Search' }).click();
  //await page.getByRole('link', { name: 'adidas Originals Product The' }).first().click();
  await page.getByRole('button', { name: '8' }).click();
  await page.getByRole('button', { name: 'Add to basket' }).click();
  await page.getByRole('link', { name: 'Checkout securely' }).click();
  await page.waitForResponse(resp =>
  resp.url().includes('/cart') && resp.status() === 200
);
    // Ensure the login page is fully loaded
  await page.goto('https://checkout.checkout-uat-uatmesh-jdsportsuk-desktop.nonprod.jdmesh.co/login');

  // Improved waiting strategy for the email input
  const emailInput = page.locator('[name="email"]');
  //await emailInput.waitFor({ state: 'visible', timeout: 60000 }); // Wait for the element to be visible

  // Fill the email field
  await emailInput.fill('jdtestdivya@gmail.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByTestId('validatedInput').fill('jdtestdivya@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Jd@123456');
  await page.getByRole('button', { name: 'Sign In' }).click();

     await page.waitForResponse(resp =>
  resp.url().includes('/cart') && resp.status() === 200
);
/*
  // Navigate to delivery page
await page.goto('https://checkout.checkout-uat-uatmesh-jdsportsuk-desktop.nonprod.jdmesh.co/delivery');

const cardPayment = page.getByText('Credit / Debit Card')
await cardPayment.click();

const Cardname = page.locator('#name-id');
await expect(Cardname).toBeVisible();
await Cardname.fill('Test');

const Cardnumberiframe = page.frameLocator('iframe[title="Iframe for card number"]');
const Cardnumberfield = Cardnumberiframe.locator('input[name="encryptedCardNumber"]');

const CardExpiryiframe = page.frameLocator('iframe[title="Iframe for expiry date"]');
const CardExpiryfield = CardExpiryiframe.locator('input[name="encryptedExpiryDate"]');

const cvviframe = page.frameLocator('iframe[title="Iframe for security code"]')
const cvvfield = cvviframe.locator('#encryptedSecurityCode')

await Cardnumberfield.fill('4444333322221111');
await CardExpiryfield.fill('03/30');

await cvvfield.fill('737');
await page.getByRole('button', { name: 'Checkout Securely' }).click();

*/

// Wait for the payment section container to appear
const paymentSection = page.locator('[class="StyledBox-sc-13pk1d4-0 fVDGPL"]')
await paymentSection.waitFor({ state: 'visible', timeout: 60000 });
 
 
// Select the name input safely
const nameInput = page.locator('input[name="name"]');
 
// Check if it exists and is visible
if (await nameInput.count() > 0 && await nameInput.isVisible()) {
  await nameInput.fill('Test');
} else {
  console.log('Name input not visible, possibly billing address = delivery address');
}

  await page.locator('.StyledBox-sc-13pk1d4-0.dTNmSh > .StyledBox-sc-13pk1d4-0.jFyByd > div > .StyledBox-sc-13pk1d4-0.jgACQN > .StyledBox-sc-13pk1d4-0.kvmDRd > .StyledRadioButton__StyledRadioButtonContainer-g1f6ld-0 > .StyledBox-sc-13pk1d4-0.cFCnyW > .StyledBox-sc-13pk1d4-0').first().click();
  await page.getByRole('textbox', { name: 'Name on Card' }).click();
  await page.getByRole('textbox', { name: 'Name on Card' }).fill('Test');
  await page.locator('iframe[title="Iframe for card number"]').contentFrame().getByRole('textbox', { name: 'Card number' }).click();
  await page.locator('iframe[title="Iframe for card number"]').contentFrame().getByRole('textbox', { name: 'Card number' }).fill('5555 5555 5555 4444');
  await page.locator('iframe[title="Iframe for expiry date"]').contentFrame().getByRole('textbox', { name: 'Expiry date' }).click();
  await page.locator('iframe[title="Iframe for expiry date"]').contentFrame().getByRole('textbox', { name: 'Expiry date' }).fill('03/30');
  await page.locator('iframe[title="Iframe for security code"]').contentFrame().getByRole('textbox', { name: 'Security code' }).click();
  await page.locator('iframe[title="Iframe for security code"]').contentFrame().getByRole('textbox', { name: 'Security code' }).fill('737');
  await page.getByRole('button', { name: 'Checkout Securely' }).click();
  await page.waitForSelector('[data-testid="loader"]', { state: 'hidden' });
 // await page.goto('https://checkout.checkout-uat-uatmesh-jdsportsuk-desktop.nonprod.jdmesh.co/confirm');



});