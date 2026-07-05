class LoginPage {
  visit() {
    cy.visit('https://qa.trixlog.com/')
  }

  login(user, password) {
    cy.get('input').eq(0)
      .should('be.visible')
      .clear()
      .type(user)

    cy.get('input').eq(1)
      .should('be.visible')
      .clear()
      .type(password, { log: false })

    cy.contains('button', 'Access')
      .should('be.visible')
      .click()
  }

  loginWithEnv() {
    this.visit()
    cy.env(['QUEO_USER', 'QUEO_PASS']).then((env) => {
      this.login(env.QUEO_USER, env.QUEO_PASS)
    })
  }

  assertLoggedIn() {
    cy.get('.tx-sidebar', { timeout: 15000 })
      .should('exist')
      .and('be.visible')
  }
}

export default new LoginPage()