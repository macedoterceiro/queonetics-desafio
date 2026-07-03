class CheckoutScreen {
    // Address
    get addressScreen() {
        return $('~checkout address screen')
    }

    get fullNameAddressInput() {
        return $('~Full Name* input field')
    }

    get addressLine1Input() {
        return $('~Address Line 1* input field')
    }

    get addressLine2Input() {
        return $('~Address Line 2 input field')
    }

    get cityInput() {
        return $('~City* input field')
    }

    get stateInput() {
        return $('~State/Region input field')
    }

    get zipCodeInput() {
        return $('~Zip Code* input field')
    }

    get countryInput() {
        return $('~Country* input field')
    }

    get toPaymentButton() {
        return $('~To Payment button')
    }

    // Payment
    get paymentScreen() {
        return $('~checkout payment screen')
    }

    get fullNamePaymentInput() {
        return $('~Full Name* input field')
    }

    get cardNumberInput() {
        return $('~Card Number* input field')
    }

    get expirationDateInput() {
        return $('~Expiration Date* input field')
    }

    get securityCodeInput() {
        return $('~Security Code* input field')
    }

    get reviewOrderButton() {
        return $('~Review Order button')
    }

    // Review
    get reviewScreen() {
        return $('~checkout review order screen')
    }

    get placeOrderButton() {
        return $('~Place Order button')
    }

    get completeScreen() {
        return $('~checkout complete screen')
    }

    get checkoutCompleteTitle() {
        return $('android=new UiSelector().textContains("Checkout")')
    }

    get thankYouText() {
        return $('android=new UiSelector().textContains("Thank you")')
    }

    get continueShoppingButton() {
        return $('~Continue Shopping button')
    }
}

module.exports = new CheckoutScreen()