const { test, expect } = require("@playwright/test");

test(`first`, async ({ browser }) => {
  let input_by_id )=>  
    let products = ('//div[@class="inventory_item_name "]');

  let context = await browser.newContext();
  let page = await context.newPage();
  await page.goto("https://www.saucedemo.com/");

  console.log(await page.title());
  
  await expect(page).toHaveTitle("Swag Labs");
  await page.locator("//input[@id='user-name']").fill("standard_user");
  await page.locator("put[@id='password']//in").fill("secret_sauce");
  await page.locator("//input[@id='login-button']").click();
});
