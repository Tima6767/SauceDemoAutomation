class CartPage {
    get checkoutButton() {
        return $('#checkout');
    }

    get emptyCartError() {
        return $('.error-message');
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }

    get productName() {
        return $('.inventory_item_name');
    }

    get backToHomeButton() {
        return $('#back-to-products');
    }




}
export default new CartPage();