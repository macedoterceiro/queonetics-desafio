class DriverPage {

    //Verificações da página
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

    assertTableVisible(find) {
        cy.contains(find).should('be.visible') // Validando a existencia de um registro que atenda o filtro de busca.
    } //Caso precise validar todas as respostas verificar nome e RFID se é compatível com o filtro de busca. Lembrar que o filtro aceita parcial.

    assertTextContainsIgnoringCase(actualText, expectedText) {
        expect(
            actualText.toLowerCase(),
            `Expected "${actualText}" to contain "${expectedText}" ignoring case`
        ).to.include(expectedText.toLowerCase())
    }

    //Ação de busca
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

        cy.intercept('POST', '**/driver/search**').as('searchDriver')

        cy.get('input[placeholder="Search for name, registration or RFID"]')
            .should('be.visible')
            .type('{selectall}{backspace}')
            .type(text)

        cy.wait('@searchDriver')

        cy.get('.crud-list tbody tr')
            .should('have.length.greaterThan', 0)

        cy.get('.crud-list tbody tr')
            .first()
            .should(($row) => {
                expect($row.text().toLowerCase()).to.include(text.toLowerCase())
            })
    }

    //Ação de filtro
    openFilter() {
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
        cy.get('.tx-card.table-filter')
            .find('.table-filter__filter')
            .eq(index)
            .should('be.visible')
            .click({ force: true })

        cy.get('.tx-card.table-filter')
            .find('.table-filter__filter')
            .eq(index)
            .find('input')
            .should('be.visible')
            .click({ force: true })

        cy.get('.tx-card.table-filter')
            .find('.table-filter__filter')
            .eq(index)
            .find('input')
            .should('be.visible')
            .type(text, { delay: 100 })

        cy.get('.tx-card.table-filter')
            .find('.table-filter__filter')
            .eq(index)
            .contains(text, { matchCase: false })
            .should('be.visible')
            .click({ force: true })
    }

    selectFilterByIndex(index, optionText) {
        cy.get('.table-filter__filter')
            .eq(index)
            .should('be.visible')
            .click({ force: true })

        cy.contains(optionText)
            .should('be.visible')
            .click({ force: true })
    }

    selectTeam(team) {
        this.selectFilterByIndex(0, team)
    }

    selectOrganization(organization) {
        this.selectFilterByIndex(1, organization)
    }

    selectStatus(status) {
        this.selectFilterByIndex(2, status)
    }

    selectType(type) {
        this.selectFilterByIndex(3, type)
    }

    selectContractType(contractType) {
        this.selectFilterByIndex(4, contractType)
    }

    selectLicenseStatus(licenseStatus) {
        this.selectFilterByIndex(5, licenseStatus)
    }

    selectDriverAtRisk(value) {
        this.selectFilterByIndex(6, value)
    }

    applyFilter() {
        cy.get('.table-filter__footer')
            .find('button')
            .last()
            .should('contain.text', 'Filter')
            .click()
    }

    clearFilter() {
        cy.get('.table-filter__footer')
            .find('button')
            .first()
            .should('contain.text', 'Clear Filter')
            .click()
    }

    filterByTeam(team) {
        this.openFilter()
        this.selectSearchableFilterByIndex(0, team)
        this.applyFilter()

        cy.get('.crud-list')
            .should('contain.text', team)
            //.wait(2000) //Apenas para validação visual, não é necessário para o teste

        this.openFilter()
        this.clearFilter()
    }

    //Ação de exportação
    clickExport() {
        cy.get('.table-actions__action')
        .filter(':visible')
        .contains('Export')
        .click({ force: true })

        cy.readFile('cypress/downloads/driver-01-07-2026.xlsx', {
        timeout: 10000,
        }).should('exist')
    }

    //Ação de criação de novo registro
    clickCreateNew() {
        cy.get('.table-actions__action')
            .filter(':visible')
            .contains('Create New')
            .click({ force: true })
    }

    //Ação de exclusão de registro
    deleteFirstResultBySearch(text) {
        this.searchByText(text)

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

export default new DriverPage()