class ApiPerformancePage {
    sendApiRequest(url) {
        cy.intercept('GET', url).as('apiRequest');
        cy.request('GET', url).as('actualResponse');
    }
 
    validateResponseTime(maxTime) {
        cy.get('@actualResponse').then((response) => {
            cy.log(`API Response Time: ${response.duration}ms`);
            expect(response.duration).to.be.lessThan(maxTime);
        });
    }
}

export default new ApiPerformancePage();    

