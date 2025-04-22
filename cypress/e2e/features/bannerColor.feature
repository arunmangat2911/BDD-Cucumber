Feature: Banner background color verification

  Scenario: Verify background color of the first banner
    Given I open the example Cypress website
    When I get the background color of the first banner
    Then it should be "#00bf88"
