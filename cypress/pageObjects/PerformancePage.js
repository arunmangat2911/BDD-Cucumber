class PerformancePage {
    visitPage(url) {
        cy.visit(url)
    }

    measurePageLoadTime(maxLoadTime) {
        cy.window().then((win) => {
            const loadTime = win.performance.timing.loadEventEnd - win.performance.timing.navigationStart
            cy.log(`Page load time: ${loadTime}ms`)
            expect(loadTime).to.be.lessThan(maxLoadTime)
        })
    }

    measureNetworkRequestTime(url, maxRequestTime) {
        cy.request(url).then((response) => {
            const requestTime = response.duration
            cy.log(`Request time: ${requestTime}ms`)
            expect(requestTime).to.be.lessThan(maxRequestTime)
        })
    }
    
}

export default new PerformancePage();