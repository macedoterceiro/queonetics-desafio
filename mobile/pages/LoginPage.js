const BasePage = require('./BasePage')
const LoginScreen = require('../objects/LoginScreen')
const MenuScreen = require('../objects/MenuScreen')

class LoginPage {
    async openLogin() {
        await BasePage.click(MenuScreen.menuButton)
        await BasePage.click(MenuScreen.loginOption)
    }

    async login(user) {
        await BasePage.type(LoginScreen.usernameInput, user.username)
        await BasePage.type(LoginScreen.passwordInput, user.password)
        await BasePage.click(LoginScreen.loginButton)
    }

    async assertLoggedIn() {
        await BasePage.click(MenuScreen.menuButton)
        await BasePage.expectVisible(MenuScreen.logoutOption)
    }
}

module.exports = new LoginPage()