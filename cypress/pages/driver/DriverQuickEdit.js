class DriverQuickEdit {
    open() {
        cy.get('.r-dropdown-menu')
            .contains('Quick Edit')
            .should('be.visible')
            .click({ force: true })

        cy.get('.item-edit')
            .should('be.visible')
    }

    fillInput(label, value) {
        cy.get('.item-edit')
            .contains('label span', label)
            .parents('.text-input')
            .find('input')
            .should('be.visible')
            .click({ force: true })
            .type('{selectall}{backspace}', { force: true })
            .type(String(value), { force: true, delay: 30 })
    }

    confirm() {
        cy.get('.item-edit')
            .find('.fa-check, .fa-check-circle')
            .should('be.visible')
            .click({ force: true })
    }

    update(driver) {
        if (driver.registration) {
            this.fillInput('Registration', driver.registration)
        }

        if (driver.integration) {
            this.fillInput('Integration', driver.integration)
        }

        if (driver.rfid) {
            this.fillInput('RFID', driver.rfid)
        }

        this.confirm()
    }
}

export default new DriverQuickEdit()