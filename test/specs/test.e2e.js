import { browser, $, expect } from '@wdio/globals';

describe('Cart Tests', () => {

    it('Checkout without products', async () => {

       await browser.url('https://www.saucedemo.com/');
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();
        const title = await $('.title');
        await expect(title).toHaveText('Products');
        await $('.shopping_cart_link').click();
        await expect(title).toHaveText('Your Cart');
        await $('#checkout').click();
        await expect($('.error-message')).toHaveText('Cart is empty');
    });

});