class ApiPage {
    postRequest(endpoint, requestBody) {
        if(!endpoint) {
            throw new Error("POST API endpoint is missing")
        }
        cy.request('POST', endpoint, requestBody).as("postResponse")
    }

    validateStatusCode(statusCode) {
        cy.get("@postResponse").its("status").should("eq", statusCode)
    }

    validateResponseBody(expectedTitle) {
        cy.get("@postResponse").then((response) => {
            expect(response.body.title).to.equal(expectedTitle)
        //cy.get("@postResponse").its("body").should("include", {"title": expectedTitle})
            })
        }

    putRequest(endpoint, requestBody) {
        if(!endpoint) {
            throw new Error("PUT API endpoint is missing")
        }
        cy.request('PUT', endpoint, requestBody).as("putResponse")
    }

    validatePutStatusCode(statusCode) {
        cy.get("@putResponse").its("status").should("eq", statusCode)
    }

    validatePutResponseBody(expectedTitle) {
        cy.get("@putResponse").then((response) => {
            expect(response.body.title).to.equal(expectedTitle)
        })
    }
    
}


export default new ApiPage()