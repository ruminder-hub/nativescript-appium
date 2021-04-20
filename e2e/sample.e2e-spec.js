"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const nativescript_dev_appium_1 = require("nativescript-dev-appium");
const chai_1 = require("chai");
const addContext = require('mochawesome/addContext');
describe("sample scenario", function () {
    return __awaiter(this, void 0, void 0, function* () {
        let driver;
        before(function () {
            return __awaiter(this, void 0, void 0, function* () {
                nativescript_dev_appium_1.nsCapabilities.testReporter.context = this;
                driver = yield nativescript_dev_appium_1.createDriver();
            });
        });
        after(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield driver.quit();
                console.log("Quit driver!");
            });
        });
        afterEach(function () {
            return __awaiter(this, void 0, void 0, function* () {
                if (this.currentTest.state === "failed") {
                    yield driver.logTestArtifacts(this.currentTest.title);
                }
            });
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
        it("Login Success testing", () => __awaiter(this, void 0, void 0, function* () {
            let el1 = yield driver.findElementByAutomationText("username");
            yield el1.sendKeys("rumi");
            let el2 = yield driver.findElementByAutomationText("password");
            yield el2.sendKeys("hello123");
            let el3 = yield driver.findElementByText("Sign in", nativescript_dev_appium_1.SearchOptions.exact);
            yield el3.click();
            let message = yield driver.findElementByAutomationTextIfExists("errorMessage");
            chai_1.assert.isUndefined(message);
        }));
        it("Login Failure testing", () => __awaiter(this, void 0, void 0, function* () {
            yield driver.resetApp();
            let el1 = yield driver.findElementByAutomationText("username");
            yield el1.sendKeys("rumi");
            let el2 = yield driver.findElementByAutomationText("password");
            yield el2.sendKeys("hello");
            let el3 = yield driver.findElementByText("Sign in", nativescript_dev_appium_1.SearchOptions.exact);
            yield el3.click();
            let message = yield driver.findElementByAutomationTextIfExists("errorMessage");
            chai_1.assert(message.text(), "Enter correct credentials");
        }));
    });
});
//# sourceMappingURL=sample.e2e-spec.js.map