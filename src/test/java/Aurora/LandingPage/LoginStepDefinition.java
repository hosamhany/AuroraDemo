package Aurora.LandingPage;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;

public class LoginStepDefinition {
	WebDriver driver = null;

	@Given("^User navigates to Aurora$")
	public void navigateToAurora() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "chromedriver");
		driver = new ChromeDriver();
		driver.navigate().to("http://auroralms.com");
	}

	@When("^User enters email as \"([^\"]*)\" and password as \"([^\"]*)\"$")
	public void User_enters_email_as_and_password_as(String userName, String password) {
		// Express the Regexp above with the code you wish you had
		driver.findElement(By
				.xpath("//input[@class = 'form-control ng-pristine ng-untouched ng-valid-email ng-invalid ng-invalid-required']"))
				.sendKeys(userName);
		driver.findElement(By
				.xpath("//div[@class ='form-group form-group-lg']//input[@class ='form-control ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-minlength']"))
				.sendKeys(password);
		driver.findElement(By
				.xpath("//div[@class= 'form-group']//button[@class = 'btn btn-lg btn-primary btn-block btn-aurora ng-scope']"))
				.click();
	}

	@Then("^Login should be succesful")
	public void Login_should_be_successful() throws InterruptedException {
		Thread.sleep(1000);
		boolean check = driver.getCurrentUrl().equals("http://auroralms.com/#/users/home");
		Assert.assertFalse(check);
	}

}