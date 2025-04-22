Feature: File Download Testing
@skip

  Scenario: Download a file successfully
    Given I visit the file download page
    When I download a file "ResumeDinu_28.02.pdf"
    Then I should see the file saved in my downloads folder
