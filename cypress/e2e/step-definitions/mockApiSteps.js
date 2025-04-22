import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import mockApiPage from '../../pageObjects/MockApiPage';

let endpoint;

Given("I mock the API endpoint {string}", function (url) {
    endpoint = url;
    cy.log("Mocking API: " + endpoint);
    mockApiPage.mockGetRequest(endpoint);
});

When("I send a GET request to the endpoint", function () {
    mockApiPage.sendGetRequest(endpoint);
});

Then("I should receive a mocked response with title {string}", function (expectedTitle) {
    mockApiPage.validateMockedResponse(expectedTitle);
});
