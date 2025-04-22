Feature: API Testing in Cypress
@skip
Scenario: Verify GET API response
    Given I have a GET API endpoint
    | endpoint | https://jsonplaceholder.typicode.com/posts/1 |
    When The response status should be 200
    | status | 200 |
    Then The response should contain the title

