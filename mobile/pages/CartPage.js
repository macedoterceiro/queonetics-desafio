const BasePage = require('./BasePage')
const CartScreen = require('../objects/CartScreen')

class CartPage {
    async assertProductExists(productName) {
        await BasePage.expectVisible(CartScreen.productName(productName))
    }

    async increaseFirstProductQuantity() {
        await BasePage.click(await CartScreen.plusButtonByIndex(0))
    }

    async removeSecondProduct() {
        await BasePage.click(await CartScreen.removeButtonByIndex(1))
    }

    async proceedToCheckout() {
        await BasePage.click(CartScreen.proceedToCheckoutButton)
    }
}

module.exports = new CartPage()