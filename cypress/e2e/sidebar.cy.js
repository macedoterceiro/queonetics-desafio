import LoginPage from '../pages/LoginPage'
import SidebarPage from '../pages/SidebarPage'

describe('Sidebar', () => {
  beforeEach(() => {
    cy.env(['QUEO_USER', 'QUEO_PASS']).then((env) => {
      LoginPage.login(env.QUEO_USER, env.QUEO_PASS)
    })

    LoginPage.assertLoggedIn()
  })

  it('deve acessar Settings', () => {
    SidebarPage.accessSettings()
  })

  it('deve acessar Driver', () => {
    SidebarPage.accessDriver()
  })

    it('deve acessar edit', () => {
    SidebarPage.accessEdit()
  })
})