Feature: Mock API response
@skip

Scenario: Mock a GET API response
    Given I mock the API endpoint "https://jsonplaceholder.typicode.com/posts/1"
    When I send a GET request to the endpoint
    Then I should receive a mocked response with title "Mocked API Title"