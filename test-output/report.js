$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/satya/workspace/bdd/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 44,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 43,
      "name": "@User"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 56,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 57,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "satya_eday",
        "Chanti99"
      ],
      "line": 58,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "satya_eday",
        "Chanti99"
      ],
      "line": 59,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1269677915,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 43,
      "name": "@User"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "user enters \"satya_eday\" and \"Chanti99\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 10421700717,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 14155325,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "satya_eday",
      "offset": 13
    },
    {
      "val": "Chanti99",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 157446723,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.User_clicks_on_login_button()"
});
formatter.result({
  "duration": 7249845597,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5445279,
  "status": "passed"
});
formatter.write("FINISHED SCENARIO");
formatter.after({
  "duration": 614044676,
  "status": "passed"
});
formatter.before({
  "duration": 856714161,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 43,
      "name": "@User"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "user enters \"satya_eday\" and \"Chanti99\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 11574425681,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 8454049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "satya_eday",
      "offset": 13
    },
    {
      "val": "Chanti99",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 145809824,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.User_clicks_on_login_button()"
});
formatter.result({
  "duration": 5753934676,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5175823,
  "status": "passed"
});
formatter.write("FINISHED SCENARIO");
formatter.after({
  "duration": 588342856,
  "status": "passed"
});
});