package Runner;

import java.io.File;

import org.testng.annotations.AfterClass;

import com.cucumber.listener.Reporter;

//import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
//import cucumber.api.junit.Cucumber;

//@RunWith(Cucumber.class)
@CucumberOptions(
		features ="C://Users//satya//workspace//bdd//src//main//java//Features//login.feature"
		,glue={"StepDefinations"},
		tags= {"@User,~@Admin"},
		format={"pretty","html:test-output","json:json_output//cucumber.json","junit:junit_output//cucumber.xml",
				"com.cucumber.listener.ExtentCucumberFormatter:cucumber-extent//report.html"},
		strict = true,
		monochrome=true, //  to display console output in a proper readable format 
		dryRun = false   //  to check definition file and features scanrios are valid or not 
		
		
		)



public class TestRunner extends AbstractTestNGCucumberTests {
	
	@AfterClass
    public static void reportSetup() 
 	{
        Reporter.loadXMLConfig(new File("src/main/java/Features/extent-config.xml"));
        /*Properties p = System.getProperties();
        p.list(System.out);*/
        
        Reporter.setSystemInfo("User Name",System.getProperty("user.name"));
        Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
        Reporter.setSystemInfo("64 Bit", 	"Windows 10");
      
        Reporter.setSystemInfo("1.8.0_65", "Java Version");
        Reporter.setTestRunnerOutput("Cucumber JUnit Test Runner");
 	}
	
	
	
	
	

}
