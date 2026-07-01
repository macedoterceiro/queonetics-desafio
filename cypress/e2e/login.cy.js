import LoginPage from '../pages/LoginPage'

describe('Login', () => {
  it('should login and logout successfully', () => {
    cy.env(['QUEO_USER', 'QUEO_PASS']).then((env) => {
      LoginPage.login(env.QUEO_USER, env.QUEO_PASS)
    })

    LoginPage.assertLoggedIn()

  })
})