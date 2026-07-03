class ProductsScreen {
    productByName(name) {
        return $(`android=new UiSelector().text("${name}")`)
    }

    get cartButton() {
        return $('~cart badge')
    }
}

module.exports = new ProductsScreen()