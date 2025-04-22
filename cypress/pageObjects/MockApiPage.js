class MockApiPage {
    mockGetRequest(endpoint) {
        if (!endpoint) {
            throw new Error("GET API endpoint is missing");
        }
        cy.intercept("GET", endpoint, {
            statusCode: 200,
            body: { title: "Mocked API Title" }, // ✅ Ensure correct mock response
        }).as("mockGet");
    }

    sendGetRequest(endpoint) {
        cy.window().then((win) => {
            cy.log("Triggering GET request via fetch()");

            return win.fetch(endpoint) // ✅ Trigger request via browser
                .then((response) => response.json()) // ✅ Parse JSON response
                .then((data) => {
                    cy.wrap(data).as("mockResponse"); // ✅ Cypress properly handles the promise
                });
        });
    }

    validateMockedResponse(expectedTitle) {
        cy.get("@mockResponse").then((response) => {
            cy.log("Mocked Response:", response.title);
            expect(response.title).to.equal(expectedTitle);
        });
    }
}

export default new MockApiPage();
