package com.BaseClass;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import io.github.bonigarcia.wdm.WebDriverManager;

public class UtilityClass {
	public static WebDriver driver;
	public static void launch() {
		
		if (driver==null) {
			WebDriverManager.chromedriver().setup();
	driver=new ChromeDriver();
		
 	
		
	}
		

	}
	public void ur(String url) {
		driver.get(url);

	}
	public void max(String url) {
		ur(url);
		driver.manage().window().maximize();
		impwait();

	}
	public void impwait() {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

	}
	public void type(WebElement web,String fill) {
		
			web.sendKeys(fill);
		}
	public void click(WebElement web) {
		
		web.click();
		
	
	

}
	public void select(WebElement web,String text) {
		 Select s= new Select(web);
		 s.selectByVisibleText(text);

	}
	public void sleep() throws InterruptedException {
	Thread.sleep(2000);

	}

		

	

}
