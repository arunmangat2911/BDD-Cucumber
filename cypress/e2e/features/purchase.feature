Feature: Purchase a Product
@skip

  Scenario: Successfully purchase an item
    Given I am logged in
    | username | password |
    | standard_user | secret_sauce |
    When I add "Sauce Labs Backpack" to the cart
    And I proceed to checkout
    And I fill in checkout details
    | firstName | lastName | postalCode |
    | John | Doe | 12345 |
    And I complete the purchase
    Then I should see the order confirmation
