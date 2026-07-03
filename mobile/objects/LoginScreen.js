class LoginScreen {
    get usernameInput() {
        return $('~Username input field')
    }

    get passwordInput() {
        return $('~Password input field')
    }

    get loginButton() {
        return $('~Login button')
    }
}

module.exports = new LoginScreen()