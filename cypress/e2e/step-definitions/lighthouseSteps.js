import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("I visit {string}", function (url) {
    cy.visit(url);
});

Then("The performance score should be above {int}", function (minScore) {
    cy.lighthouse({ performance: minScore });
});
