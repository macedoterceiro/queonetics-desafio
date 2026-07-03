const BasePage = require('./BasePage')
const MenuScreen = require('../objects/MenuScreen')

class MenuPage {
    async logout() {
        await BasePage.dismissAndroidCompatibilityDialogIfVisible()

        await BasePage.click(MenuScreen.menuButton)
        await BasePage.click(MenuScreen.logoutOption)

        await BasePage.click(MenuScreen.confirmLogoutButton)
        await BasePage.click(MenuScreen.logoutSuccessOkButton)
    }

    async assertLoggedOut() {
        await BasePage.expectVisible(MenuScreen.loginScreen)
    }
}

module.exports = new MenuPage()