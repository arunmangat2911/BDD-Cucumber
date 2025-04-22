import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import BannerPage from '../../pageObjects/BannerPage';

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
  BannerPage.visitPage()
});

When('I get the background color of the first banner', () => {
  BannerPage.getBackgroundColor().then((rgb) => {
    actualColor = rgbToHex(rgb);
  });
});

Then('it should be {string}', (expectedHex) => {
  expect(actualColor).to.eq(expectedHex);
});