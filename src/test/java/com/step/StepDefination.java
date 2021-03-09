package com.step;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.BaseClass.UtilityClass;
import com.Pojo.ConfirmationPage;
import com.Pojo.CriteriaPage;
import com.Pojo.HotelSelectionpage;
import com.Pojo.LoginPage;
import com.Pojo.PersonalInformation;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class StepDefination extends UtilityClass{
	  LoginPage lp;
	  CriteriaPage cp;
	   PersonalInformation per;
	   ConfirmationPage con;

@Given("user on the Adactin login page")
public void user_on_the_Adactin_login_page() {
 //  launch();
   max("https://adactinhotelapp.com/");
   
}

@When("User give the valid credentials and login")
public void user_give_the_valid_credentials_and_login(io.cucumber.datatable.DataTable dataTable) {
  List<String> li=dataTable.asList();
lp=new LoginPage();
lp.login(li.get(0), li.get(1));
}




@When("User give the {string},{string},{string},{string},{string},{string}")
public void user_give_the(String string, String string2, String string3, String string4, String string5, String string6) {
cp=new CriteriaPage();
cp.criteria(string, string2, string3, string4, string5, string6);

}

@When("user search the hotel")
public void user_search_the_hotel() throws InterruptedException {
	HotelSelectionpage hp=new HotelSelectionpage();
	hp.selectinghotel();

	
	
   
   
}
@When("user give the info")
public void user_give_the_info() throws InterruptedException {
	per=new PersonalInformation();
	per.info();
	sleep();
    
}



@Then("verify the process")
public void verify_the_process() throws InterruptedException {
	con=new ConfirmationPage();
	con.confirm();
}





}
