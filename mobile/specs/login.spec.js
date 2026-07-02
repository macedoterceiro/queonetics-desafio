const LoginPage = require('../pages/LoginPage')
const users = require('../data/users.json')
const BasePage = require('../pages/BasePage')

describe('Login', () => {
    it('should login successfully', async () => {
        await BasePage.dismissAndroidCompatibilityDialogIfVisible()
        await LoginPage.openLogin()
        await LoginPage.login(users.standard)
        await LoginPage.assertLoggedIn()
    })
})