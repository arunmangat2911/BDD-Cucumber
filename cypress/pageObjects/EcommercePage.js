class EcommercePage {
    visitShop() {
        cy.visit("/shop"); // ✅ Navigate to shop page
    }

    addProductToCart() {
        cy.get(".add-to-cart").first().click(); // ✅ Click on the first product
        cy.get(".cart-item", { timeout: 5000 }).should("be.visible"); // ✅ Wait for cart item to appear
    }

    proceedToCheckout() {
        cy.get(".buy-now", { timeout: 5000 }).should("be.visible").click(); // ✅ Wait for button
        cy.intercept("POST", "/api/place-order").as("order"); // ✅ Wait for API request
    }

    validateOrderConfirmation() {
        cy.wait("@order"); // ✅ Ensure API response before checking confirmation
        cy.get(".confirmation-message").should("contain", "Order placed successfully!"); // ✅ Validate UI
    }
}

export default new EcommercePage();
