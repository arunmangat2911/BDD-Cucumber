const { rimraf } = require("rimraf");

const testResultsDir = "./cypress/test-results";

rimraf(testResultsDir)
  .then(() => {
    console.log("Results folder deleted.");
  })
  .catch((err) => {
    console.error("Error deleting results folder:", err);
  });
