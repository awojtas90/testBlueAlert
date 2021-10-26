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
    private userData flexiPage;
    String acceptStatute = "//*[@id=\"__BVID__233\"]/div/div[1]/label/div/div/p";
    String registerAccountButton = "//*[@id=\"__BVID__179\"]/div/button";

    @Given("^Page (.*) opened in browser$")
    public void openPageInBrowser(String url) {
        System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(8, TimeUnit.SECONDS);
        driver.get(url);
        flexiPage = new userData(driver);

    }@When("^click on registration button$")
    public void clickRegisterButton() {
        flexiPage.clickRegisterButton();
    }@And("^accept the statue$")
    public void clickAcceptButton() {
        flexiPage.clickAcceptButton();
    }@Then("^click on register button$")
    public void createAccount(){
        flexiPage.clickCreateAccount();
    }@And("^fill email$")
    public void fillEmail() {
        flexiPage.fillEmail();
    }@And("^fill email2$")
    public void fillEmail2() {
        flexiPage.fillEmail2();
    }@And("^fill password$")
    public void fillPassword() {
        flexiPage.fillPassword();
    }@And("^fill password2$")
    public void fillPassword2() {
        flexiPage.fillPassword2();
    }@And("^fill first name(.*)$")
    public void fillFirstName(String paramFirstName) {
        flexiPage.fillFirstName(paramFirstName);
    }@And("^fill last name(.*)$")
    public void fillLastName(String paramLastName) {
        flexiPage.fillLastName(paramLastName);
    }@And("^fill phone(.*)$")
    public void fillPhone(String paramPhone) {
        flexiPage.fillPhone(paramPhone);
    }@And("^fill city(.*)$")
    public void fillCity(String paramCity) {
        flexiPage.fillCity(paramCity);
    }@And ("^accept statements$")
    public void userAcceptStatue(){
        WebElement element = driver.findElement(By.xpath(acceptStatute));
        JavascriptExecutor executor = (JavascriptExecutor)driver;
        executor.executeScript("arguments[0].click()", element);
    }@And ("^submit registration$")
    public void submitRegistration(){
        WebElement element2 = driver.findElement(By.xpath(registerAccountButton));
        JavascriptExecutor executor2 = (JavascriptExecutor)driver;
        executor2.executeScript("arguments[0].click()", element2);
    }@Then ("^alert of registration confirmation is viewed$")
    public void registrationAlert(){
        flexiPage.checkVisibleRegisterAlert();
        File screenshot = ((TakesScreenshot) driver)
                .getScreenshotAs(OutputType.FILE);
        try {
            FileUtils.copyFile(screenshot, new File("Pulpit.CheckIfRegisterIsSuccess.jpg"));
        } catch (
                IOException e) {
            e.printStackTrace();
        }}
   @And ("^close browser$")
        public void closeBrowser() {
       driver.close();
   }}