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
}

export default new CartPage();