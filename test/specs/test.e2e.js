import LoginPage from '../pageobjects/Login.Page.js';
import InventoryPage from '../pageobjects/Inventory.Page.js';
import CartPage from '../pageobjects/Cart.Page.js';
import checkoutPage from '../pageobjects/Checkout.Page.js';
describe('Sauce Demo Tests', () => {

beforeEach(async () => {
    await browser.reloadSession();

    await browser.url('https://www.saucedemo.com/');

    await browser.execute(() => {
        localStorage.clear();
        sessionStorage.clear();
    });
});


      it('valid login', async () => {

        await LoginPage.open();

        await LoginPage.loginAsStandardUser();

       await expect(InventoryPage.title).toHaveText('Products');
     });

     it('checkout without products', async () => {
      await LoginPage.open();

      await LoginPage.loginAsStandardUser();

     await expect(InventoryPage.title)

     .toHaveText('Products');

     await InventoryPage.openCart();

     await CartPage.clickCheckout();

     await expect(CartPage.emptyCartError)
     .toHaveText('Cart is empty');

    });

    it('saving the cart after logout', async () => {
        await LoginPage.open();

        await LoginPage.loginAsStandardUser();

        await expect(InventoryPage.title).toHaveText('Products');

        await InventoryPage.addProduct();

        await InventoryPage.openMenu();

        await InventoryPage.logout();

        await LoginPage.loginAsStandardUser();

       await expect(InventoryPage.title).toHaveText('Products');

        await InventoryPage.openCart();

        await expect(InventoryPage.cartBadge).toHaveText('1');

        await expect(CartPage.productName).toHaveText('Sauce Labs Backpack');

    });

    it('Sorting products by price low to high', async () => {

    await LoginPage.open();

    await LoginPage.loginAsStandardUser();

    await expect(InventoryPage.title)
        .toHaveText('Products');


    await InventoryPage.sortByPriceLowHigh();

    const priceElements = await browser.$$('.inventory_item_price');

   const prices = [];

for (const price of priceElements) {
    prices.push(await price.getText());
}

    const priceNumbers = prices.map(
        price => Number(price.replace('$',''))
    );

    const sortedPrices = [...priceNumbers].sort(
        (a,b)=>a-b
    );

    expect(priceNumbers).toEqual(sortedPrices);
})

     it('Sorting products by price high to low', async () => {
        
        await LoginPage.open();

        await LoginPage.loginAsStandardUser();

        await expect(InventoryPage.title)
            .toHaveText('Products');

        await InventoryPage.sortByPriceHighLow();

        const priceElements = await browser.$$('.inventory_item_price');

        const prices = [];

        for (const price of priceElements) {
            prices.push(await price.getText());
        }

        const priceNumbers = prices.map(
            price => Number(price.replace('$',''))
        );

        const sortedPrices = [...priceNumbers].sort(
            (a,b)=>b-a
        );

        expect(priceNumbers).toEqual(sortedPrices);
    });

     it('Sorting products by name A-Z', async () => {

      await LoginPage.open();

      await LoginPage.loginAsStandardUser();

      await expect(InventoryPage.title)
          .toHaveText('Products');

      await InventoryPage.sortByNameAToZ();
      
      const nameElements = await browser.$$('.inventory_item_name');
        const names = [];
        for (const name of nameElements) {
            names.push(await name.getText());
        }

        const sortedNames = [...names].sort();

        expect(names).toEqual(sortedNames);
     });
     
     it('Sorting products by name Z-A', async () => {
        await LoginPage.open();

        await LoginPage.loginAsStandardUser();

        await expect(InventoryPage.title)
            .toHaveText('Products');
        await InventoryPage.sortByNameZToA();

        const nameElements = await browser.$$('.inventory_item_name');

        const names = [];
        for (const name of nameElements) {
            names.push(await name.getText());
        }

        const sortedNames = [...names].sort().reverse();

        expect(names).toEqual(sortedNames);
     });    


    it('Valid checkout', async () => {

    await LoginPage.loginAsStandardUser();

    await expect(InventoryPage.title)
        .toHaveText('Products');
  await InventoryPage.addProduct();

await InventoryPage.openCart();

await CartPage.clickCheckout();

await expect(browser)
    .toHaveUrl(expect.stringContaining('checkout-step-one.html'));

await checkoutPage.fillInformation();

await checkoutPage.clickContinue();

await expect(browser)
    .toHaveUrl(expect.stringContaining('checkout-step-two.html'));

await checkoutPage.finish();

await expect(browser)
    .toHaveUrl(expect.stringContaining('checkout-complete.html'));

await checkoutPage.backHome();

await expect(browser)
    .toHaveUrl(expect.stringContaining('inventory.html'));

await expect(InventoryPage.cartBadge)
    .not.toBeExisting();

});
});
