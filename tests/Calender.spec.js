/* Go to https://rahulshettyacademy.com/seleniumPractise/#/.
•	Click on Top Deals.
•	A calendar widget will appear.
•	From the test, we will provide month, year, and date as parameters.
•	Based on these parameters, the test should:
•	Read the provided month, year, and date.
•	Navigate the calendar to the correct month and year.
•	Select the specified date.
•	Finally, add an assertion to verify that the selected date matches the expected date.
*/

const {test,expect} = require('@playwright/test')

test('Calendar',async({page})=>
{

    const month = "4";
    const date = "15";
    const year = "2027";

 await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
 await page.getByRole('link',{name:'Top Deals'}).click();
 await page.locator('.react-date-picker__inputGroup').first().click();
 //await page.getByText('January 2026').click();
 await page.locator('.react-calendar__navigation__label').click();

})
