class BannerPage {
    visitPage() {
        cy.visit('https://example.cypress.io/'); // ✅ Visit download page
    }

    getFirstBanner() {
      return cy.get('div.banner').first();
    }
  
    getBackgroundColor() {
      return this.getFirstBanner().invoke('css', 'background-color');
    }
  }
  
  export default new BannerPage();
  