Feature: Banner background color verification

  Scenario: Verify color of the first banner
    Given I open the example Cypress website
    When I get the color of the first banner
    Then It should be "#ffffff"
