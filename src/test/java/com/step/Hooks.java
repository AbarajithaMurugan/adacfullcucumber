package com.step;

import javax.rmi.CORBA.Util;

import com.BaseClass.UtilityClass;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends UtilityClass{
	@After
	public void after() {
	System.out.println("execute after scenario");

	}
	@Before
	public void before() {
		System.out.println("execute before scenario");

	}
	

}
