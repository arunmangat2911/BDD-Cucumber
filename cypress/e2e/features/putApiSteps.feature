Feature: Validate PUT API response
@skip

Scenario: Successfully update a resource
    Given I have a PUT API endpoint "https://jsonplaceholder.typicode.com/posts/1"
    When I update the resource with
    | title | body | userId |
    | Updated Cypress | API Testing Advanced | 1|
    Then The response should be 200
    And The response should contain the updated title "Updated Cypress"