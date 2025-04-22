class FileUploadPage {
    visitUploadPage() {
        cy.visit("https://the-internet.herokuapp.com/upload"); // ✅ Navigate to file upload page
    } 

    uploadFile(fileName) { // ✅ Pass fileName as a parameter
        cy.get('#file-upload').attachFile(fileName); // ✅ Corrected syntax
        cy.get('#file-submit').click();
    }

    validateFileUpload() {
        cy.get('#uploaded-files').should('contain', "sample.pdf"); // ✅ Verify uploaded file name
        cy,get('#uploaded-files').first

    }
}

export default new FileUploadPage();
