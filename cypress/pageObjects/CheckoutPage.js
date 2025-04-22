class CheckoutPage {
    /*fillCheckoutDetails(firstName, lastName, postalCode) {
      cy.get("#first-name").type(firstName);
      cy.get("#last-name").type(lastName);
      cy.get("#postal-code").type(postalCode);
      cy.get("#continue").click();
    }*/

    fillFirstName(firstName) {
      cy.get("#first-name").type(firstName);
    }

    fillLastName(lastName) {    
        cy.get("#last-name").type(lastName);
    }

    fillPostalCode(postalCode) {
        cy.get("#postal-code").type(postalCode);
    }

    completePurchase() {
        cy.get("#continue").click();
        cy.get("#finish").click();
        //cy.intercept("POST", "**/checkout").as("order");
    }
  
    verifyOrderSuccess() {
        //cy.wait("@order");
        cy.get(".complete-header").should("contain", "Thank you for your order!");
    }
  }
  
  export default new CheckoutPage();
  