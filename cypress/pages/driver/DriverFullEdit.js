class DriverFullEdit {
    open() {
        cy.intercept({ method: /GET|POST/, url: '**/driver/**' }).as('getDriver')

        cy.get('.r-dropdown-menu')
            .contains('Full Edit')
            .should('be.visible')
            .click({ force: true })

        cy.wait('@getDriver')

        cy.contains('h3', /Edit Driver/i)
            .should('be.visible')

        cy.contains('label span', 'Name')
            .parents('.text-input')
            .find('input')
            .should('not.have.value', '')
    }
}

export default new DriverFullEdit()