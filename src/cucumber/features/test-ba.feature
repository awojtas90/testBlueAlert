Feature: Registration
Scenario Outline: Registration of User
Given Page https://flexi.pl opened in browser
When  click on registration button
And accept the statue
Then click on register button
And fill email
And fill email2
And fill password
And fill password2
And fill first name <paramFirstName>
And fill last name <paramLastName>
And fill phone <paramPhone>
And fill city <paramCity>
And accept statements
And submit registration
Then alert of registration confirmation is viewed
  And close browser

Examples:
|paramFirstName|paramLastName|paramPhone|paramCity|
|Jerzy         |Nowak        |768498767 |Warszawa |