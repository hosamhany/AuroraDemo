Feature: Test the Login of the feature file

  @Login
  Scenario Outline: Successful Login as a teacher
    Given User navigates to Aurora
    When User enters email as "<email>" and password as "<password>"
    Then Login should be succesful

    Examples: 
      | email               | password |
      | johndoe10@gmail.com | 12345678 |
