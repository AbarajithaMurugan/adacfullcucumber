package com.Pojo;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.BaseClass.UtilityClass;

public class PersonalInformation extends UtilityClass {
	public PersonalInformation() {
		PageFactory.initElements(driver, this);
	}
	@FindBy(id="first_name")
	private WebElement first;
	@FindBy(id="last_name")
	private WebElement last;
	@FindBy(id="address")
	private WebElement bill;
	@FindBy(id="cc_num")
	private WebElement cardnum;
	@FindBy(id="cc_type")
	private WebElement cardtype;
	@FindBy(id="cc_exp_month")
	private WebElement month;
	@FindBy(id="cc_exp_year")
	private WebElement year;
	@FindBy(id="cc_cvv")
	private WebElement cvv;
	@FindBy(id="book_now")
	private WebElement book;
	public WebElement getFirst() {
		return first;
	}
	public WebElement getLast() {
		return last;
	}
	public WebElement getBill() {
		return bill;
	}
	public WebElement getCardnum() {
		return cardnum;
	}
	public WebElement getCardtype() {
		return cardtype;
	}
	public WebElement getMonth() {
		return month;
	}
	public WebElement getYear() {
		return year;
	}
	public WebElement getCvv() {
		return cvv;
	}
	public WebElement getBook() {
		return book;
	}
	public void info() throws InterruptedException {
	
		type(getFirst(), "abz");
		type(getLast(), "murugan");
		type(getBill(), "xyz");
		type(getCardnum(), "1234567890098765");
		select(getCardtype(), "VISA");
		select(getMonth(), "December");
		select(getYear(), "2021");
		type(getCvv(), "123");
	
		click(getBook());
		

	}

}
