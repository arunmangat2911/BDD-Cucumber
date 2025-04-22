import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import ApiPage from '../../pageObjects/ApiPage'

let endpoint;
let requestData;

Given('I have a POST API endpoint {string}', function(url) {
    endpoint = url;
    cy.log("Captured API URL: " + endpoint);
})

When('I send the following request body', function(dataTable) {
    requestData = {
        title: dataTable.rawTable[1][0],
        body: dataTable.rawTable[1][1],
        userId: dataTable.rawTable[1][2]
    }
    
    ApiPage.postRequest(endpoint,requestData)
})

Then('The response status should be {int}', function(statusCode) {
    ApiPage.validateStatusCode(statusCode)
})

Then('The response should contain the title {string}', function(expectedTitle) {
    ApiPage.validateResponseBody(expectedTitle)
})