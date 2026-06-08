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
}
export default new CartPage();