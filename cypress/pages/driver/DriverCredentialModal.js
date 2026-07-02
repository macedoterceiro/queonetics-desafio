class DriverCredentialModal {
    add(credential, fields) {
        cy.contains('Add Credential...')
            .should('be.visible')
            .click({ force: true })

        fields.selectAutocomplete('New Credential', credential.type)

        cy.contains('button', 'Continue')
            .should('be.visible')
            .click({ force: true })

        switch (credential.type) {
            case 'RFID':
                fields.fillInput('RFID Code', credential.code)
                break

            case 'IBUTTON':
                fields.fillInput('IBUTTON Code', credential.code)
                break

            case 'Bluetooth Card':
                fields.fillInput('Serial', credential.serial)
                break

            case 'Safety':
            case 'BINO':
                fields.fillInput('User', credential.user)
                fields.fillInput('Password', credential.password)
                break

            case 'GeoSafe':
                fields.fillInput('GeoSafe Code', credential.code)
                this.selectVehicle(credential.vehicle, fields)
                break

            default:
                throw new Error(`Unsupported credential type: ${credential.type}`)
        }

        this.confirmAdd()
    }

    selectVehicle(vehicle, fields) {
        fields.selectAutocomplete('Vehicle', vehicle)
    }

    confirmAdd() {
        cy.get('.modal')
            .should('be.visible')
            .within(() => {
                cy.contains('button.tx-button--primary', 'Add')
                    .should('be.visible')
                    .and('not.be.disabled')
                    .click({ force: true })
            })

        cy.get('.modal')
            .should('not.exist')
    }
}

export default new DriverCredentialModal()