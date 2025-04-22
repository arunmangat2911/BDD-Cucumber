class CartPage {
    addToCart(productName) {
      //cy.contains("Sauce Labs Backpack").parent().find(".btn_inventory").click();
      cy.contains("Sauce Labs Backpack")
      cy.get("#add-to-cart-sauce-labs-backpack").click();
    }
  
    openCart() {
      cy.get(".shopping_cart_link").click();
    }
  
    proceedToCheckout() {
      cy.get("#checkout").click();
    }
  }
  
  export default new CartPage();
  