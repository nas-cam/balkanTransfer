require('dotenv').config({ path: '.env.stg' });
import { defineConfig } from "cypress";


export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.baseUrl = process.env.CYPRESS_BASE_URL;

      return config;
    },
  },
});
