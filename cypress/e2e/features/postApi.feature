Feature: Validate POST API response

Scenario: Successfully create a new resource
    Given I have a POST API endpoint "https://jsonplaceholder.typicode.com/posts"
    When I send the following request body
    | title | body | userId |
    | Cypress | Learning API Automation | 1 |
    Then The response status should be 201
    And The response should contain the title "Cypress"