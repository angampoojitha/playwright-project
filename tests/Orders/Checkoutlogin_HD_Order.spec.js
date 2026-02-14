const {test,expect} = require('@playwright/test')

test('CheckoutLogin Reg STD order', async ({ page }) => {
  await page.goto('https://checkout-uat-uatmesh-jdsportsuk-desktop.nonprod.jdmesh.co/');
  await page.getByRole('button',{name:'Accept All Cookies'}).first().click();
    await expect(page.getByRole('img', { name: 'JD Sports' })).toBeVisible();

  let product = '17022969';
  let size = "S";
  await page.locator('#srchInput').fill(product);
  await page.locator('#srchButton').click();
const sizeButton = page.locator(`[data-size="${size}"]`).first();
await expect(sizeButton).toBeVisible();
await sizeButton.click();
await page.locator('[title="Add to basket"]').click();
await expect(page.getByText('My Bag')).toBeVisible();
await page.getByRole('link',{name :'Checkout securely'}).click();
let username = 'jdtestdivya@gmail.com';
let password = 'Jd@123456';
await page.getByTestId('validatedInput').fill(username);
await page.getByRole('button',{name :'Continue'}).click();
await page.locator('#password-id').fill(password);
await page.getByRole('button',{name:'Sign In'}).click();
const homeDelivery = page.getByText('Home Delivery')

if (!(await homeDelivery.isChecked())) {
  await homeDelivery.click();
}
await expect(page.getByText('Payment Options')).toBeVisible();
const cardRadio = page.getByRole('radio', { name: 'Credit / Debit Card' });
await cardRadio.check();
await expect(cardRadio).toBeChecked();
const CardName = page.locator('#name-id');
await expect(CardName).toBeVisible();
await CardName.fill('Test');

  const cardNumberIframe = page.frameLocator('iframe[title="Iframe for card number"]');
  const cardNumberField = cardNumberIframe.locator('#encryptedCardNumber');
  await cardNumberField.fill('4444333322221111');

  const expiryIframe = page.frameLocator('iframe[title="Iframe for expiry date"]');
  const expiryField = expiryIframe.locator('#encryptedExpiryDate');
  await expiryField.fill('0330');

  const cvvIframe = page.frameLocator('iframe[title="Iframe for security code"]');
  const cvvField = cvvIframe.locator('#encryptedSecurityCode');
  await cvvField.fill('737');

await page.getByRole('button', { name: 'Checkout Securely' }).click();
const closeBtn = page.locator('[aria-label="Close"]')
if (await closeBtn.isVisible()) {
  await closeBtn.click();
}
const Confirmationtext = await page.locator('[class="StyledText-sc-1sadyjn-0 cQTDbX"]').first().textContent();
const Orderid = Confirmationtext.split('#');
const OrderNumber = Orderid[1];
console.log(OrderNumber)

});