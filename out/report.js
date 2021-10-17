$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/Cucumber/Features/test-ba.feature");
formatter.feature({
  "line": 1,
  "name": "Fill data in the form",
  "description": "",
  "id": "fill-data-in-the-form",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Fill the form",
  "description": "",
  "id": "fill-data-in-the-form;fill-the-form",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Page https://app.bluealert.pl/ba/form/formularz-testowy opened in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User fill firstName \u003cparamFirstName\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "fill lastName \u003cparamLastName\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "fill email \u003cparamEmail\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "fill phoneNumber \u003cparamPhoneNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "fill peselNumber\u003cparamPeselNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "fill idNumber \u003cparamIdNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "fill dateOfBirth \u003cparamDateOfBirth\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "submit nextButton",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user see agreePage",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "fill-data-in-the-form;fill-the-form;",
  "rows": [
    {
      "cells": [
        "paramFirstName",
        "paramLastName",
        "paramEmail",
        "paramPhoneNumber",
        "paramPeselNumber",
        "paramIdNumber",
        "paramDateOfBirth"
      ],
      "line": 17,
      "id": "fill-data-in-the-form;fill-the-form;;1"
    },
    {
      "cells": [
        "Jerzy",
        "Nowak",
        "jurek@o2.pl",
        "789567487",
        "00040807243",
        "ADQ382529",
        "1997-09-30"
      ],
      "line": 18,
      "id": "fill-data-in-the-form;fill-the-form;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Fill the form",
  "description": "",
  "id": "fill-data-in-the-form;fill-the-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Page https://app.bluealert.pl/ba/form/formularz-testowy opened in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User fill firstName Jerzy",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "fill lastName Nowak",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "fill email jurek@o2.pl",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "fill phoneNumber 789567487",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "fill peselNumber00040807243",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "fill idNumber ADQ382529",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "fill dateOfBirth 1997-09-30",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "submit nextButton",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user see agreePage",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://app.bluealert.pl/ba/form/formularz-testowy",
      "offset": 5
    }
  ],
  "location": "userDataSteps.openPageInBrowser(String)"
});
formatter.result({
  "duration": 4981979400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Jerzy",
      "offset": 19
    }
  ],
  "location": "userDataSteps.userFillFirstName(String)"
});
formatter.result({
  "duration": 128874000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Nowak",
      "offset": 13
    }
  ],
  "location": "userDataSteps.fillLastName(String)"
});
formatter.result({
  "duration": 120445500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " jurek@o2.pl",
      "offset": 10
    }
  ],
  "location": "userDataSteps.fillEmail(String)"
});
formatter.result({
  "duration": 109382400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " 789567487",
      "offset": 16
    }
  ],
  "location": "userDataSteps.fillPhone(String)"
});
formatter.result({
  "duration": 122822000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "00040807243",
      "offset": 16
    }
  ],
  "location": "userDataSteps.fillPeselNumber(String)"
});
formatter.result({
  "duration": 155022100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " ADQ382529",
      "offset": 13
    }
  ],
  "location": "userDataSteps.fillIdNumber(String)"
});
formatter.result({
  "duration": 135641300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " 1997-09-30",
      "offset": 16
    }
  ],
  "location": "userDataSteps.fillDateOfBirth(String)"
});
formatter.result({
  "duration": 232967500,
  "status": "passed"
});
formatter.match({
  "location": "userDataSteps.clickOnNextButton()"
});
formatter.result({
  "duration": 1266018200,
  "status": "passed"
});
formatter.match({
  "location": "userDataSteps.agreePageIsVisible()"
});
formatter.result({
  "duration": 193075100,
  "status": "passed"
});
formatter.match({
  "location": "userDataSteps.closeBrowser()"
});
formatter.result({
  "duration": 117422100,
  "status": "passed"
});
});