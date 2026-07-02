import DriverPageAssertions from './DriverPageAssertions'
import DriverFilter from './DriverFilter'
import DriverForm from './DriverForm'
import DriverQuickEdit from './DriverQuickEdit'
import DriverFullEdit from './DriverFullEdit'
import DriverGrid from './DriverGrid'

class DriverPage {
    constructor() {
        this.assertions = DriverPageAssertions
        this.filter = DriverFilter
        this.grid = DriverGrid
        this.form = DriverForm
        this.quickEdit = DriverQuickEdit
        this.fullEdit = DriverFullEdit
    }

    assertLoaded() {
        this.assertions.assertPageLoaded()
    }

    createBasicDriver(driver) {
        this.form.clickCreateNew()
        this.form.fillPersonalData(driver)

        if (driver.credential) {
            this.form.addCredential(driver.credential)
        }

        this.form.save()
    }

    createCompleteDriver(driver) {
        this.form.clickCreateNew()
        this.form.fillPersonalData(driver)
        this.form.fillDocumentation(driver)
        this.form.fillContact(driver)

        if (driver.credential) {
            this.form.addCredential(driver.credential)
        }

        this.form.save()
    }

    updateDriverUsingQuickEdit(searchText, driver) {
        this.grid.searchByText(searchText)
        this.grid.openEditMenuFromFirstResult()
        this.quickEdit.open()
        this.quickEdit.update(driver)
    }

    updateBasicDriver(searchText, driver) {
        this.grid.searchByText(searchText)
        this.grid.openEditMenuFromFirstResult()
        this.fullEdit.open()
        this.form.fillPersonalData(driver)
        this.form.save()
    }

    updateCompleteDriver(searchText, driver) {
        this.grid.searchByText(searchText)
        this.grid.openEditMenuFromFirstResult()
        this.fullEdit.open()
        this.form.fillPersonalData(driver)
        this.form.fillDocumentation(driver)
        this.form.fillContact(driver)

        if (driver.credential) {
            this.form.addCredential(driver.credential)
        }

        this.form.save()
    }

    deleteFirstDriverBySearch(text) {
        this.grid.searchByText(text)
        this.grid.deleteFirstResult()
    }
}

export default new DriverPage()