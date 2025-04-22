import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import ApiPage from '../../pageObjects/ApiPage'

let endpoint;
let requestData;

Given("I have a PUT API endpoint {string}", function (url) {
    endpoint = url;
    cy.log("Captured API URL: " + endpoint);
})

When("I update the resource with", function (dataTable) {
    requestData = {
        title: dataTable.rawTable[1][0],
        body: dataTable.rawTable[1][1],
        userId: Number(dataTable.rawTable[1][2]),
    }

    ApiPage.putRequest(endpoint,requestData)
})

Then('The response should be {int}', function(statusCode) {
    ApiPage.validatePutStatusCode(statusCode)
})

Then('The response should contain the updated title {string}', function(expectedTitle) {
    ApiPage.validatePutResponseBody(expectedTitle)
})

