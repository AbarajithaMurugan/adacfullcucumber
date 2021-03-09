package com.Pojo;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.BaseClass.UtilityClass;

public class CriteriaPage extends UtilityClass{
	public CriteriaPage() {
		PageFactory.initElements(driver, this);
	}
	@FindBy(id="location")
	private WebElement loc;
	@FindBy(id="room_nos")
	private WebElement numberofrooms;
	@FindBy(id="hotels")
	private WebElement hotels;
	@FindBy(id="room_type")
	private WebElement roomtype;
	@FindBy(id="adult_room")
	private WebElement adltroom;
	
	@FindBy(id="child_room")
	private WebElement childroom;
	
	@FindBy(id="Submit")
	private WebElement search;

	public WebElement getLoc() {
		return loc;
	}

	public WebElement getNumberofrooms() {
		return numberofrooms;
	}

	public WebElement getHotels() {
		return hotels;
	}

	public WebElement getRoomtype() {
		return roomtype;
	}

	public WebElement getAdltroom() {
		return adltroom;
	}

	public WebElement getChildroom() {
		return childroom;
	}

	public WebElement getSearch() {
		return search;
	}
	
	
	
	public void criteria(String Location,String Hotels,String RoomType,String numofrooms,String adultsperroom, String childrenroom  ) {
		select(getLoc(), Location);
		select(getHotels(), Hotels);
		select(getRoomtype(), RoomType);
		select(getNumberofrooms(), numofrooms);
		select(getAdltroom(), adultsperroom);
		select(getChildroom(), childrenroom);
		click(getSearch());
		

	}
}
