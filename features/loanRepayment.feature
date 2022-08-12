Feature: loan repayment status

  As an investment banker, I want to have a view of my client's repayments,
  so that I can have complete knowledge of my loan portfolio

  Background:
    Given the investment banker is authenticated on the app

  Rule : Loan repayment status should be "not started" for loans that start in the future

    Example: the investment banker create a loan with a start date in the future
      Given the investment banker creates a new loan
      When the loan start date is in the future
      Then the repayment status is "not started"
      And the "not started" color is red

    Example: For existing portfolio loans with a start date in the future
      Given the investment banker opens a current portfolio loan
      When the loan start date is in the future
      Then the repayment status is "not started"
      And the "not started" color is red


  Rule : for current loans, the repaid status should be calculated in percentage

    Scenario Outline: current loans

      Given the investment banker has a client of <client Name>
      And the client has a loan amount of <loan Amount>
      And start date loan of <start Date>
      And the end date loan of <end Date>
      And the margin loan of <margin>
      When the client has a loan repaid amount of <repaid Amount>
      Then the repaid status should be <repaid Status>

      Examples:
        |client Name|loan Amount|start Date|end Date|margin|repaid Amount|repaid Status|
        |PayTeam|2M€|01/01/2021|02/01/2024|1,2%|0,2|9,88%|
        |MagicLand|67,5M€|01/01/2020|30/08/2022|0,45%|66,9|98,67 %|
        |HappyHour|6000€|01/06/2022|01/02/2023|0,9%|0|0%|

  Rule : for current loans, the repaid status should be displayed in bleu

    Example: the investment banker create a loan with a start date in the past
      Given the investment banker creates a new loan
      When the repaid amount is equal to zero
      Then the repayment status is with bleu color

    Example: For existing portfolio loans with a start date in the past
      Given the investment banker opens a current portfolio loan
      When the repaid amount is inferior to loan amount
      Then the repayment status is displayed in bleu

    Rule : Expired loans with a complete repaid amount should be 100%

    Example:
      Given John open the expired client's portfolio loan
      When the repaid amount equal to the loan amount
      Then the repayment status is 100%

  Rule : Expired loans with non-complete repaid amount should be displayed with repaid status in red color

    Example:
      Given John open the expired client's portfolio loans
      When the repaid amount is not equal to the loan amount
      Then the repayment status is displayed with the percentage in red color
