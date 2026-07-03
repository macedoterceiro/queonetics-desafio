const LoginPage = require('../pages/LoginPage')
const BasePage = require('../pages/BasePage')
const ProductsPage = require('../pages/ProductsPage')
const ProductDetailsPage = require('../pages/ProductDetailsPage')
const CartPage = require('../pages/CartPage')
const CheckoutPage = require('../pages/CheckoutPage')
const MenuPage = require('../pages/MenuPage')
const users = require('../data/users.json')
const products = require('../data/products.json')
const checkout = require('../data/checkout.json')

describe('Purchase flow', () => {
    it('should add two different products to cart', async () => {
        await LoginPage.openLogin()
        await LoginPage.login(users.standard)

        await ProductsPage.openProduct(products.backpack.name)
        await ProductDetailsPage.configureAndAdd(products.backpack)

        await ProductsPage.goToCatalogByMenu()

        await ProductsPage.openProduct(products.boltTShirt.name)
        await ProductDetailsPage.configureAndAdd(products.boltTShirt)

        await ProductsPage.openCart()

        await CartPage.assertProductExists(products.backpack.name)
        await CartPage.assertProductExists(products.boltTShirt.name)

        await CartPage.increaseFirstProductQuantity()
        await CartPage.removeSecondProduct()

        await CartPage.proceedToCheckout()

        await CheckoutPage.fillAddress(checkout.address)
        await CheckoutPage.goToPayment()

        await CheckoutPage.fillPayment(checkout.payment)
        await CheckoutPage.goToReviewOrder()

        await CheckoutPage.placeOrder()
        await CheckoutPage.assertPurchaseCompleted()
        await CheckoutPage.continueShopping()

        await MenuPage.logout()
        await MenuPage.assertLoggedOut()
    })
})