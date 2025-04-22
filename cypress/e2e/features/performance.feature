Feature: Performance Testing

  Scenario: Measure page load time
    Given I visit the website "https://example.com"
    Then The page load time should be under 2 seconds
    And The network request time should be under 1 second
