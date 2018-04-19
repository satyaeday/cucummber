package StepDefinations;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition {
	
	WebDriver driver;
	
	Scenario scenario;
	
	@Before({"@User,@Admin"})
	public void testSetUp(Scenario scenario){
		
         this.scenario=scenario;
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\satya\\workspace\\testSelenium\\drivers\\chromedriver.exe");
		
		driver=new ChromeDriver();
		
		System.out.println("TEST ENV SET UP  ");
		
		System.out.println("===================================================  ");
		
		System.out.println("execute scenario  "+scenario.getName());
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		
	}
	
	@After({"@User,@Admin"})
	public void tearDown(Scenario scenario){
		
		
		scenario.write("FINISHED SCENARIO");
		
		if(scenario.isFailed())
		{
			
	     scenario.embed(((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES),"image/png");
	    	
		}
		
          System.out.println("TEST ENV distroyed     ");
		
		System.out.println("===================================================  ");
		
		driver.close();
		
		driver.quit();
		
		
	}
	
	
	
	
	@Given("^User is already on Login Page$")
	public void user_already_on_login_page(){
		
		System.out.println("logging info 1 ");
		
		
		driver.get("https://www.freecrm.com");
			
	}
	
	@When("^title of login page is Free CRM$")
	
     public void title_of_login_page_is_free_crm(){
		
		System.out.println("logging info 2 ");
		
		String title = driver.getTitle();
		
		System.out.println(title);
		
		Assert.assertEquals("#1 Free CRM for Any Business: Online Customer Relationship Software", title);
			
	  }
	
	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username, String password)  {
		
		System.out.println("logging info 3 ");
	    
		driver.findElement(By.name("username")).sendKeys(username);
		
		driver.findElement(By.name("password")).sendKeys(password);
	    
	}
	
	
	@Then("^User clicks on login button$")
	public void User_clicks_on_login_button()  {
		
		System.out.println("logging info 4 ");
		
		WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
	 
		JavascriptExecutor js = (JavascriptExecutor)driver;
    	js.executeScript("arguments[0].click();", loginBtn);
	}
	
	
	@Then("^user is on Home Page$")
	public void user_is_on_Home_Page()  {
		
		System.out.println("logging info 5 ");
	    
		String title2=driver.getTitle();
		
		System.out.println(title2);
		
		Assert.assertEquals("CRMPRO", title2);
	}

	
	
	
	
	

}
