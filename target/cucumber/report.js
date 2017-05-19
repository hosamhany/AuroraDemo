$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('Aurora/LandingPage/LoginTest.feature');
formatter.feature({
  "line": 1,
  "name": "Test the Login of the feature file",
  "description": "",
  "id": "test-the-login-of-the-feature-file",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 11,
  "name": "Successful Login as a teacher",
  "description": "",
  "id": "test-the-login-of-the-feature-file;successful-login-as-a-teacher;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User navigates to Aurora",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters email as \"johndoe10@gmail.com\" and password as \"12345678\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Login should be succesful",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.navigateToAurora()"
});
formatter.result({
  "duration": 4943259064,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "johndoe10@gmail.com",
      "offset": 22
    },
    {
      "val": "12345678",
      "offset": 60
    }
  ],
  "location": "LoginStepDefinition.User_enters_email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 521793544,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.Login_should_be_successful()"
});
formatter.result({
  "duration": 1011883756,
  "status": "passed"
});
});