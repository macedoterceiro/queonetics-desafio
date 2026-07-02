import LoginPage from '../pages/LoginPage'
import SidebarPage from '../pages/SidebarPage'
import DriverPage from '../pages/driver/DriverPage'

describe('Driver creation', () => {
    beforeEach(() => {
        LoginPage.loginWithEnv()
        LoginPage.assertLoggedIn()
        SidebarPage.accessDriver()
        DriverPage.assertLoaded()
    })

    it('should create a basic driver', () => {
        cy.fixture('driver').then(({ basic }) => {
            DriverPage.createBasicDriver(basic)
        })
    })

    it('should create a complete driver', () => {
        cy.fixture('driver').then(({ complete }) => {
            DriverPage.createCompleteDriver(complete)
        })
    })
})