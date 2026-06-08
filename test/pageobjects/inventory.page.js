class InventoryPage {
    get title() {
        return $('.title');
    }
    get cartButton() {
        return $('.shopping_cart_link');
    }
    async openCart() {
        await this.cartButton.click();
    }
}
export default new InventoryPage();