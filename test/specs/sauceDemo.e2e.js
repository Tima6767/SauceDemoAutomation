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

    const prices = await InventoryPage.getPrices();

    const sortedPrices = [...prices].sort(
        (a,b)=>a-b
    );

    expect(prices).toEqual(sortedPrices);

    });

     it('Sorting products by price high to low', async () => {
        
        await LoginPage.open();

        await LoginPage.loginAsStandardUser();

        await expect(InventoryPage.title)
            .toHaveText('Products');

        await InventoryPage.sortByPriceHighLow();

        const prices = await InventoryPage.getPrices();

        const sortedPrices = [...prices].sort(
            (a,b)=>b-a
        );

        expect(prices).toEqual(sortedPrices);
    });

     it('Sorting products by name A-Z', async () => {

      await LoginPage.open();

      await LoginPage.loginAsStandardUser();

      await expect(InventoryPage.title)
          .toHaveText('Products');

      await InventoryPage.sortByNameAToZ();
      
      const names = await InventoryPage.getProductNames();

      const sortedNames = [...names].sort();

      expect(names).toEqual(sortedNames);
     });
     
     it('Sorting products by name Z-A', async () => {
        await LoginPage.open();

        await LoginPage.loginAsStandardUser();

        await expect(InventoryPage.title)
            .toHaveText('Products');
        await InventoryPage.sortByNameZToA();

const names = await InventoryPage.getProductNames();

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
it('login with invalid password', async () => {

    await LoginPage.open();

    await LoginPage.login('standard_user', 'wrong_password');

    await expect(LoginPage.errorMessage)
        .toHaveText('Epic sadface: Username and password do not match any user in this service');

});

    it('login with locked out test login', async () => {

        await LoginPage.open();

        await LoginPage.login('locked_out_user', 'secret_sauce');

        await expect(LoginPage.errorMessage)
            .toHaveText('Epic sadface: Sorry, this user has been locked out.');

    });
     it('Logout', async () => {

        await LoginPage.open();

        await LoginPage.loginAsStandardUser();

        await expect(InventoryPage.title)
            .toHaveText('Products');

        await InventoryPage.openMenu();

        await expect(InventoryPage.logoutButton)
    .toBeDisplayed();

        await InventoryPage.logout();

        await expect(LoginPage.loginButton)
            .toBeDisplayed();

            await expect(LoginPage.usernameInput)
    .toHaveValue('');

await expect(LoginPage.passwordInput)
    .toHaveValue('');

     });
    it('Footer links', async () => {

    await LoginPage.open();

    await LoginPage.loginAsStandardUser();

    await expect(InventoryPage.title)
        .toHaveText('Products');


    await InventoryPage.openTwitter();

    let handles = await browser.getWindowHandles();

    await browser.switchToWindow(handles[1]);

    await expect(browser)
        .toHaveUrl(expect.stringContaining('saucelabs'));

    await browser.closeWindow();

    await browser.switchToWindow(handles[0]);

});

});
