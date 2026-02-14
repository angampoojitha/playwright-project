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
await page.locator('#userEmail').fill('angampoojitha99@gmail.com');
await page.locator('#userPassword').fill('Ammu@401');
await page.locator('#login').click();
await page.waitForLoadState('networkidle');

// We can simply wright like this 
// await page.locator('text="Add To Cart"').nth(1).click();

// But Dynamic way which is in session : 
await page.locator('.card-body b').first().waitFor();
const title = await page.locator('.card-body b').allTextContents(); // grabing all text of the products. 
console.log(title)

const allproducts = await page.locator('.card-body');
const allproductscount = await allproducts.count();
const productname = "ADIDAS ORIGINAL";

for (let i=0; i<allproductscount;i++)
{
    const name = await allproducts.nth(i).locator("b").textContent(); 
// transversing from parent to child and picking that product to find only that particular element to match

      // Trim whitespace and compare
    if (name.trim() === productname) 
        {
     await allproducts.nth(i).locator('button:has-text("Add To Cart")').click(); 
     // or await allproducts.nth(i).locator("text=Add To Cart").click(); 
        break;
    }
}
await page.locator('[routerlink="/dashboard/cart"]').click();
await expect(page.locator('div.cart h3')).toHaveText("ADIDAS ORIGINAL");
// we can also wright the same in : 

//await page.locator("div li").first().waitFor(); // li is nothing but items of cart page. 
// we need wait coz isvisible doesn't have ability for auto wait. (check in doc)
// Also when there are multiple elements written, we cannot just say wait.for in that case what we can do see atleast first one is loaded by keeping .first() -- thats enough 
// const bool = await page.locator('h3:has-text("iphone 13 pro")').isVisible(); // this method will check whether the element is visible on the page. 
 //expect(bool).toBeTruthy(); // assertion checking 


 await page.locator("text=Checkout").click();
 await expect(page.locator('[class="payment"]')).toContainText("Personal Information");
 await page.locator('[value="4542 9931 9292 2293"]').fill("4542 9931 9292 2293");
 await page.locator('[class="input txt"]').first().fill("267");
await page.locator('[class="input txt"]').last().fill("Test");
await page.locator('[name="coupon"]').fill("rahulshettyacademy");
await page.locator('button:has-text("Apply Coupon")').click();
await expect(page.locator("text=* Coupon Applied")).toBeVisible();
await page.locator('.user__name input').first().fill("angampoojitha99@gmail.com");
// Country Selection : 
await page.locator('[placeholder="Select Country"]').pressSequentially("Ind");

// Get the dropdown options
const options =  await page.locator('.ta-results.list-group.ng-star-inserted') // taking that dropdown options
await options.waitFor();
const optionscount = await options.locator('[type="button"]').count();

// Loop through the options and find the one matching 'India'
for (let i =0; i<optionscount;i++)
{
    const Country = await options.locator('[type="button"]').nth(i).textContent();
    if(Country.trim()==="India")
    {
        await options.locator('[type="button"]').nth(i).click(); // Click on the India option
        break;// Stop the loop after clicking India
    }
}

await page.locator("text=Place Order").click();
await expect(page.locator('.hero-primary')).toContainText(" Thankyou for the order");// Assertion checking 
 const order = await page.locator('td label').last().textContent();
 console.log(order)// to print the order number 

// Now, take your order ID and go to the Orders menu. There, you can see all the orders. Then, scan each row in the table 
// to find our placed order and click on the "View" button for that specific order.

await page.locator('button:has-text("ORDERS")').click();
await expect(page.locator('h1:has-text("Your Orders")')).toBeVisible();
await page.reload();

const Table =  page.locator('[class="table table-bordered table-hover ng-star-inserted"]');
const eachrow = page.locator("tbody tr");
const ordercount = await eachrow.count();

for (let i = 0; i<ordercount;i++)
{
    const OrderID = await eachrow.nth(i).locator("th").textContent();
    if (OrderID.trim()=== order)
    {
       await eachrow.nth(i).locator('button:has-text("View")').click();
       break;
    }
}

await page.pause();


})



