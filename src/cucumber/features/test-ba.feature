Feature: Fill data in the form

  Scenario Outline: Fill the form
Given Page https://app.bluealert.pl/ba/form/formularz-testowy opened in browser
When User fill firstName <paramFirstName>
And fill lastName <paramLastName>
And fill email <paramEmail>
And fill phoneNumber <paramPhoneNumber>
And fill peselNumber<paramPeselNumber>
And fill idNumber <paramIdNumber>
And fill dateOfBirth <paramDateOfBirth>
And submit nextButton
Then user see agreePage
And close browser

Examples:
|paramFirstName|paramLastName|paramEmail | paramPhoneNumber|paramPeselNumber| paramIdNumber |paramDateOfBirth |
|Jerzy         |Nowak        |jurek@o2.pl| 789567487       |00040807243     | ADQ382529     |1997-09-30       |