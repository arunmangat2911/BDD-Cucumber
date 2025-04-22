import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

let actualColor;

function rgbToHex(rgb) {
  const result = rgb.match(/\d+/g).map(Number);
  return (
    '#' +
    result
      .slice(0, 3)
      .map((x) => x.toString(16).padStart(2, '0'))
      .join('')
  );
}

 Given('I open the example Cypress website', () => {
    cy.visit('https://example.cypress.io/');
  });
  
  When('I get the color of the first banner', () => {
    cy.get('div.banner').first().invoke('css', 'color').then((rgb) => {
      actualColor = rgbToHex(rgb);
    });
  });
  
  Then('It should be {string}', (expectedColor) => {
    expect(actualColor).to.eq(expectedColor);
  })