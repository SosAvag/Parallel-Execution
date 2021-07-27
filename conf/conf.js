const {browser} = require("protractor");
const yargs = require("yargs").argv;
var HtmlReporter = require('protractor-beautiful-reporter');



exports.config = {
    directConnect: true,

    capabilities: {
        'browserName': 'chrome',
        shardTestFiles: yargs.instances >1,
        maxInstances: yargs.instances || 1,
        chromeOptions: {
            args: ['--window-size=1800,600']
        }
    },

    framework: 'jasmine',
    specs: ['../tests/**/*.spec.js'],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 300000
    },


    onPrepare: function() {
            // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
            jasmine.getEnv().addReporter(new HtmlReporter({
                baseDirectory: 'tmp/screenshots'
            }).getJasmine2Reporter());
        },




};