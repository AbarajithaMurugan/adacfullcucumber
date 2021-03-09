package com.BaseClass;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;



public class jvmreport  {
	public static void report(String json) {
		File f=new File("C:\\Users\\Navin Vishal M\\Downloads\\Abara's\\eclipse\\configuration\\AdactinFullCucumber\\Reports\\JVMreport");
		Configuration con =new Configuration(f,"Adactin page");
		con.addClassifications("sprint", "52");
		con.addClassifications("browser", "chrome");
		List<String>li=new ArrayList<String>();
		li.add(json);
		ReportBuilder rep=new ReportBuilder(li, con);
		rep.generateReports();

	}

}
