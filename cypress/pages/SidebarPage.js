class SidebarPage {

    expandSidebar() {
        cy.get('.tx-sidebar').then(($sidebar) => {
            if ($sidebar.hasClass('tx-sidebar--folded')) {
                cy.get('.tx-sidebar__expand-icon').click({ force: true })
            }
        })

        cy.get('.tx-sidebar')
        .should('not.have.class', 'tx-sidebar--folded')
    }

    openModule(moduleName) {
        this.expandSidebar()

        cy.contains('.tx-sidebar__item__title', moduleName)
            .should('be.visible')
            .click({ force: true })
    }

    accessSettings() {
        this.openModule('Dashboard')

        cy.get('a.tx-sidebar__subitem[href="#/dashboard/manager"]')
            .should('be.visible')
            .click()

        cy.url().should('include', '/manager')
    }

    accessDriver() {
        this.openModule('Fleet')

        cy.get('a.tx-sidebar__subitem[href="#/driver"]')
            .should('be.visible')
            .click()

        cy.url().should('include', '#/driver')
    }

    openUserMenu() {
        this.expandSidebar()

        cy.get('.tx-sidebar__user')
            .click({ force: true })
    }

    accessEdit() {
        this.openUserMenu()

        cy.get('.tx-sidebar__user__icon')
            .click({ force: true })

        cy.contains(/Information/)
            .should('be.visible')
            .click({ force: true })

        cy.url().should('include', '/edit')
    }

    logout() {
        this.openUserMenu()

        cy.get('.tx-sidebar__user__icon')
            .click({ force: true })

        cy.contains(/Logout/)
            .should('be.visible')
            .click({ force: true })
    }
}

export default new SidebarPage()