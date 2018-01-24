Feature: Register new Lobster ink user

@TypeScriptScenario
Scenario Outline: Sign Up as a new user on Lobster ink site
Given I navigate to Lobster learn page
When I click 'SignUp' button on Lobster learn page
And I click 'SignUp' button on Lobster authentification page
And Fill '<firstName>', '<lastName>', '<email>', '<confirmEmail>', '<password>', '<confirmPassword>' fields with valid data
And Click 'SignUp' button on Lobbster sign up page
Then I navigate to Lobster learn page
And I can see '<firstName>' name
Examples:
|firstName |lastName|email             |confirmEmail      |password   |confirmPassword|
|AAA       |BBB     | lobster@test.com | lobster@test.com |Lobster123 |Lobster123     | 
              