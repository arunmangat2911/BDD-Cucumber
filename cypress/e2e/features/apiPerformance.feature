Feature: API Performance Testing
@skip
  Scenario: Validate API response time
    Given I send a GET request to "https://jsonplaceholder.typicode.com/posts/1"
    Then The API response time should be under 500ms
