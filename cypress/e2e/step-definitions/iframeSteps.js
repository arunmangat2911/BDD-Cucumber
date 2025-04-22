import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import iframePage from '../../pageObjects/IframePage';

Given('I visit the iframe page', function () {
    iframePage.visitPage()
})

When('I type {string} in the iframe', function (text) {
    iframePage.typeInIframe(text)
})

Then('I should see {string} inside the iframe', function(expectedText) {
    iframePage.validatrIframeText(expectedText)
})