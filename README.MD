# protractor-cucumber-issues

This project will demonstrate the problems with the modules:

- [Protractor](https://github.com/angular/protractor)
- [CucumberJS](https://github.com/cucumber/cucumber-js)
- [protractor-cucumber-framework](https://github.com/protractor-cucumber-framework/protractor-cucumber-framework)


There are 4 branches that will use the following versions

- **Version 1:**
  - Protractor: `5.1.2`
  - CucumberJS: `1.3.3`
  - protractor-cucumber-framework: `3.1.2`

- **Version 2a:**
  - Protractor: `5.1.2`
  - CucumberJS: `2.3.1`
  - protractor-cucumber-framework: `3.1.2`

- **Version 2b:**
  - Protractor: `5.1.2`
  - CucumberJS: `2.3.1`
  - protractor-cucumber-framework: `4.0.4`

- **Version 3:**
  - Protractor: `5.1.2`
  - CucumberJS: `3.0.1`
  - protractor-cucumber-framework: `4.0.4`


## Usage
Checkout the branches with

- `git checkout version-1`
- `git checkout version-2a`
- `git checkout version-2b`
- `git checkout version-3`

and do a `npm install` after each checkout. To run the tests run `npm test`


## Outcome:

### `version-1`
```shell
> node node_modules/.bin/protractor protractor.conf.js

[08:36:39] I/launcher - Running 2 instances of WebDriver
......[08:36:42] I/testLogger -
------------------------------------

[08:36:42] I/testLogger - [chrome #01-1] PID: 55857
[chrome #01-1] Specs: /Users/wswebcreation/contributions/protractor-cucumber-issues/test/foo.feature
[chrome #01-1]
[chrome #01-1] [08:36:39] I/local - Starting selenium standalone server...
[chrome #01-1] [08:36:40] I/local - Selenium standalone server started at http://10.236.51.107:64246/wd/hub
[chrome #01-1] Feature: Foo until you bar
[chrome #01-1]
[chrome #01-1]   Scenario: I want to foo
[chrome #01-1]   ✔ Given I foo
[chrome #01-1]   ✔ When I foo it
[chrome #01-1]   ✔ Then I foo till I bar
[chrome #01-1]
[chrome #01-1] 1 scenario (1 passed)
[chrome #01-1] 3 steps (3 passed)
[chrome #01-1] 0m00.001s
[chrome #01-1] [08:36:42] I/local - Shutting down selenium standalone server.

[08:36:42] I/testLogger -

[08:36:42] I/launcher - 1 instance(s) of WebDriver still running
[08:36:42] I/testLogger -
------------------------------------

[08:36:42] I/testLogger - [chrome #01-0] PID: 55856
[chrome #01-0] Specs: /Users/wswebcreation/contributions/protractor-cucumber-issues/test/bar.feature
[chrome #01-0]
[chrome #01-0] [08:36:39] I/local - Starting selenium standalone server...
[chrome #01-0] [08:36:40] I/local - Selenium standalone server started at http://10.236.51.107:58623/wd/hub
[chrome #01-0] Feature: Bar until you foo
[chrome #01-0]
[chrome #01-0]   Scenario: I want to bar
[chrome #01-0]   ✔ Given I bar
[chrome #01-0]   ✔ When I bar it
[chrome #01-0]   ✔ Then I bar till I foo
[chrome #01-0]
[chrome #01-0] 1 scenario (1 passed)
[chrome #01-0] 3 steps (3 passed)
[chrome #01-0] 0m00.001s
[chrome #01-0] [08:36:42] I/local - Shutting down selenium standalone server.

[08:36:42] I/testLogger -

[08:36:42] I/launcher - 0 instance(s) of WebDriver still running
[08:36:42] I/launcher - chrome #01-1 passed
[08:36:42] I/launcher - chrome #01-0 passed
```
