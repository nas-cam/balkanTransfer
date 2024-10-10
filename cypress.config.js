const { defineConfig } = require('cypress');
const cypressJunit = require('cypress-junit-reporter');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Register the JUnit reporter
      on('after:run', (results) => {
        return cypressJunit(results);
      });
    },
    chromeWebSecurity: false,
    testIsolation: false,
    baseUrl: 'https://staging.balkantransfer.com/'
  },
  reporter: 'cypress-junit-reporter',
  reporterOptions: {
    mochaFile: 'results/junit-[hash].xml',
    toConsole: true,
  },

});
