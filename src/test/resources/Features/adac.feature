Feature: validating the Adactin Hotel Booking Site

  Background: Validate the hotel booking module
    Given user on the Adactin login page
    When User give the valid credentials and login
      | Abarajitha |
      | 9Z17ON     |

  Scenario Outline: user give the Hotel information
  
    When User give the "<Location>","<Hotels>","<RoomType>","<numofrooms>","<adultsperroom>","<childrenroom>"
    And user search the hotel
    And user give the info
    Then verify the process

    Examples: 
      | Location | Hotels         | RoomType     | numofrooms | adultsperroom | childrenroom |
      | Sydney   | Hotel Creek    | Standard     | 4 - Four   | 1 - One       | 0 - None     |
      | Sydney   | Hotel Creek    | Standard     | 5 - Five   | 1 - One       | 0 - None     |
      | Sydney   | Hotel Creek    | Standard     | 6 - Six    | 1 - One       | 0 - None     |
      | Sydney   | Hotel Creek    | Standard     | 7 - Seven  | 1 - One       | 0 - None     |
      | Sydney   | Hotel Creek    | Standard     | 8 - Eight  | 1 - One       | 0 - None     |
      | Sydney   | Hotel Creek    | Standard     | 9 - Nine   | 1 - One       | 0 - None     |
      | Sydney   | Hotel Creek    | Standard     | 10 - Ten   | 1 - One       | 0 - None     |
      | Sydney   | Hotel Creek    | Double       | 4 - Four   | 2 - Two       | 1 - One      |
      | Sydney   | Hotel Creek    | Double       | 5 - Five   | 2 - Two       | 1 - One      |
      #| Sydney   | Hotel Creek    | Double       | 6 - Six    | 2 - Two       | 1 - One      |
      #| Sydney   | Hotel Creek    | Double       | 7 - Seven  | 2 - Two       | 1 - One      |
      #| Sydney   | Hotel Creek    | Double       | 8 - Eight  | 2 - Two       | 1 - One      |
      #| Sydney   | Hotel Creek    | Double       | 9 - Nine   | 2 - Two       | 1 - One      |
      #| Sydney   | Hotel Creek    | Double       | 10 - Ten   | 2 - Two       | 1 - One      |
      #| Sydney   | Hotel Creek    | Deluxe       | 1 - One    | 3 - Three     | 2 - Two      |
      #| Sydney   | Hotel Creek    | Deluxe       | 2 - Two    | 3 - Three     | 2 - Two      |
      #| Sydney   | Hotel Creek    | Deluxe       | 3 - Three  | 3 - Three     | 2 - Two      |
      #| Sydney   | Hotel Creek    | Deluxe       | 4 - Four   | 3 - Three     | 2 - Two      |
      #| Sydney   | Hotel Creek    | Deluxe       | 5 - Five   | 3 - Three     | 2 - Two      |
      #| Sydney   | Hotel Creek    | Deluxe       | 6 - Six    | 3 - Three     | 2 - Two      |
      #| Sydney   | Hotel Creek    | Deluxe       | 7 - Seven  | 3 - Three     | 2 - Two      |
      #| Sydney   | Hotel Creek    | Deluxe       | 8 - Eight  | 3 - Three     | 2 - Two      |
      #| Sydney   | Hotel Creek    | Deluxe       | 9 - Nine   | 3 - Three     | 2 - Two      |
      #| Sydney   | Hotel Creek    | Deluxe       | 10 - Ten   | 3 - Three     | 2 - Two      |
      #| Sydney   | Hotel Creek    | Super Deluxe | 1 - One    | 4 - Four      | 3 - Three    |
      #| Sydney   | Hotel Creek    | Super Deluxe | 2 - Two    | 4 - Four      | 3 - Three    |
      #| Sydney   | Hotel Creek    | Super Deluxe | 3 - Three  | 4 - Four      | 3 - Three    |
      #| Sydney   | Hotel Creek    | Super Deluxe | 4 - Four   | 4 - Four      | 3 - Three    |
      #| Sydney   | Hotel Creek    | Super Deluxe | 5 - Five   | 4 - Four      | 3 - Three    |
      #| Sydney   | Hotel Creek    | Super Deluxe | 6 - Six    | 4 - Four      | 3 - Three    |
      #| Sydney   | Hotel Creek    | Super Deluxe | 7 - Seven  | 4 - Four      | 3 - Three    |
      #| Sydney   | Hotel Creek    | Super Deluxe | 8 - Eight  | 4 - Four      | 3 - Three    |
      #| Sydney   | Hotel Creek    | Super Deluxe | 9 - Nine   | 4 - Four      | 3 - Three    |
      #| Sydney   | Hotel Creek    | Super Deluxe | 10 - Ten   | 4 - Four      | 3 - Three    |
      #| Sydney   | Hotel Sunshine | Standard     | 1 - One    | 1 - One       | 0 - None     |
      #| Sydney   | Hotel Sunshine | Standard     | 2 - Two    | 1 - One       | 0 - None     |
      #| Sydney   | Hotel Sunshine | Standard     | 3 - Three  | 1 - One       | 0 - None     |
      #| Sydney   | Hotel Sunshine | Double       | 1 - One    | 2 - Two       | 1 - One      |
      #| Sydney   | Hotel Sunshine | Double       | 2 - Two    | 2 - Two       | 1 - One      |
      #| Sydney   | Hotel Sunshine | Double       | 3 - Three  | 2 - Two       | 1 - One      |
      #| Sydney   | Hotel Sunshine | Double       | 4 - Four   | 2 - Two       | 1 - One      |
      #| Sydney   | Hotel Sunshine | Double       | 5 - Five   | 2 - Two       | 1 - One      |
      #| Sydney   | Hotel Sunshine | Double       | 6 - Six    | 2 - Two       | 1 - One      |
      #| Sydney   | Hotel Sunshine | Deluxe       | 2 - Two    | 3 - Three     | 2 - Two      |
      #| Sydney   | Hotel Sunshine | Deluxe       | 3 - Three  | 3 - Three     | 2 - Two      |
      #| Sydney   | Hotel Sunshine | Deluxe       | 4 - Four   | 3 - Three     | 2 - Two      |
      #| Sydney   | Hotel Sunshine | Deluxe       | 5 - Five   | 3 - Three     | 2 - Two      |
      #| Sydney   | Hotel Sunshine | Deluxe       | 6 - Six    | 3 - Three     | 2 - Two      |
      #| Sydney   | Hotel Sunshine | Deluxe       | 7 - Seven  | 3 - Three     | 2 - Two      |
      #| Sydney   | Hotel Sunshine | Deluxe       | 8 - Eight  | 3 - Three     | 2 - Two      |
      #| Sydney   | Hotel Sunshine | Deluxe       | 9 - Nine   | 3 - Three     | 2 - Two      |
      #| Sydney   | Hotel Sunshine | Deluxe       | 10 - Ten   | 3 - Three     | 2 - Two      |
      #| Sydney   | Hotel Sunshine | Super Deluxe | 1 - One    | 4 - Four      | 3 - Three    |
      #| Sydney   | Hotel Sunshine | Super Deluxe | 2 - Two    | 4 - Four      | 3 - Three    |
      #| Sydney   | Hotel Sunshine | Super Deluxe | 3 - Three  | 4 - Four      | 3 - Three    |
      #| Sydney   | Hotel Sunshine | Super Deluxe | 4 - Four   | 4 - Four      | 3 - Three    |
      #| Sydney   | Hotel Sunshine | Super Deluxe | 5 - Five   | 4 - Four      | 3 - Three    |
      #| Sydney   | Hotel Sunshine | Super Deluxe | 6 - Six    | 4 - Four      | 3 - Three    |
      #| Sydney   | Hotel Sunshine | Super Deluxe | 7 - Seven  | 4 - Four      | 3 - Three    |
      #| Sydney   | Hotel Sunshine | Super Deluxe | 8 - Eight  | 4 - Four      | 3 - Three    |
      #| Sydney   | Hotel Sunshine | Super Deluxe | 9 - Nine   | 4 - Four      | 3 - Three    |
      #| Sydney   | Hotel Sunshine | Super Deluxe | 10 - Ten   | 4 - Four      | 3 - Three    |
