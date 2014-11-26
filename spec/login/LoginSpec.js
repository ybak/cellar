// spec.js
describe('测试登录github', function () {


    var waitForElement = function (selector, waitFor) {
        waitFor = waitFor || 5000;
        browser.driver.manage().timeouts().implicitlyWait(waitFor);
        browser.driver.findElement(by.css(selector));
        browser.driver.manage().timeouts().implicitlyWait(0);
    }

    it('should add one and two', function () {
        browser.ignoreSynchronization = true;
        browser.get('https://github.com');
        element(by.css('a[href="/login"]')).click();

        waitForElement('div#login', 2000);

        element(by.css('input[name=login]')).sendKeys('username');
        element(by.css('input[name=password]')).sendKeys('passwword');
        element(by.css('input.button')).click();

        waitForElement('span.octicon-inbox', 2000);

    });
});
