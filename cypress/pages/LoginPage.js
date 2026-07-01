class LoginPage {
  visit() {
    cy.visit('https://qa.trixlog.com/')
  }

  login(user, password) {
    this.visit()

    cy.get('input').eq(0).should('be.visible').type(user)

    cy.get('input').eq(1).should('be.visible').type(password, { log: false })

    cy.contains('button', 'Access')
      .should('be.visible')
      .click()
  }

  loginWithEnv() {
    cy.env(['QUEO_USER', 'QUEO_PASS']).then((env) => {
      this.login(env.QUEO_USER, env.QUEO_PASS)
    })
  }

  assertLoggedIn() {
    cy.get('.tx-sidebar').should('be.visible')
  }
}

export default new LoginPage()