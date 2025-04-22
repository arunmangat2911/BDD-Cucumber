import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from "../../pageObjects/LoginPage";


Given("I open the login page", function() {
  LoginPage.visit();
});

When("I enter username", function(dataTable) {
  LoginPage.enterUsername(dataTable.rawTable[0][1]);
});

When("I enter password", function(dataTable) {
  LoginPage.enterPassword(dataTable.rawTable[0][1]);
});

When("I click the login button", function(){
  LoginPage.clickLogin();
});

Then("I should be logged in successfully", function() {
  LoginPage.verifyLoginSuccess();
});
