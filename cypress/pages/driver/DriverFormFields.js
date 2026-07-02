class DriverFormFields {
    getTextInput(label) {
        return cy.contains('label span', label)
            .parents('.text-input')
            .find('input')
    }

    fillInput(label, value) {
        this.getTextInput(label)
            .click({ force: true })

        this.getTextInput(label)
            .clear({ force: true })

        this.getTextInput(label)
            .type(String(value), {
                delay: 40,
                force: true,
            })
    }

    fillDate(label, value) {
        cy.contains('label span', label)
            .parents('.md-datepicker')
            .find('input')
            .as('dateInput')

        cy.get('@dateInput')
            .click({ force: true })
            .type('{selectall}{backspace}')
            .type(String(value), { delay: 30 })

        cy.contains('Driver Data')
            .click({ force: true })
    }

    selectAutocomplete(label, value) {
        const autocompleteInput = () => {
            return cy.contains('label span', label)
                .parents('.md-select')
                .find('input')
        }

        autocompleteInput()
            .should('be.visible')
            .click({ force: true })

        autocompleteInput()
            .type('{selectall}{backspace}', { force: true })

        cy.wrap(String(value).split('')).each((char) => {
            autocompleteInput()
                .should('be.visible')
                .type(char, { force: true, delay: 3 })
        })

        cy.get('.items__scroll')
            .filter(':visible')
            .last()
            .find('.items__scroll__item')
            .should('have.length.greaterThan', 0)
            .then(($items) => {
                const item = [...$items].find((el) =>
                    el.innerText.toLowerCase().includes(String(value).toLowerCase())
                )

                expect(item, `option "${value}"`).to.exist

                cy.wrap(item).click({ force: true })
            })
    }
}

export default new DriverFormFields()