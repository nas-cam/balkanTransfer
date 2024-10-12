const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
      setupNodeEvents(on, config) {
    },
    chromeWebSecurity: false,
    testIsolation: false,
    baseUrl: 'https://staging.balkantransfer.com/'
  },
  reporter: 'mocha-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome, mocha-junit-reporter',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true
    },
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/test-results-[hash].xml',
      toConsole: true
    }
  },
});
