Feature: Core Web Vitals Testing
@skip

  Scenario: Validate Lighthouse performance score
    Given I visit "https://example.com"
    Then The performance score should be above 80
