class FileDownloadPage {
    visitDownloadPage() {
        cy.visit('https://the-internet.herokuapp.com/download'); // ✅ Visit download page
    }

    downloadFile(fileName) {
        cy.downloadFile(`https://the-internet.herokuapp.com/download/${fileName}`, "cypress/downloads", fileName); // ✅ Fix path & syntax
    }

    validateFileDownload(fileName) {
        cy.readFile(`cypress/downloads/${fileName}`).should('exist'); // ✅ Fix template literals
    }
} 

export default new FileDownloadPage();
