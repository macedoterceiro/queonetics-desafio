import LoginPage from '../pages/LoginPage'
import SidebarPage from '../pages/SidebarPage'
import DriverPage from '../pages/driver/DriverPage'
import DriverExtraActions from '../pages/driver/DriverExtraActions'

describe('Driver page - extra interactions', () => {
    beforeEach(() => {
        LoginPage.loginWithEnv()
        LoginPage.assertLoggedIn()
        SidebarPage.accessDriver()
        DriverPage.assertLoaded()
    })

    it('should open bulk delete confirmation and cancel', () => {
        DriverExtraActions.validateBulkDeleteCancel()
    })

    it('should open driver risk details', () => {
        DriverExtraActions.openRiskDetail()
    })

    it('should open column configuration menu', () => {
        DriverExtraActions.openColumnConfiguration()
    })
})