    class CheckoutPage {
    get firstNameInput() {
        return $('#first-name');
    }

    get lastNameInput() {
        return $('#last-name');
    }

    get postalCodeInput() {
        return $('#postal-code');
    }
async fillInformation() {
        await this.firstNameInput.setValue('John');
        await this.lastNameInput.setValue('Doe');
        await this.postalCodeInput.setValue('12345');
}
     
get continueButton() {
    return $('#continue');
}

async clickContinue() {
    await this.continueButton.click();
}

    get finishButton() {
        return $('#finish');
    }
async finish() {
    await this.finishButton.click();
}
get backHomeButton() {
    return $('#back-to-products');
}

async backHome() {
    await this.backHomeButton.click();
}

}
export default new CheckoutPage();