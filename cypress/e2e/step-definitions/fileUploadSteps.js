import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import fileUploadPage from "../../pageObjects/FileUploadPage";
import 'cypress-file-upload';

Given("I visit the file upload page", function() {
    fileUploadPage.visitUploadPage()
})

When("I upload a file {string}", function(fileName) {
    fileUploadPage.uploadFile(fileName)
})

Then("I should see the file uploaded successfully", function() {
    fileUploadPage.validateFileUpload()
})
