import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from "../../pageObjects/LoginPage";
import CartPage from "../../pageObjects/CartPage";
import CheckoutPage from "../../pageObjects/CheckoutPage";

Given("I am logged in", (dataTable) => {
  LoginPage.visit();
  LoginPage.enterUsername(dataTable.rawTable[1][0]);
  LoginPage.enterPassword(dataTable.rawTable[1][1]);
  LoginPage.clickLogin();
});

When('I add "Sauce Labs Backpack" to the cart', (productName) => {
  CartPage.addToCart("Sauce Labs Backpack");
});

When("I proceed to checkout", () => {
  CartPage.openCart();
  CartPage.proceedToCheckout();
});

When("I fill in checkout details", function(dataTable) {
    const data = dataTable.hashes()[0]
    CheckoutPage.fillFirstName(data.firstName);
    CheckoutPage.fillLastName(data.lastName);
    CheckoutPage.fillPostalCode(data.postalCode);
  });  

When("I complete the purchase", () => {
  CheckoutPage.completePurchase();
});

Then("I should see the order confirmation", () => {
  CheckoutPage.verifyOrderSuccess();
});
