package com.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.BaseClass.UtilityClass;
import com.BaseClass.jvmreport;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\Features\\adac.feature",monochrome=true,glue="com.step",
plugin= {"pretty","html:C:\\Users\\Navin Vishal M\\Downloads\\Abara's\\eclipse\\configuration\\AdactinFullCucumber\\Reports\\HTML",
	"junit:C:\\Users\\Navin Vishal M\\Downloads\\Abara's\\eclipse\\configuration\\AdactinFullCucumber\\Reports\\XML\\adac.xml",
	"json:C:\\Users\\Navin Vishal M\\Downloads\\Abara's\\eclipse\\configuration\\AdactinFullCucumber\\Reports\\JSON\\adac.json"
,"json:C:\\\\Users\\\\Navin Vishal M\\\\Downloads\\\\Abara's\\\\eclipse\\\\configuration\\\\AdactinFullCucumber\\\\Reports\\\\JVMreport\\\\adac.json"
,"rerun:target\\fail.txt"

})
public class TestRunner extends UtilityClass{
	@AfterClass
	public static void report() {
	jvmreport.report("C:\\Users\\Navin Vishal M\\Downloads\\Abara's\\eclipse\\configuration\\AdactinFullCucumber\\Reports\\JVMreport\\adac.json");
	}

}
