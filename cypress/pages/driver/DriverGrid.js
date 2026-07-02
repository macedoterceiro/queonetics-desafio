class DriverGrid {
    clickSearch() {
        cy.get('.table-actions__find')
            .should('be.visible')
            .contains('Search')
            .click({ force: true })
    }

    searchByText(text) {
        this.clickSearch()

        cy.intercept('POST', '**/driver/search**').as('searchDriver')

        cy.get('input[placeholder="Search for name, registration or RFID"]')
            .should('be.visible')
            .type('{selectall}{backspace}')
            .type(String(text))

        cy.wait('@searchDriver')

        cy.get('.crud-list tbody tr')
            .should('have.length.greaterThan', 0)

        cy.get('.crud-list tbody tr')
            .first()
            .should(($row) => {
                expect($row.text().toLowerCase()).to.include(String(text).toLowerCase())
            })
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

    scrollToActions() {
        cy.get('.crud-table')
            .scrollTo('right', { ensureScrollable: false })
    }

    openEditMenuFromFirstResult() {
        this.scrollToActions()

        cy.get('.crud-list tbody tr')
            .first()
            .within(() => {
                cy.get('.fa-pencil-alt')
                    .scrollIntoView()
                    .click()
            })
    }

    deleteFirstResult() {
        this.scrollToActions()

        cy.get('.crud-list tbody tr')
            .first()
            .find('.fa-trash')
            .should('exist')
            .click({ force: true })

        this.confirmDeleteIfNeeded()
    }

    confirmDeleteIfNeeded() {
        cy.get('body').then(($body) => {
            if ($body.text().includes('Are you sure')) {
                cy.contains('button', 'Delete')
                    .should('be.visible')
                    .click({ force: true })
            }
        })
    }
}

export default new DriverGrid()