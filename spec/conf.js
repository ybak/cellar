// conf.js
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumServerJar:'',
    specs: ['**/*Spec.js'],
    capabilities: {
        'browserName': 'chrome'
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
}
