const path = require('path');

exports.config = {

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        require: [
            path.resolve(process.cwd(), './test/**/*steps.js')
        ],
        format: 'json:results.json',
        strict: true
    },

    specs: [
        path.resolve(process.cwd(), './test/**/*.feature')
    ],

    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2,
        chromeOptions: {
            args: ['disable-infobars']
        }
    }
};
