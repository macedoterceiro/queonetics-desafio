class MenuScreen {
    get menuButton() {
        return $('//android.view.ViewGroup[@content-desc="open menu"]')
    }

    get loginOption() {
        return $('android=new UiSelector().text("Log In")')
    }

    get logoutOption() {
        return $('android=new UiSelector().text("Log Out")')
    }
}

module.exports = new MenuScreen()