$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/adac.feature");
formatter.feature({
  "name": "validating the Adactin Hotel Booking Site",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "user give the Hotel information",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User give the \"\u003cLocation\u003e\",\"\u003cHotels\u003e\",\"\u003cRoomType\u003e\",\"\u003cnumofrooms\u003e\",\"\u003cadultsperroom\u003e\",\"\u003cchildrenroom\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user search the hotel",
  "keyword": "And "
});
formatter.step({
  "name": "user give the info",
  "keyword": "And "
});
formatter.step({
  "name": "verify the process",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Location",
        "Hotels",
        "RoomType",
        "numofrooms",
        "adultsperroom",
        "childrenroom"
      ]
    },
    {
      "cells": [
        "Sydney",
        "Hotel Creek",
        "Standard",
        "4 - Four",
        "1 - One",
        "0 - None"
      ]
    },
    {
      "cells": [
        "Sydney",
        "Hotel Creek",
        "Standard",
        "5 - Five",
        "1 - One",
        "0 - None"
      ]
    },
    {
      "cells": [
        "Sydney",
        "Hotel Creek",
        "Standard",
        "6 - Six",
        "1 - One",
        "0 - None"
      ]
    },
    {
      "cells": [
        "Sydney",
        "Hotel Creek",
        "Standard",
        "7 - Seven",
        "1 - One",
        "0 - None"
      ]
    },
    {
      "cells": [
        "Sydney",
        "Hotel Creek",
        "Standard",
        "8 - Eight",
        "1 - One",
        "0 - None"
      ]
    },
    {
      "cells": [
        "Sydney",
        "Hotel Creek",
        "Standard",
        "9 - Nine",
        "1 - One",
        "0 - None"
      ]
    },
    {
      "cells": [
        "Sydney",
        "Hotel Creek",
        "Standard",
        "10 - Ten",
        "1 - One",
        "0 - None"
      ]
    },
    {
      "cells": [
        "Sydney",
        "Hotel Creek",
        "Double",
        "4 - Four",
        "2 - Two",
        "1 - One"
      ]
    },
    {
      "cells": [
        "Sydney",
        "Hotel Creek",
        "Double",
        "5 - Five",
        "2 - Two",
        "1 - One"
      ]
    }
  ]
});
formatter.background({
  "name": "Validate the hotel booking module",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the Adactin login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_on_the_Adactin_login_page()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat com.BaseClass.UtilityClass.ur(UtilityClass.java:27)\r\n\tat com.BaseClass.UtilityClass.max(UtilityClass.java:31)\r\n\tat com.step.StepDefination.user_on_the_Adactin_login_page(StepDefination.java:30)\r\n\tat ✽.user on the Adactin login page(src/test/resources/Features/adac.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User give the valid credentials and login",
  "rows": [
    {
      "cells": [
        "Abarajitha"
      ]
    },
    {
      "cells": [
        "9Z17ON"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_give_the_valid_credentials_and_login(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "user give the Hotel information",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User give the \"Sydney\",\"Hotel Creek\",\"Standard\",\"4 - Four\",\"1 - One\",\"0 - None\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_give_the(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user search the hotel",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_search_the_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user give the info",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_give_the_info()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the process",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.verify_the_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Validate the hotel booking module",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the Adactin login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_on_the_Adactin_login_page()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat com.BaseClass.UtilityClass.ur(UtilityClass.java:27)\r\n\tat com.BaseClass.UtilityClass.max(UtilityClass.java:31)\r\n\tat com.step.StepDefination.user_on_the_Adactin_login_page(StepDefination.java:30)\r\n\tat ✽.user on the Adactin login page(src/test/resources/Features/adac.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User give the valid credentials and login",
  "rows": [
    {
      "cells": [
        "Abarajitha"
      ]
    },
    {
      "cells": [
        "9Z17ON"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_give_the_valid_credentials_and_login(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "user give the Hotel information",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User give the \"Sydney\",\"Hotel Creek\",\"Standard\",\"5 - Five\",\"1 - One\",\"0 - None\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_give_the(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user search the hotel",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_search_the_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user give the info",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_give_the_info()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the process",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.verify_the_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Validate the hotel booking module",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the Adactin login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_on_the_Adactin_login_page()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat com.BaseClass.UtilityClass.ur(UtilityClass.java:27)\r\n\tat com.BaseClass.UtilityClass.max(UtilityClass.java:31)\r\n\tat com.step.StepDefination.user_on_the_Adactin_login_page(StepDefination.java:30)\r\n\tat ✽.user on the Adactin login page(src/test/resources/Features/adac.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User give the valid credentials and login",
  "rows": [
    {
      "cells": [
        "Abarajitha"
      ]
    },
    {
      "cells": [
        "9Z17ON"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_give_the_valid_credentials_and_login(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "user give the Hotel information",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User give the \"Sydney\",\"Hotel Creek\",\"Standard\",\"6 - Six\",\"1 - One\",\"0 - None\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_give_the(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user search the hotel",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_search_the_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user give the info",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_give_the_info()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the process",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.verify_the_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Validate the hotel booking module",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the Adactin login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_on_the_Adactin_login_page()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat com.BaseClass.UtilityClass.ur(UtilityClass.java:27)\r\n\tat com.BaseClass.UtilityClass.max(UtilityClass.java:31)\r\n\tat com.step.StepDefination.user_on_the_Adactin_login_page(StepDefination.java:30)\r\n\tat ✽.user on the Adactin login page(src/test/resources/Features/adac.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User give the valid credentials and login",
  "rows": [
    {
      "cells": [
        "Abarajitha"
      ]
    },
    {
      "cells": [
        "9Z17ON"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_give_the_valid_credentials_and_login(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "user give the Hotel information",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User give the \"Sydney\",\"Hotel Creek\",\"Standard\",\"7 - Seven\",\"1 - One\",\"0 - None\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_give_the(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user search the hotel",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_search_the_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user give the info",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_give_the_info()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the process",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.verify_the_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Validate the hotel booking module",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the Adactin login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_on_the_Adactin_login_page()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat com.BaseClass.UtilityClass.ur(UtilityClass.java:27)\r\n\tat com.BaseClass.UtilityClass.max(UtilityClass.java:31)\r\n\tat com.step.StepDefination.user_on_the_Adactin_login_page(StepDefination.java:30)\r\n\tat ✽.user on the Adactin login page(src/test/resources/Features/adac.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User give the valid credentials and login",
  "rows": [
    {
      "cells": [
        "Abarajitha"
      ]
    },
    {
      "cells": [
        "9Z17ON"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_give_the_valid_credentials_and_login(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "user give the Hotel information",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User give the \"Sydney\",\"Hotel Creek\",\"Standard\",\"8 - Eight\",\"1 - One\",\"0 - None\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_give_the(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user search the hotel",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_search_the_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user give the info",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_give_the_info()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the process",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.verify_the_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Validate the hotel booking module",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the Adactin login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_on_the_Adactin_login_page()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat com.BaseClass.UtilityClass.ur(UtilityClass.java:27)\r\n\tat com.BaseClass.UtilityClass.max(UtilityClass.java:31)\r\n\tat com.step.StepDefination.user_on_the_Adactin_login_page(StepDefination.java:30)\r\n\tat ✽.user on the Adactin login page(src/test/resources/Features/adac.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User give the valid credentials and login",
  "rows": [
    {
      "cells": [
        "Abarajitha"
      ]
    },
    {
      "cells": [
        "9Z17ON"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_give_the_valid_credentials_and_login(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "user give the Hotel information",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User give the \"Sydney\",\"Hotel Creek\",\"Standard\",\"9 - Nine\",\"1 - One\",\"0 - None\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_give_the(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user search the hotel",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_search_the_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user give the info",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_give_the_info()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the process",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.verify_the_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Validate the hotel booking module",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the Adactin login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_on_the_Adactin_login_page()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat com.BaseClass.UtilityClass.ur(UtilityClass.java:27)\r\n\tat com.BaseClass.UtilityClass.max(UtilityClass.java:31)\r\n\tat com.step.StepDefination.user_on_the_Adactin_login_page(StepDefination.java:30)\r\n\tat ✽.user on the Adactin login page(src/test/resources/Features/adac.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User give the valid credentials and login",
  "rows": [
    {
      "cells": [
        "Abarajitha"
      ]
    },
    {
      "cells": [
        "9Z17ON"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_give_the_valid_credentials_and_login(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "user give the Hotel information",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User give the \"Sydney\",\"Hotel Creek\",\"Standard\",\"10 - Ten\",\"1 - One\",\"0 - None\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_give_the(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user search the hotel",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_search_the_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user give the info",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_give_the_info()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the process",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.verify_the_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Validate the hotel booking module",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the Adactin login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_on_the_Adactin_login_page()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat com.BaseClass.UtilityClass.ur(UtilityClass.java:27)\r\n\tat com.BaseClass.UtilityClass.max(UtilityClass.java:31)\r\n\tat com.step.StepDefination.user_on_the_Adactin_login_page(StepDefination.java:30)\r\n\tat ✽.user on the Adactin login page(src/test/resources/Features/adac.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User give the valid credentials and login",
  "rows": [
    {
      "cells": [
        "Abarajitha"
      ]
    },
    {
      "cells": [
        "9Z17ON"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_give_the_valid_credentials_and_login(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "user give the Hotel information",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User give the \"Sydney\",\"Hotel Creek\",\"Double\",\"4 - Four\",\"2 - Two\",\"1 - One\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_give_the(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user search the hotel",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_search_the_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user give the info",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_give_the_info()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the process",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.verify_the_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Validate the hotel booking module",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the Adactin login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_on_the_Adactin_login_page()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat com.BaseClass.UtilityClass.ur(UtilityClass.java:27)\r\n\tat com.BaseClass.UtilityClass.max(UtilityClass.java:31)\r\n\tat com.step.StepDefination.user_on_the_Adactin_login_page(StepDefination.java:30)\r\n\tat ✽.user on the Adactin login page(src/test/resources/Features/adac.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User give the valid credentials and login",
  "rows": [
    {
      "cells": [
        "Abarajitha"
      ]
    },
    {
      "cells": [
        "9Z17ON"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_give_the_valid_credentials_and_login(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "user give the Hotel information",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User give the \"Sydney\",\"Hotel Creek\",\"Double\",\"5 - Five\",\"2 - Two\",\"1 - One\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_give_the(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user search the hotel",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_search_the_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user give the info",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_give_the_info()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the process",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.verify_the_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});