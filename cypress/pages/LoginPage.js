class LoginPage {
  visit() {
    cy.visit('https://qa.trixlog.com/')
  }

  fillUser(user) {
    cy.get('input').eq(0).should('be.visible').type(user)
  }

  fillPassword(password) {
    cy.get('input').eq(1).should('be.visible').type(password, { log: false })
  }

  submit() {
    cy.contains('button', /Access|Acessar/)
      .should('be.visible')
      .click()
  }

  login(user, password) {
    this.visit()
    this.fillUser(user)
    this.fillPassword(password)
    this.submit()
  }

  assertLoggedIn() {
    cy.get('.tx-sidebar').should('be.visible')
  }
}

export default new LoginPage()