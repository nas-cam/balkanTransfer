const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    testIsolation: false,
    baseUrl: 'https://staging.balkantransfer.com/'
  },

});
