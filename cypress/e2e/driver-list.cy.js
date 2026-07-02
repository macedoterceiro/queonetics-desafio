import LoginPage from '../pages/LoginPage'
import SidebarPage from '../pages/SidebarPage'
import DriverPage from '../pages/driver/DriverPage'
import DriverFilter from '../pages/driver/DriverFilter'

describe('Driver list actions', () => {
    beforeEach(() => {
        LoginPage.loginWithEnv()
        LoginPage.assertLoggedIn()
        SidebarPage.accessDriver()
        DriverPage.assertLoaded()
    })

    it('should search drivers', () => {
        DriverPage.grid.searchByText('20210416')
    })

    it('should filter drivers by team', () => {
        DriverFilter.filterByTeam('Quixeré')
    })

    it('should export drivers', () => {
        DriverPage.grid.clickExport()
    })
})