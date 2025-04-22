class LoginPage {
    
    visit() {
        cy.visit("https://www.saucedemo.com/");
    }

    enterUsername(username) {
        cy.get('input[id="user-name"]').type(username);
    }

    enterPassword(password) {
        cy.get("#password").type(password);
    }

    clickLogin() {
        cy.get("#login-button").click();
    }

    verifyLoginSuccess() {
        cy.get(".inventory_list").should("be.visible");
    }
}

export default new LoginPage();