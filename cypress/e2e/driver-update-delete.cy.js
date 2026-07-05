import LoginPage from '../pages/LoginPage'
import SidebarPage from '../pages/SidebarPage'
import DriverPage from '../pages/driver/DriverPage'

describe('Driver update and delete', () => {

    beforeEach(() => {
        LoginPage.loginWithEnv()
        LoginPage.assertLoggedIn()
        SidebarPage.accessDriver()
        DriverPage.assertLoaded()
    })

    it('should update driver using quick edit', () => {
        cy.fixture('driver').then(({ quickEdit }) => {
            DriverPage.updateDriverUsingQuickEdit('Driver', quickEdit)
        })
    })

    it('should update driver using full edit', () => {
        cy.fixture('driver').then(({ edit }) => {
            DriverPage.updateBasicDriver('Driver', edit)
        })
    })

    it('should delete first driver from search result', () => {
        DriverPage.deleteFirstDriverBySearch('Driver')
    })
})