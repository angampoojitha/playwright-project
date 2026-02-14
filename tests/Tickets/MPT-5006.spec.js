const {test,expect} = require('@playwright/test')

test('CheckoutLogin Reg STD order', async ({ page }) => {
  await page.goto('https://checkout-uat-uatmesh-jdsportsuk-desktop.nonprod.jdmesh.co/');
  await page.getByRole('button',{name:'Accept All Cookies'}).first().click();
  await expect(page.getByRole('img', { name: 'JD Sports' })).toBeVisible();
  await page.getByPlaceholder('Search Nike, adidas, latest footwear etc?').fill('17022969');
  await page.locator('#srchButton').click();
    let size = "S";
  const sizeButton = page.locator(`[data-size="${size}"]`).first();
await expect(sizeButton).toBeVisible();
await sizeButton.click();
await expect(sizeButton).toBeEnabled();
const AddtoWishlist =  page.locator('[title="Add to Wishlist"]');
await expect(AddtoWishlist).toBeVisible();
await AddtoWishlist.click();
await page.getByText('Add to Wishlist').last().click();

if (await page.locator('text=Saved to wishlist').isVisible() || await page.locator('text= Remove from Wishlist').isVisible()) {
  await page.locator('[data-ip-position="header-wishlist"]').click();
}

await page.locator('[data-ip-position="header-wishlist"]').click();
await expect(page.locator('h2:has-text("Jordan Paris Saint Germain 2024/25 Third Shorts")')).toBeVisible();
await page.locator('[title="Quick View"]').click();
await expect(page.getByText("Jordan Paris Saint Germain 2024/25 Third Shorts")).toBeVisible();
await page.locator('[title="Add to basket"]').click();
await expect(page.getByText('My Bag')).toBeVisible();
})