import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

Given("I have a GET API endpoint", function(dataTable) {
    const url = dataTable.rawTable[0][1];
    cy.request('GET', url).as("apiResponse");
})

When("The response status should be 200", function() {
    cy.get("@apiResponse").its('status').should('eq', 200);
})

Then("The response should contain the title", function () {
    cy.get("@apiResponse").then((response) => {
      expect(response.body.title).to.equal("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
    });
  });

