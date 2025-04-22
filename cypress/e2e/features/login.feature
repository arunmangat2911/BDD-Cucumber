Feature: User Login
@retry
  Scenario: Successful Login
    Given I open the login page
    When I enter username
    | username | standard_userr |
    And I enter password
    | password | secret_sauce |
    And I click the login button
    Then I should be logged in successfully
