import LoginPage from '../pages/LoginPage'
import SidebarPage from '../pages/SidebarPage'
import DriverPage from '../pages/driver/DriverPage'
import DriverPageAssertions from '../pages/driver/DriverPageAssertions'

describe('Driver page - smoke validation', () => {
    before(() => {
        LoginPage.loginWithEnv()
        LoginPage.assertLoggedIn()
        SidebarPage.accessDriver()
        DriverPage.assertLoaded()
    })

    it('should display driver page structure', () => {
        DriverPageAssertions.assertTableActionsVisible()
        DriverPageAssertions.assertTableColumnsVisible()
    })
})