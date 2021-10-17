import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

public class userDataSteps {
    private WebDriver driver;
    private userData baPage;

    @Given("^Page (.*) opened in browser$")
    public void openPageInBrowser(String url) {
        System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(8, TimeUnit.SECONDS);
        driver.get(url);
        baPage = new userData(driver);
    }@When("^User fill firstName(.*)$")
    public void userFillFirstName(String paramFirstName) {
        baPage.fillFirstName(paramFirstName);
    }@And("^fill lastName(.*)$")
    public void fillLastName(String paramLastName) {
        baPage.fillLastName(paramLastName);
    }@And("^fill email(.*)$")
    public void fillEmail(String paramEmail) {
        baPage.fillEmail(paramEmail);
    }@And("^fill phoneNumber(.*)$")
    public void fillPhone(String paramPhoneNumber){
        baPage.fillPhoneNumber(paramPhoneNumber);
    }@And("^fill peselNumber(.*)$")
    public void fillPeselNumber(String paramPeselNumber){
        baPage.clearPeselNumber();
        baPage.fillPeselNumber(paramPeselNumber);
    }@And("^fill idNumber(.*)$")
    public void fillIdNumber(String idNumber){
        baPage.fillIdNumber(idNumber);
    }@And("^fill dateOfBirth(.*)$")
    public void fillDateOfBirth(String paramDateOfBirth){
        baPage.fillDateOfBirth(paramDateOfBirth);
        baPage.clickOnEmptyField();
    }@And("^submit nextButton$")
    public void clickOnNextButton(){
        baPage.clickOnNextButton2();
    }@Then("^user see agreePage$")
    public void agreePageIsVisible(){
        baPage.agreePageIsVisible();
        File screenshot = ((TakesScreenshot) driver)
                .getScreenshotAs(OutputType.FILE);
        try {
            FileUtils.copyFile(screenshot, new File("Pulpit.CheckIfAgreePageIsVisible.jpg"));
        } catch (
                IOException e) {
            e.printStackTrace();
        }}
   @And ("^close browser$")
        public void closeBrowser() {
       driver.close();
   }}