import { AppiumDriver, createDriver, SearchOptions, nsCapabilities } from "nativescript-dev-appium";
import { assert } from "chai";
const addContext = require('mochawesome/addContext');

describe("sample scenario", async function(){
    let driver: AppiumDriver;

    before(async function(){
        nsCapabilities.testReporter.context = this; 
        driver = await createDriver();
    });

    after(async function () {
        await driver.quit();
        console.log("Quit driver!");
    });

    afterEach(async function () {
        if (this.currentTest.state === "failed") {
            await driver.logTestArtifacts(this.currentTest.title);
        }
    });

    // it("should find an element by text", async function () {
    //     const btnTap = await driver.findElementByAutomationText("TAP");
    //     await btnTap.click();

    //     const message = " taps left";
    //     const lblMessage = await driver.findElementByText(message, SearchOptions.contains);
    //     assert.equal(await lblMessage.text(), "41" + message);

    //     // Image verification
    //     // const screen = await driver.compareScreen("hello-world-41");
    //     // assert.isTrue(screen);
    // });

    // it("should find an element by type", async function () {
    //     const btnTap = await driver.findElementByClassName(driver.locators.button);
    //     await btnTap.click();

    //     const message = " taps left";
    //     const lblMessage = await driver.findElementByText(message, SearchOptions.contains);
    //     assert.equal(await lblMessage.text(), "40" + message);
    // });

    it("Login Success testing", async () => {
        let el1 = await driver.findElementByAutomationText("username");
        await el1.sendKeys("rumi");
        let el2 = await driver.findElementByAutomationText("password");
        await el2.sendKeys("hello123");
        let el3 = await driver.findElementByText("Sign in", SearchOptions.exact);
        await el3.click();
        let message = await driver.findElementByAutomationTextIfExists("errorMessage");
        
        assert.isUndefined(message);
    });

    it("Login Failure testing", async () => {
        await driver.resetApp();
        let el1 = await driver.findElementByAutomationText("username");
        await el1.sendKeys("rumi");
        let el2 = await driver.findElementByAutomationText("password");
        await el2.sendKeys("hello");
        let el3 = await driver.findElementByText("Sign in", SearchOptions.exact);
        await el3.click();
        let message = await driver.findElementByAutomationTextIfExists("errorMessage");
        
        assert(message.text(), "Enter correct credentials");
    });

    
});