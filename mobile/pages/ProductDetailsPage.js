const BasePage = require('./BasePage')
const ProductDetailsScreen = require('../objects/ProductDetailsScreen')

class ProductDetailsPage {
    async selectColor(color) {
        await BasePage.click(ProductDetailsScreen.colorButton(color))
    }

    async increaseQuantity(times) {
        for (let i = 1; i < times; i++) {
            await BasePage.click(ProductDetailsScreen.plusButton)
        }
    }

    async addToCart() {
        await BasePage.click(ProductDetailsScreen.addToCartButton)
    }

    async configureAndAdd(product) {
        await this.selectColor(product.color)
        await this.increaseQuantity(product.quantity)
        await this.addToCart()
    }
}

module.exports = new ProductDetailsPage()