const BasePage = require('./BasePage')
const ProductsScreen = require('../objects/ProductsScreen')
const MenuScreen = require('../objects/MenuScreen')

class ProductsPage {
    async openProduct(productName) {
        await BasePage.click(ProductsScreen.productByName(productName))
    }

    async goToCatalogByMenu() {
        await BasePage.dismissAndroidCompatibilityDialogIfVisible()

        await BasePage.click(MenuScreen.menuButton)

        await MenuScreen.catalogOption.waitForDisplayed({
            timeout: 10000
        })

        await BasePage.click(MenuScreen.catalogOption)
    }

    async openCart() {
        await BasePage.click(ProductsScreen.cartButton)
    }
}

module.exports = new ProductsPage()