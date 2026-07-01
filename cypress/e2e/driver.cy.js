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
    })

    it('should create a basic driver', () => {
        cy.fixture('driver').then((data) => {
            DriverPage.createBasicDriver(data.basic)
        })
    })

    it('should create a complete driver', () => {
        cy.fixture('driver').then((driver) => {
            DriverPage.createCompleteDriver(driver.complete)
        })
    })*/

    it('should update driver using quick edit', () => {
        cy.fixture('driver').then(({ quickEdit }) => {
            DriverPage.updateDriverUsingQuickEdit('Lion', quickEdit)
        })
    })/*
    
    it('should update driver using full edit', () => {
        cy.fixture('driver').then(({ edit }) => {
            DriverPage.updateBasicDriver('Lion', edit)
        })
    })

    it('should delete first driver from search result', () => {
        DriverPage.deleteFirstResultBySearch('lion')
    })*/
})