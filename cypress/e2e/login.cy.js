import LoginPage from '../pages/LoginPage'
import SidebarPage from '../pages/SidebarPage'

describe('Login', () => {
    it('should login and logout successfully', () => {
      
      LoginPage.loginWithEnv()
      LoginPage.assertLoggedIn()
      SidebarPage.logout()

      cy.contains('Welcome to Trix')
        .should('be.visible')
    })
})