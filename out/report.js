$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/Cucumber/Features/test-ba.feature");
formatter.feature({
  "line": 1,
  "name": "Registration",
  "description": "",
  "id": "registration",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Registration of User",
  "description": "",
  "id": "registration;registration-of-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Page https://flexi.pl opened in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "click on registration button",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "accept the statue",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "fill email",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "fill email2",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "fill password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "fill password2",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "fill first name \u003cparamFirstName\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "fill last name \u003cparamLastName\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "fill phone \u003cparamPhone\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "fill city \u003cparamCity\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "accept statements",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "submit registration",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "alert of registration confirmation is viewed",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "registration;registration-of-user;",
  "rows": [
    {
      "cells": [
        "paramFirstName",
        "paramLastName",
        "paramPhone",
        "paramCity"
      ],
      "line": 21,
      "id": "registration;registration-of-user;;1"
    },
    {
      "cells": [
        "Jerzy",
        "Nowak",
        "768498767",
        "Warszawa"
      ],
      "line": 22,
      "id": "registration;registration-of-user;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Registration of User",
  "description": "",
  "id": "registration;registration-of-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Page https://flexi.pl opened in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "click on registration button",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "accept the statue",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "fill email",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "fill email2",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "fill password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "fill password2",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "fill first name Jerzy",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "fill last name Nowak",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "fill phone 768498767",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "fill city Warszawa",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "accept statements",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "submit registration",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "alert of registration confirmation is viewed",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://flexi.pl",
      "offset": 5
    }
  ],
  "location": "userDataSteps.openPageInBrowser(String)"
});
formatter.result({
  "duration": 9102900000,
  "status": "passed"
});
formatter.match({
  "location": "userDataSteps.clickRegisterButton()"
});
formatter.result({
  "duration": 236174200,
  "status": "passed"
});
formatter.match({
  "location": "userDataSteps.clickAcceptButton()"
});
formatter.result({
  "duration": 183069500,
  "status": "passed"
});
formatter.match({
  "location": "userDataSteps.createAccount()"
});
formatter.result({
  "duration": 826647700,
  "status": "passed"
});
formatter.match({
  "location": "userDataSteps.fillEmail()"
});
formatter.result({
  "duration": 1115895500,
  "status": "passed"
});
formatter.match({
  "location": "userDataSteps.fillEmail2()"
});
formatter.result({
  "duration": 474943800,
  "status": "passed"
});
formatter.match({
  "location": "userDataSteps.fillPassword()"
});
formatter.result({
  "duration": 243646500,
  "status": "passed"
});
formatter.match({
  "location": "userDataSteps.fillPassword2()"
});
formatter.result({
  "duration": 215104000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Jerzy",
      "offset": 15
    }
  ],
  "location": "userDataSteps.fillFirstName(String)"
});
formatter.result({
  "duration": 152809500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Nowak",
      "offset": 14
    }
  ],
  "location": "userDataSteps.fillLastName(String)"
});
formatter.result({
  "duration": 116540500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " 768498767",
      "offset": 10
    }
  ],
  "location": "userDataSteps.fillPhone(String)"
});
formatter.result({
  "duration": 172507600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Warszawa",
      "offset": 9
    }
  ],
  "location": "userDataSteps.fillCity(String)"
});
formatter.result({
  "duration": 156639300,
  "status": "passed"
});
formatter.match({
  "location": "userDataSteps.userAcceptStatue()"
});
formatter.result({
  "duration": 83850100,
  "status": "passed"
});
formatter.match({
  "location": "userDataSteps.submitRegistration()"
});
formatter.result({
  "duration": 156752900,
  "status": "passed"
});
formatter.match({
  "location": "userDataSteps.registrationAlert()"
});
formatter.result({
  "duration": 1584222400,
  "status": "passed"
});
formatter.match({
  "location": "userDataSteps.closeBrowser()"
});
formatter.result({
  "duration": 4146540800,
  "status": "passed"
});
});