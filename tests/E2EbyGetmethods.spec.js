/*	We need to login with our logins. 
•	Select the product and add it to the cart. 
•	Go to cart section and write assertions that same product is added to the cart. 
•	Once it confirm then click on checkout. 
•	Again on checkout also we need to check that same product is coming, same qty is displaying and we need to enter all the details. 
•	Select the country and Apply coupon (rahushettyacademy) and Place order. 
•	Thank you for the order should be displayed that order confirmation is displayed. 
•	Capture that order id in one variable. 
•	Once we capture the order id, then we will go to order history and check where is the order is present. 
•	So again we need to write dynamically that our playwright has to search for order id in whole table And finally it will find it there. 
•	So once we find it there, we can actually go and view the details that if the same order what to have initially put the details, country, email, product name, everything is same or not
•	That’s the whole end to end process. 
*/
const {test,expect} = require('@playwright/test')

test('E2E',async ({page})=>
{
await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
await page.getByPlaceholder('email@example.com').fill("angampoojitha99@gmail.com");
await page.getByPlaceholder('enter your passsword').fill("Ammu@401");
await page.getByRole('button',{name:'Login'}).click();
await page.locator('.card-body b').first().waitFor();
await page.locator('.card-body').filter({hasText :'ADIDAS ORIGINAL'}).getByRole('button',{name : 'Add To Cart'}).click();
await page.getByRole('listitem').getByRole('button',{name :'Cart'}).click();
await expect(page.getByText('ADIDAS ORIGINAL')).toBeVisible();
await page.getByRole('button',{name : 'Checkout'}).click();
await expect(page.getByText(' Payment Method ')).toBeVisible();

 await page.locator('[value="4542 9931 9292 2293"]').fill("4542 9931 9292 2293");
 await page.locator('[class="input txt"]').first().fill("267");
await page.locator('[class="input txt"]').last().fill("Test");
await page.locator('[name="coupon"]').fill("rahulshettyacademy");
await page.locator('button:has-text("Apply Coupon")').click();
await expect(page.locator("text=* Coupon Applied")).toBeVisible();
await page.locator('.user__name input').first().fill("angampoojitha99@gmail.com");
await page.getByPlaceholder('Select Country').pressSequentially("Ind");
await page.getByRole('button',{name :'India'}).nth(1).click();
await page.getByText('Place Order').click();
await expect(page.getByText("Thankyou for the order.")).toBeVisible();
const order = (await page.locator('td label').last().textContent())?.trim();
const orderId = order.trim().replace(/\|/g, ""); //.replace(/\|/g, "")
 await page.getByRole("button",{name : "ORDERS"}).click();
 await expect(page.getByText('Your Orders')).toBeVisible();
 await page.locator('tbody tr').filter({ has: page.getByRole('rowheader', { name: orderId }) }).getByRole('button', { name: 'View' }).click();
await expect(page.getByText("order summary")).toBeVisible();
});






