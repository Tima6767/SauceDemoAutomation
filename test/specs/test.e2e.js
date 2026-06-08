import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import CartPage from '../pageobjects/cart.page.js';
describe('Sauce Demo Tests', () => {
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

});