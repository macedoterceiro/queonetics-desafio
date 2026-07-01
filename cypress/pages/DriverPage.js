class DriverPage {

    assertDriverPageLoaded() {
        cy.url().should('include', '#/driver')

        cy.contains('h1, h2, h3', 'Drivers')
        .should('be.visible')

        cy.get('.crud-list')
        .should('be.visible')
    }

    assertTableActionsVisible() {
        cy.contains('Create New').should('be.visible')
        cy.contains('Search').should('be.visible')
        cy.contains('Filter').should('be.visible')
        cy.contains('Export').should('be.visible')
    }

    assertTableVisible() {
        cy.get('.crud-list').should('be.visible')

        cy.contains('Name').should('be.visible')
        cy.contains('Team & Organization').should('be.visible')
        cy.contains('RFID & Integration').should('be.visible')
        cy.contains('Contract Type').should('be.visible')
    }

    clickSearch() {
        cy.get('.table-actions__find')
            .should('be.visible')
            .contains('Search')
            .click({ force: true })
    }

    clearSearch() {
        cy.get('input[placeholder="Search for name, registration or RFID"]')
            .parent()
            .find('.fa-times, .fa-xmark, i')
            .click({ force: true })
    }

    searchByText(text) {
        this.clickSearch()

        cy.get('input[placeholder="Search for name, registration or RFID"]')
            .clear()
            .type(text)
            //.wait(2000) //Apenas para validação visual, não é necessário para o teste

        cy.get('.crud-list')
            .contains(text, { matchCase: false })
            .should('be.visible')
            .then(() => {
                this.clearSearch()
                this.clickSearch()
            })

    }

    openFilter() {
        cy.get('.table-actions__action')
        .filter(':visible')
        .contains('Filter')
        .click({ force: true })

        cy.contains('Filters')
        .should('be.visible')
    }

    filterByTeam(team) {
        this.openFilter()

        cy.contains('Filters')
        .parent()
        .within(() => {
            cy.contains('Team')
            .click({ force: true })
        })

        cy.contains(team)
        .should('be.visible')
        .click({ force: true })

        cy.contains('button', 'Filter')
        .should('be.visible')
        .click()
    }

    clearFilter() {
        this.openFilter()

        cy.contains('Clear Filter')
        .should('be.visible')
        .click()
    }

    clickExport() {
        cy.get('.table-actions__action')
        .filter(':visible')
        .contains('Export')
        .click({ force: true })

        cy.readFile('cypress/downloads/driver-01-07-2026.xlsx', {
        timeout: 10000,
        }).should('exist')
    }

    assertTableVisible(name) {
        cy.contains(name).should('be.visible')
        cy.contains('Team & Organization').should('be.visible')
        cy.contains('RFID & Integration').should('be.visible')
        cy.contains('Contract Type').should('be.visible')
    }
}

export default new DriverPage()