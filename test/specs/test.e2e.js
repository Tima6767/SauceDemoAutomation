import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import CartPage from '../pageobjects/cart.page.js';
describe('Cart Tests', () => {
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

});