const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");
const cucumber = require("cypress-cucumber-preprocessor").default; 

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/*.feature", // ✅ Ensure correct feature file path

    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());

      // ✅ Register `downloadFile` for file downloads
      on("task", { downloadFile });

      return config;
    },
    retries: {
      runMode: 2,  // Retry failed tests up to 2 times in CI
      openMode: 0, // No retry in local dev
    },
    supportFile: false
  },
});




/*const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");
const cucumber = require("cypress-cucumber-preprocessor").default; 

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    specPattern: "cypress/e2e/features/*.feature",
  },
});*/
