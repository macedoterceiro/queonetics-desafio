class BasePage {
    async click(element) {
        await element.waitForDisplayed({ timeout: 10000 })
        await element.click()
    }

    async type(element, value) {
        await element.waitForDisplayed({ timeout: 10000 })
        await element.click()
        await element.clearValue()
        await element.setValue(value)
    }

    async expectVisible(element) {
        await element.waitForDisplayed({ timeout: 10000 })
        await expect(element).toBeDisplayed()
    }

    async dismissAndroidCompatibilityDialogIfVisible() {
        const dontShowAgainButton = await $('android=new UiSelector().resourceId("android:id/button1")')

        if (await dontShowAgainButton.isExisting()) {
            await dontShowAgainButton.click()
        }
    }
}

module.exports = new BasePage()