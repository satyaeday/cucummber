Feature: Free CRM Login Feature



#   with out using example keyword

#Scenario: Free CRM Login Test Scenario

#Given User is already on Login Page

#When title of login page is Free CRM 

#Then user enters "satya_eday" and "Chanti99"

#Then User clicks on login button

#Then user is on Home Page




#   with  using example keyword

@Admin
Scenario Outline: Free CRM Login Test Scenario

Given User is already on Login Page

When title of login page is Free CRM 

Then user enters "<username>" and "<password>"

Then User clicks on login button

Then user is on Home Page

Examples:
| username  | password |
|satya_eday | Chanti99 |
|satya_eday | Chanti99 |


@User
Scenario Outline: Free CRM Login Test Scenario

Given User is already on Login Page

When title of login page is Free CRM 

Then user enters "<username>" and "<password>"

Then User clicks on login button

Then user is on Home Page

Examples:
| username  | password |
|satya_eday | Chanti99 |
|satya_eday | Chanti99 |







