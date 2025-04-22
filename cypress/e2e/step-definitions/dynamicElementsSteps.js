import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import ecommercePage from "../../pageObjects/EcommercePage"; 

Given("I visit the shop page", function () {
    ecommercePage.visitShop();
});

When("I add a product to the cart", function () {
    ecommercePage.addProductToCart();
});

When("I proceed to checkout", function () {
    ecommercePage.proceedToCheckout();
});

Then("I should see the order confirmation message", function () {
    ecommercePage.validateOrderConfirmation();
});
