const BasePage = require('./BasePage')
const CheckoutScreen = require('../objects/CheckoutScreen')

class CheckoutPage {
    async fillAddress(address) {
        await BasePage.expectVisible(CheckoutScreen.addressScreen)

        await BasePage.type(CheckoutScreen.fullNameAddressInput, address.fullName)
        await BasePage.type(CheckoutScreen.addressLine1Input, address.addressLine1)
        await BasePage.type(CheckoutScreen.addressLine2Input, address.addressLine2)
        await BasePage.type(CheckoutScreen.cityInput, address.city)
        await BasePage.type(CheckoutScreen.stateInput, address.state)
        await BasePage.type(CheckoutScreen.zipCodeInput, address.zipCode)
        await BasePage.type(CheckoutScreen.countryInput, address.country)
    }

    async goToPayment() {
        await BasePage.click(CheckoutScreen.toPaymentButton)
    }

    async fillPayment(payment) {
        await BasePage.expectVisible(CheckoutScreen.paymentScreen)

        await BasePage.type(CheckoutScreen.fullNamePaymentInput, payment.fullName)
        await BasePage.type(CheckoutScreen.cardNumberInput, payment.cardNumber)
        await BasePage.type(CheckoutScreen.expirationDateInput, payment.expirationDate)
        await BasePage.type(CheckoutScreen.securityCodeInput, payment.securityCode)
    }

    async goToReviewOrder() {
        await BasePage.click(CheckoutScreen.reviewOrderButton)
    }

    async placeOrder() {
        await BasePage.expectVisible(CheckoutScreen.reviewScreen)
        await BasePage.click(CheckoutScreen.placeOrderButton)
    }

    async assertPurchaseCompleted() {
        await BasePage.expectVisible(CheckoutScreen.completeScreen)
        await BasePage.expectVisible(CheckoutScreen.thankYouText)
    }

    async continueShopping() {
        await BasePage.click(CheckoutScreen.continueShoppingButton)
    }
}

module.exports = new CheckoutPage()