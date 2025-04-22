import {Given, Then} from 'cypress-cucumber-preprocessor/steps';
import performancePage from '../../pageObjects/PerformancePage';

let url;

Given('I visit the website {string}', function (givenUrl) {
    url = givenUrl
    performancePage.visitPage(url)
})

Then('The page load time should be under {int} seconds', function(maxLoadTime) {
    performancePage.measurePageLoadTime(maxLoadTime * 1000)
})

Then('The network request time should be under {int} second', function(maxRequestTime) {
    performancePage.measureNetworkRequestTime(url, maxRequestTime * 1000)
})

