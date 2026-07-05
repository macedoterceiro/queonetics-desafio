class SidebarPage {
    get sidebar() {
        return cy.get('.tx-sidebar', { timeout: 15000 })
    }

    expandSidebar() {
        cy.get('.tx-sidebar', { timeout: 15000 })
            .should('exist')
            .then(($sidebar) => {
                if ($sidebar.hasClass('tx-sidebar--folded')) {
                    cy.get('.tx-sidebar__expand-icon')
                        .then(($icon) => {
                            if ($icon.is(':visible')) {
                                cy.wrap($icon).click({ force: true })
                            }
                        })
                }
            })

        cy.get('.tx-sidebar', { timeout: 15000 })
            .should('exist')
    }

    openModule(moduleName) {
        this.expandSidebar()

        cy.contains('.tx-sidebar__item__title', moduleName, { timeout: 15000 })
            .should('exist')
            .click({ force: true })
    }

    accessSettings() {
        this.openModule('Dashboard')

        cy.get('a.tx-sidebar__subitem[href="#/dashboard/manager"]', { timeout: 10000 })
        .should('be.visible')
        .click()

        cy.url().should('include', '/manager')
    }

    accessDriver() {
        this.openModule('Fleet')

        cy.get('a.tx-sidebar__subitem[href="#/driver"]', { timeout: 10000 })
            .should('be.visible')
            .click({ force: true })

        cy.url().should('include', '#/driver')

        cy.get('body').click(900, 100, { force: true })

        cy.contains('h1, h2, .page-title, .tx-title', 'Drivers', { timeout: 10000 })
            .should('be.visible')
    }

    openUserMenu() {
        this.expandSidebar()

        cy.get('.tx-sidebar__user', { timeout: 10000 })
        .should('be.visible')
        .click({ force: true })
    }

    accessEdit() {
        this.openUserMenu()

        cy.get('.tx-sidebar__user__icon', { timeout: 10000 })
        .click({ force: true })

        cy.contains(/Information/, { timeout: 10000 })
        .should('be.visible')
        .click({ force: true })

        cy.url().should('include', '/edit')
    }

    logout() {
        this.openUserMenu()

        cy.get('.tx-sidebar__user__icon', { timeout: 10000 })
        .click({ force: true })

        cy.contains(/Logout/, { timeout: 10000 })
        .should('be.visible')
        .click({ force: true })
    }
}

export default new SidebarPage()