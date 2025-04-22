import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import fileDownloadPage from "../../pageObjects/FileDownloadPage";

Given('I visit the file download page', function () {
    fileDownloadPage.visitDownloadPage()
})

When('I download a file {string}', function (fileName) {
    fileDownloadPage.downloadFile(fileName)
})

Then('I should see the file saved in my downloads folder', function () {
    fileDownloadPage.validateFileDownload('ResumeDinu_28.02.pdf')
})