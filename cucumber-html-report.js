const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/cucumber-json", // ✅ Directory where Cucumber JSON files are stored
  reportPath: "cypress/cucumber-html-report", // ✅ Directory where HTML report will be generated
  metadata: {
    browser: {
      name: "chrome",
      version: "131"
    },
    device: "Local test machine",
    platform: {
      name: "macOS",
      version: "Sequoia"
    },
  },
  customData: {
    title: "Test Execution Report",
    data: [
      { label: "Project", value: "SauceDemo Cypress Tests" },
      { label: "Execution Date", value: new Date().toLocaleString() },
    ],
  },
});