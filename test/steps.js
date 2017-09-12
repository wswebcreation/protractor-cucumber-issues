const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, When, Then}) => {
    Given(/^I (foo|bar)$/, (fooBar) => Promise.resolve(`I ${fooBar}`));
    When(/^I (foo|bar) it$/, (fooBar) => Promise.resolve(`I ${fooBar} it`));
    Then(/^I (foo|bar) till I (foo|bar)$/, (fooBar, barFoo) => Promise.resolve(`I ${fooBar} till I ${barFoo}`));
});
