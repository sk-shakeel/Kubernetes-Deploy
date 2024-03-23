import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl:"https://front.bootcamp61.ga/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  chromeWebSecurity: false,
  experimentalSessionAndOrigin: true,
});

