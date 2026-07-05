import DriverGrid from "./DriverGrid"

class DriverExtraActions {
    validateBulkDeleteCancel() {
        cy.get('tr[id^="item_"]', { timeout: 10000 })
            .should('have.length.greaterThan', 1)

        cy.get('tr[id^="item_"]')
            .eq(0)
            .find('input[type="checkbox"], i.fa-square')
            .first()
            .click({ force: true })

        cy.get('tr[id^="item_"]')
            .eq(1)
            .find('input[type="checkbox"], i.fa-square')
            .first()
            .click({ force: true })

        cy.contains(/Delete selected/i, { timeout: 10000 })
            .should('be.visible')
            .click({ force: true })

        cy.contains(/delete these 2 items/i, { timeout: 10000 })
            .should('be.visible')

        cy.contains(/Cancel|Cancel/i)
            .should('be.visible')
            .click({ force: true })

        cy.contains(/delete these 2 items/i)
            .should('not.exist')
    }

    openRiskDetail() {
        DriverGrid.scrollToActions()
        cy.get('i.safe-driver, i.fa-exclamation-triangle', { timeout: 10000 })
            .first()
            .should('exist')
            .click({ force: true })

        cy.contains('Driver at Risk', { timeout: 10000 })
            .should('be.visible')

        cy.contains('Manual Factors')
            .should('be.visible')

        cy.contains('Cancel')
            .should('be.visible')
            .click({ force: true })
    }

    openColumnConfiguration() {
        cy.get('.table-actions__action, .fa-ellipsis-v, .fa-ellipsis-vertical', { timeout: 10000 })
            .last()
            .should('exist')
            .click({ force: true })

        cy.get('.r-dropdown-menu, .table-configuration', { timeout: 10000 })
            .should('be.visible')

        cy.contains('Name').should('be.visible')
        cy.contains('Team & Organization').should('be.visible')
        cy.contains('RFID & Integration').should('be.visible')
    }
}

export default new DriverExtraActions()