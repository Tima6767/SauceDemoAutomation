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
    get backpackAddButton() {
        return $('#add-to-cart-sauce-labs-backpack');
}

 get cartBadge() {
    return $('.shopping_cart_badge');
}
get menuButton() {
    return $('#react-burger-menu-btn');
}
get logoutButton() {
    return $('#logout_sidebar_link');
}
get cartButton() {
    return $('.shopping_cart_link');
}
async addProduct() {
    await this.backpackAddButton.click();
}
async openMenu() {
    await this.menuButton.click();
}
async logout() {
    await this.logoutButton.waitForDisplayed();
    await this.logoutButton.click();
}
async openCart() {
    await this.cartButton.click();
}
}
export default new InventoryPage();