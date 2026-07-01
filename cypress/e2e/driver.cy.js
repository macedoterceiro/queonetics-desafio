import LoginPage from '../pages/LoginPage'
import SidebarPage from '../pages/SidebarPage'
import DriverPage from '../pages/DriverPage'

describe('Driver page', () => {
    beforeEach(() => {
        LoginPage.loginWithEnv()
        LoginPage.assertLoggedIn()
        SidebarPage.accessDriver()
        DriverPage.assertDriverPageLoaded()
    })

    /*it('should display driver table actions', () => {
        DriverPage.assertTableActionsVisible()
    })

    it('should display driver table columns', () => {
        DriverPage.assertTableVisible()
    })

    it('should open search action', () => {
        DriverPage.searchByText('20210416')
    })

    it('should open filter action', () => {
        DriverPage.filterByTeam('Quixeré')
    })

    it('should trigger export action', () => {
        DriverPage.clickExport()
    })

    it('should trigger create new action', () => {
        DriverPage.clickCreateNew()
    })*/

    it('should delete first driver from search result', () => {
        DriverPage.deleteFirstResultBySearch('lion')
    })
})