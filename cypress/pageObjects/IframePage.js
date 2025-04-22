class IframePage {
    visitPage() {
        cy.visit("https://the-internet.herokuapp.com/iframe");
    }

    typeInIframe(text) {
        cy.frameLoaded("#mce_0_ifr")
        cy.iframe('#mce_0_ifr').clear().type(text)
    }

    validatrIframeText(expectedText) {
        cy.iframe('#mce_0_ifr').should("contain.text", expectedText)
    }
}

export default new IframePage();