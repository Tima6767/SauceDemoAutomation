class InventoryPage {
    get title() {
        return $('.title');
    }

    get cartButton() {
        return $('.shopping_cart_link');
    }

   get backpackAddButton() {
    return $('[data-test="add-to-cart-sauce-labs-backpack"]');
}

get backpackRemoveButton() {
    return $('[data-test="remove-sauce-labs-backpack"]');
}


async addProduct() {

    const removeExists = await this.backpackRemoveButton.isExisting();

    if (removeExists) {
        console.log('Backpack already added');
        return;
    }

    await this.backpackAddButton.waitForDisplayed({
        timeout: 10000
    });

    await this.backpackAddButton.click();
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

    get productPrices() {
        return $$('.inventory_item_price');
    }

    get sortDropdown() {
        return $('.product_sort_container');
    }

    async openCart() {
        await this.cartButton.click();
    }

    async openMenu() {
        await this.menuButton.click();
    }

    async logout() {
        await this.logoutButton.waitForDisplayed();
        await this.logoutButton.click();
    }

    async sortByPriceLowHigh() {
        await this.sortDropdown.selectByVisibleText('Price (low to high)');
    }

    async sortByPriceHighLow() {
        await this.sortDropdown.selectByVisibleText('Price (high to low)');
    }

    async sortByNameAToZ() {
        await this.sortDropdown.selectByVisibleText('Name (A to Z)');
    }

    async sortByNameZToA() {
        await this.sortDropdown.selectByVisibleText('Name (Z to A)');
    }

get inventoryItem() {
    return $('.inventory_item');
}
async addProduct() {

    await this.inventoryItem.waitForDisplayed({
        timeout: 10000
    });

    await this.backpackAddButton.click();
}

}

export default new InventoryPage();
