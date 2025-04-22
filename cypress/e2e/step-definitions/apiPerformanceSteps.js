import {Given, Then} from 'cypress-cucumber-preprocessor/steps';
import apiPerformancePage from '../../pageObjects/ApiPerformancePage';

Given('I send a GET request to {string}', function (url) {
    apiPerformancePage.sendApiRequest(url)
})

Then('The API response time should be under {int}ms', function (maxTime) {
    apiPerformancePage.validateResponseTime(maxTime)

})