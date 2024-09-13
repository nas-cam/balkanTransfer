const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://staging.balkantransfer.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
