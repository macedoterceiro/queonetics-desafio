class ProductDetailsScreen {
    get addToCartButton() {
        return $('~Add To Cart button')
    }

    get plusButton() {
        return $('~counter plus button')
    }

    colorButton(color) {
        return $(`~${color}`)
    }
}

module.exports = new ProductDetailsScreen()