class MenuScreen {
    get menuButton() {
        return $('~open menu')
    }

    get catalogOption() {
        return $('~menu item catalog')
    }

    get loginOption() {
        return $('~menu item log in')
    }

    get logoutOption() {
        return $('~menu item log out')
    }

    get confirmLogoutButton() {
        return $('android=new UiSelector().resourceId("android:id/button1").text("LOG OUT")')
    }

    get logoutSuccessOkButton() {
        return $('android=new UiSelector().resourceId("android:id/button1").text("OK")')
    }

    get loginScreen() {
        return $('~login screen')
    }
}

module.exports = new MenuScreen()