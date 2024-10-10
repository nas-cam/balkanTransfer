const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    chromeWebSecurity: false,
    testIsolation: false,
    baseUrl: 'https://staging.balkantransfer.com/'
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: false
  },

});
