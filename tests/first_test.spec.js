const { test, expect } = require("@playwright/test");

test(`first`, async ({ browser }) => {
  let context = await browser.newContext();
  let page = await context.newPage();
  await page.goto("https://www.saucedemo.com/");

  let input_by_id = (id_text) => page.locator(`//input[@id='${id_text}']`);
  let products = page.locator('//div[@class="inventory_item_name "]');
  let filter = page.locator('//select[@class="product_sort_container"]');
  let addProdToCart = (productName) =>
    page.locator(
      `//div[contains(text(),'${productName}')]/../../../div/button`,
    );

  console.log(await page.title());

  await expect(page).toHaveTitle("Swag Labs");
  await input_by_id("user-name").fill("standard_user");
  await input_by_id("password").fill("secret_sauce");
  await input_by_id("login-button").click();
  await page.waitForLoadState("networkidle");
  console.log(await products.allTextContents());
  await filter.selectOption("hilo");
  await addProdToCart("Backpack").click();
  await page.pause();
});
