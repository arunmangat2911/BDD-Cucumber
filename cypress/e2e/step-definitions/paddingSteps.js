import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open the example Cypress website', () => {
  cy.visit('https://example.cypress.io/');
});

Then('It should should be {string}', (expectedPadding) => {
    cy.get('div.banner')
      .first()
      .invoke('css', 'padding')
      .then((actualPadding) => {
        expect(actualPadding).to.eq(expectedPadding);
      });
  });