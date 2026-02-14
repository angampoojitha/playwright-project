const {test,expect} = require('@playwright/test')

test('CheckoutLogin Reg STD order', async ({ page }) => {
  await page.goto('https://checkout-uat-uatmesh-jdsportsuk-desktop.nonprod.jdmesh.co/');
  await page.getByRole('button',{name:'Accept All Cookies'}).first().click();
  await expect(page.getByRole('img', { name: 'JD Sports' })).toBeVisible();
  await page.getByRole('link',{name : 'Help & Contact Us'}).click();
  await expect(page.url()).toContain('/page/faqs/');
  const Messageicon = page.locator('#contact-btn')
  const Facebook = page.getByText('Facebook')
  await expect(Facebook).not.toBeVisible();
  await expect(Messageicon).toHaveText('Contact Us')
  await expect(Messageicon).toBeVisible();
  await Messageicon.click();
  await expect(page.url()).toContain('/customer-service/contact/');
  await expect(page.getByText('Customer Service Form')).toBeVisible();

})