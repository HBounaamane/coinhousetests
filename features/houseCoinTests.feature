Feature: Coin House home page

  As a user, I want to access the coin house home page
  So that I can navigate to all menus

  Scenario: access the coin house site
    Given the browser is launched
    When the user access the coin house site
    Then the coin house home page is displayed

  Scenario: open the crypto account saving page
    Given the user is at the coin house home page
    When open the crypto saving account via the investment menu
    Then crypto saving account is displayed
