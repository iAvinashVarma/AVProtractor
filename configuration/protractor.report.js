var HtmlReporter = require('protractor-beautiful-reporter');
var path = require('path');
require("babel-register")({
    presets: ['es2015']
});

exports.config = {
    seleniumAddress: "http://localhost:4444/wd/hub",
    specs: ["../spec/test/*/*Spec.js"],
    framework: 'jasmine',
    onPrepare: () => {
        // set browser size...
        browser.manage().window().maximize();

        // Better jasmine 2 reports.
        // const SpecReporter = require('jasmine-spec-reporter');
        // jasmine.getEnv().addReporter(new SpecReporter({
        //     displayStacktrace: 'specs'
        // }));
        // Add a screenshot reporter.
        jasmine.getEnv().addReporter(new HtmlReporter({
            docTitle: 'XYZ Bank',
            preserveDirectory: true,
            takeScreenShotsOnlyForFailedSpecs: false,
            screenshotsSubfolder: 'images',
            jsonsSubfolder: 'jsons',
            baseDirectory: 'reports',
            pathBuilder: function pathBuilder(spec, descriptions, results, capabilities) {
                var currentDate = new Date(),
                    day = currentDate.getDate(),
                    month = currentDate.getMonth() + 1,
                    year = currentDate.getFullYear(),
                    hours = currentDate.getHours(),
                    minutes = currentDate.getMinutes(),
                    seconds = currentDate.getSeconds();

                var validDescriptions = descriptions.map(function (description) {
                    return description.replace('/', '@');
                });

                return path.join(
                    day + "-" + month + "-" + year,
                    validDescriptions.join('-'));
            }
        }).getJasmine2Reporter());
    },

    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2,
        chromeOptions: {
            args: [
                // disable chrome's wakiness
                '--disable-infobars',
                '--disable-extensions',
                'verbose',
                '--start-maximized',
                'log-path=/tmp/chromedriver.log'
            ],
            prefs: {
                // disable chrome's annoying password manager
                'profile.password_manager_enabled': false,
                'credentials_enable_service': false,
                'password_manager_enabled': false
            }
        }
    },
    jasmineNodeOpts: {
        showColors: true,
        displaySpecDuration: true,
        print: () => {},
        defaultTimeoutInterval: 50000
    }
};