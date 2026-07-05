import LoginPage from '../pages/LoginPage'
import SidebarPage from '../pages/SidebarPage'

describe('Sidebar', () => {
    beforeEach(() => {
      LoginPage.loginWithEnv()
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