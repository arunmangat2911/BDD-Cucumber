Feature: iFrame Handling
@skip

  Scenario: Interact with an element inside an iFrame
    Given I visit the iframe page
    When I type "Hello from Cypress!" in the iframe
    Then I should see "Hello from Cypress!" inside the iframe
