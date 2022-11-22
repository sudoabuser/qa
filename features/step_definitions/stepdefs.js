const wdio = require("webdriverio");
const assert = require('assert');
const { Given, When, Then, Before, BeforeStep } = require('@cucumber/cucumber');
var { setDefaultTimeout } = require('@cucumber/cucumber');
const { isAsyncFunction } = require("util/types");
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
Before(async function main() {
    const driver = await wdio.remote(opts);
    driver.reset();
    console.log("app reset")
});
Before({tags:"@View" }, async function main(){
    const driver = await wdio.remote(opts);

// perform 9 - 3 \\
    let nine = await driver.$('~9');
    await nine.click();
    console.log(" 9 clicked");

    let minus = await driver.$('~ - ');
    await minus.click();
    console.log(" - clicked");

    let three = await driver.$('~3');
    await three.click();
    console.log("3 clicked");

    let equals = await driver.$('~=');
    await equals.click();
    console.log("result added to the history")
//               \\
    
});



// this arastir driver icin

When("bob clicks clear history", async function () {
    const driver = await wdio.remote(opts);
    let attribute = await driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button[2]');
    await attribute.click();
    console.log("history cleared");
});

Then("bob should see the history empty", async function () {
    const driver = await wdio.remote(opts);

    try {
        let attribute = await driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button')
        await attribute.click();
        console.log("history clicked");


    } catch (error) {
        throw Error("you are already in the history")
    }
    try {
        var emptySelector = 'new UiSelector().descriptionContains("Empty!")';
        var emptyElement = await driver.$('android=' + emptySelector);
        var emptyContent = await emptyElement.getAttribute("content-desc");
        assert.strictEqual("Empty!", emptyContent);
        console.log('history is clean')
    } catch (error) {
        throw Error('history is not empty!')
    }

})

Given("bob clicked AC", async function () {
    const driver = await wdio.remote(opts);
    let attribute = await driver.$('~AC');
    await attribute.click();
    console.log("AC clicked");

});

When('bob clicks the history button', async function () {
    const driver = await wdio.remote(opts);
    try {
        let attribute = await driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button')
        await attribute.click();
        console.log("history clicked");

        throw Error("you are already in the history")
    } catch (error) {
    }
});

Given("bob is on the main screen", async function () {
    const driver = await wdio.remote(opts);

    var calcSelector = 'new UiSelector().descriptionContains("Calculator")';
    var calcElement = await driver.$('android=' + calcSelector);
    var calcContent = await calcElement.getAttribute("content-desc");
    assert.strictEqual("Calculator", calcContent);
    console.log('you are on the main screen')
});

Then("bob should see the saved results in history", async function () {
    const driver = await wdio.remote(opts);

    const historyEmpty = await driver.$('~Empty!').getAttribute("content-desc");
    assert.notStrictEqual("Empty!", historyEmpty);
    console.log("you have saved operations in history!")

})

When("bob clicks <{int}>", async function (int) {
    const driver = await wdio.remote(opts);
    let attribute = await driver.$('~' + int);
    await attribute.click();
    console.log(int + " clicked");
});

When("bob clicks plus", async function () {
    const driver = await wdio.remote(opts);

    let attribute = await driver.$('~ + ');
    await attribute.click();
    console.log(" + clicked");
});

When("bob clicks divide", async function () {
    const driver = await wdio.remote(opts);

    let attribute = await driver.$('~ ÷ ');
    await attribute.click();
    console.log(" / clicked");
});

When("bob clicks minus", async function () {
    const driver = await wdio.remote(opts);

    let attribute = await driver.$('~ - ');
    await attribute.click();
    console.log(" - clicked");
});

When("bob clicks cross", async function () {
    const driver = await wdio.remote(opts);
    let attribute = await driver.$('~ × ');
    await attribute.click();
    console.log(" × clicked");
})
Then("bob should see the result <{int}>", async function (int) {
    const driver = await wdio.remote(opts);
    let attribute = await driver.$('~' + int);

    var resultSelector = 'new UiSelector().className("android.view.View").descriptionContains("result")';
    var resultElement = await driver.$('android=' + resultSelector);
    var resultContent = await resultElement.getAttribute("content-desc") + ' ';
    console.log("result: ", resultContent.slice(7, -1));
    assert.equal(int, resultContent.slice(7, -1));
})

When("bob clicks =", async function () {
    // 'saved' yazisi cekilip double check yapilabilir
    const driver = await wdio.remote(opts);

    let attribute = await driver.$('~=');
    await attribute.click();
    console.log("= clicked, result added to the history.")
})
When("bob clicks ⌫", async function () {
    const driver = await wdio.remote(opts);
    let attribute = await driver.$('~⌫');
    await attribute.click();
    console.log("⌫ clicked, " + "last action deleted.")
})