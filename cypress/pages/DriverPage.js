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

    openSearch() {
        cy.get('.table-actions__find')
        .should('be.visible')
        .contains('Search')
        .click({ force: true })

        cy.get('input[placeholder="Search for name, registration or RFID"]')
        .should('be.visible')
    }

    searchByText(text) {
        this.openSearch()

        cy.get('input[placeholder="Search for name, registration or RFID"]')
            .clear()
            .type(text)

        cy.get('.crud-list')
            .should('be.visible')
            .contains(text, { matchCase: false })
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