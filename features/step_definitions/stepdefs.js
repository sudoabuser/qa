const wdio = require("webdriverio");
const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
var { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(100000);



const opts = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
        noReset: true,
        platformName: "Android",
        deviceName: "emulator-5554",
        app: "/home/sudoabuser/flutter-calculator/build/app/outputs/flutter-apk/app-debug.apk",
        automationName: "Appium",
        dontStopAppOnReset: true,
        fullReset: false

    },
    logLevel: "error"

};
const driver = wdio.remote(opts);


async function main() {
  

    var sumVar = 0;
    var productVar = 1;
    var divisionVar = 1;
    var subtractionVar = 0;

    
    Given("bob clicked AC", async function () {
        let attribute = await driver.$('~AC');
        sumVar = 0;
        productVar = 1;

        
        await attribute.click();
        console.log("AC clicked");
    });

    When("bob clicks <{int}>", async function (int) {
        const driver = wdio.remote(opts);
        productVar *= int;
        sumVar += int;
        divisionVar /= int;
        subtractionVar -= int;
        // geldiginde bunu bosverip ekrandaki texti cekmeye calis // // tesekkurler kiyam <3

        let attribute = await driver.$('~' + int);
        await attribute.click();
        console.log(int + " clicked");
    });


    When("bob clicks plus", async function () {
        const driver = wdio.remote(opts);

        let attribute = await driver.$('~ + ');
        await attribute.click();
        console.log(" + clicked");
    });

    When("bob clicks divide", async function () {
        const driver = wdio.remote(opts);

        let attribute = await driver.$('~ ÷ ');
        await attribute.click();
        console.log(" / clicked");
    });

    When("bob clicks minus", async function () {
        const driver = wdio.remote(opts);


        let attribute = await driver.$('~ - ');
        await attribute.click();
        console.log(" - clicked");
    });

    When("bob clicks cross", async function () {
        const driver = wdio.remote(opts);
        let attribute = await driver.$('~ × ');
        await attribute.click();
        console.log(" × clicked");
    })
    Then("bob should see the result <{int}>", async function (int) {
        const driver = wdio.remote(opts);
        let attribute = await driver.$('~' + int);
        console.log("sum is: " + sumVar);

        var resultSelector = 'new UiSelector().descriptionContains("result")';
        const resultText = await driver.$('android=' + resultSelector).getText();

        console.log("RESULT_TEXT: " + resultText);
        assert.strictEqual(int, resultText);
        try {

            assert.strictEqual(int, resultText);
        } catch (error) {
            throw Error("Custom error occured")
            console.log("Error is caught: ", error);
        }

    })




    // Then("bob should see the multiplication result <{int}>", async function (int) {
    //      
    //     let attribute = await driver.$('~' + int);
    //     console.log("product is: " + productVar);

    //     assert.strictEqual(int, productVar);
    // })

    // Then("bob should see the subtraction result <{int}>", async function (int) {
    //      
    //     let attribute = await driver.$('~' + int);
    //     console.log("substraction is: " + subtractionVar);

    //     assert.strictEqual(int, subtractionVar);
    // })

    // Then("bob should see the division result <{int}>", async function (int) {
    //      
    //     let attribute = await driver.$('~' + int);
    //     console.log("divison is: " + divisionVar);

    //     assert.strictEqual(int, divisionVar);
    // })
}

main()
