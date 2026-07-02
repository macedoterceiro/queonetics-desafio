import DriverFormFields from './DriverFormFields'
import DriverCredentialModal from './DriverCredentialModal'

class DriverForm {
    constructor() {
        this.fields = DriverFormFields
        this.credential = DriverCredentialModal
    }

    clickCreateNew() {
        cy.contains('Create New')
            .should('be.visible')
            .click({ force: true })

        cy.contains('Create driver')
            .should('be.visible')
    }

    goToTab(tabName) {
        cy.contains(tabName)
            .should('be.visible')
            .click({ force: true })
    }

    fillPersonalData(driver) {
        this.fields.fillInput('Name', driver.name)
        this.fields.selectAutocomplete('Driver Type', driver.driverType)
        this.fields.selectAutocomplete('Contract Type', driver.contractType)
        this.fields.selectAutocomplete('Team', driver.team)
        this.fields.selectAutocomplete('Status', driver.status)
        this.fields.fillInput('Registration', driver.registration)

        if (driver.registrationCode) {
            this.fields.fillInput('Registration Code', driver.registrationCode)
        }

        if (driver.greenMileCode) {
            this.fields.fillInput('GreenMile® Code', driver.greenMileCode)
        }

        if (driver.admissionDate) {
            this.fields.fillDate('Admission Date', driver.admissionDate)
        }
    }

    fillDocumentation(driver) {
        this.goToTab('Documentation')

        this.fields.fillInput('National ID Number / Identity Document (ID)', driver.nationalId)
        this.fields.fillInput('Tax Identification Number', driver.taxId)
        this.fields.fillDate('Date of Birth', driver.dateOfBirth)

        this.fields.fillInput('License', driver.license)
        this.fields.selectAutocomplete('License Category', driver.licenseCategory)
        this.fields.fillInput('License Register', driver.licenseRegister)
        this.fields.fillInput('Driver Record Number', driver.driverRecordNumber)
        this.fields.fillDate('License Issue Date', driver.licenseIssueDate)
        this.fields.fillDate('Expiration', driver.expiration)
        this.fields.fillDate('Date of First Driver’s License', driver.firstLicenseDate)
    }

    fillContact(driver) {
        this.goToTab('Contact')

        this.fields.fillInput('Phone', driver.phone)
        this.fields.fillInput('E-mail', driver.email)
        this.fields.fillInput('Street', driver.street)
        this.fields.fillInput('Number', driver.number)
        this.fields.fillInput('Complement', driver.complement)
        this.fields.fillInput('District', driver.district)
        this.fields.fillInput('ZIP Code', driver.zipCode)
        this.fields.selectAutocomplete('State', driver.state)
        this.fields.fillInput('City', driver.city)
    }

    addCredential(credential) {
        this.goToTab('Credentials')
        this.credential.add(credential, this.fields)
    }

    save() {
        cy.intercept({ method: /POST|PUT|PATCH/, url: '**/driver**' }).as('saveDriver')

        cy.contains('button', 'Save')
            .should('be.visible')
            .click({ force: true })

        cy.wait('@saveDriver', { timeout: 15000 })
            .its('response.statusCode')
            .should('be.oneOf', [200, 201, 204])
    }
}

export default new DriverForm()