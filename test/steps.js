module.exports = function () {
    this.Given(/^I (foo|bar)$/, (fooBar) => Promise.resolve(`I ${fooBar}`));
    this.When(/^I (foo|bar) it$/, (fooBar) => Promise.resolve(`I ${fooBar} it`));
    this.Then(/^I (foo|bar) till I (foo|bar)$/, (fooBar, barFoo) => Promise.resolve(`I ${fooBar} till I ${barFoo}`));
};
