class DriverPageAssertions {
    assertPageLoaded() {
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

    assertTableColumnsVisible() {
        cy.get('.crud-list', { timeout: 10000 })
        .should('be.visible')
        .within(() => {
            cy.contains('Team & Organization').should('be.visible')
            cy.contains('RFID & Integration').should('be.visible')
            cy.contains('Contract Type').should('be.visible')
        })
    }

    assertRecordVisible(text) {
        cy.contains(text, { matchCase: false })
            .should('be.visible')
    }

    assertTextContainsIgnoringCase(actualText, expectedText) {
        expect(
            actualText.toLowerCase(),
            `Expected "${actualText}" to contain "${expectedText}" ignoring case`
        ).to.include(expectedText.toLowerCase())
    }
}

export default new DriverPageAssertions()