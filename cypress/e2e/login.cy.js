import LoginPage from '../pages/LoginPage'
import SidebarPage from '../pages/SidebarPage'

describe('Login', () => {
  it('should login and logout successfully', () => {
    cy.env(['QUEO_USER', 'QUEO_PASS']).then((env) => {
      LoginPage.login(env.QUEO_USER, env.QUEO_PASS)
    })

    LoginPage.assertLoggedIn()

    SidebarPage.logout()

    cy.contains('Welcome to Trix')
      .should('be.visible')
  })
})