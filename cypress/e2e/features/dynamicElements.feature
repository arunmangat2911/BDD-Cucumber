Feature: Handling Dynamic Elements in E-commerce Checkout
@skip

  Scenario: Successfully place an order
    Given I visit the shop page
    When I add a product to the cart
    And I proceed to checkout
    Then I should see the order confirmation message
