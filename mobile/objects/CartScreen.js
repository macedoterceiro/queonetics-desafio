class CartScreen {
    productName(name) {
        return $(`android=new UiSelector().text("${name}")`)
    }

    plusButtonByIndex(index) {
        return $$('~counter plus button')[index]
    }

    removeButtonByIndex(index) {
        return $$('android=new UiSelector().text("Remove Item")')[index]
    }

    get proceedToCheckoutButton() {
        return $('~Proceed To Checkout button')
    }
}

module.exports = new CartScreen()