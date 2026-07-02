class DriverFilter {
    open() {
        cy.get('.table-actions__action')
            .filter(':visible')
            .contains('Filter')
            .click({ force: true })

        cy.get('.tx-card.table-filter')
            .should('be.visible')

        cy.contains('Filters')
            .should('be.visible')
    }

    selectSearchableFilterByIndex(index, text) {
        const filterInput = () => {
            return cy.get('.tx-card.table-filter')
                .find('.table-filter__filter')
                .eq(index)
                .find('input')
        }

        cy.get('.tx-card.table-filter')
            .find('.table-filter__filter')
            .eq(index)
            .should('be.visible')
            .click({ force: true })

        filterInput()
            .should('be.visible')
            .click({ force: true })

        filterInput()
            .should('be.visible')
            .type('{selectall}{backspace}', { force: true })

        cy.wrap(String(text).split('')).each((char) => {
            filterInput()
                .should('be.visible')
                .type(char, { force: true, delay: 30 })
        })

        cy.get('.tx-card.table-filter')
            .find('.table-filter__filter')
            .eq(index)
            .contains(text, { matchCase: false })
            .should('be.visible')
            .click({ force: true })
    }

    apply() {
        cy.get('.table-filter__footer')
            .find('button')
            .last()
            .should('contain.text', 'Filter')
            .click()
    }

    clear() {
        cy.get('.table-filter__footer')
            .find('button')
            .first()
            .should('contain.text', 'Clear Filter')
            .click()
    }

    filterByTeam(team) {
        this.open()
        this.selectSearchableFilterByIndex(0, team)
        this.apply()

        cy.get('.crud-list')
            .should('contain.text', team)

        this.open()
        this.clear()
    }
}

export default new DriverFilter()