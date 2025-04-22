Feature: Banner padding verification

  Scenario: Verify full padding of the first banner
    Given I open the example Cypress website
    Then It should should be "25px 0px 35px"
