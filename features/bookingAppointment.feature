Feature: Coin House private asset management

  As a user, I want to book an appointment
  So that I can receive a call from coin house

  Scenario: book an appointment
    Given the user is on the asset management point
    When the user books an available appointment
    Then the user request is submitted


