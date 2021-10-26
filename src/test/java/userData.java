import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class userData {
    @FindBy(xpath = "//*[@id=\"__BVID__28\"]/ul/li[6]/a")
    public WebElement registerButton;
    @FindBy(xpath = "//*[@id=\"__layout\"]/div/div[1]/div[1]/div/div[2]/div/button")
    public WebElement acceptButton;
    @FindBy(xpath = "//*[@id=\"modal-login___BV_modal_body_\"]/div/div/div/div/div[2]/a")
    public WebElement createAccount;
    @FindBy(id = "email")
    public WebElement email;
    @FindBy(id = "emailRepeat")
    public WebElement email2;
    @FindBy(id = "password")
    public WebElement password;
    @FindBy(id = "passwordRepeat")
    public WebElement password2;
    @FindBy(id = "firstname")
    public WebElement firstName;
    @FindBy(id = "lastname")
    public WebElement lastName;
    @FindBy(id = "phone")
    public WebElement phone;
    @FindBy(id = "city")
    public WebElement city;
    @FindBy(xpath = "//*[@id=\"__BVID__233\"]/div/div[1]/label/div/div/p")
    public WebElement acceptStatute;
    @FindBy(xpath = "//*[@id=\"__BVID__179\"]/div/button")
    public WebElement registerAccountButton;
    @FindBy (xpath = "//*[@id=\"__layout\"]/div/main/article/div/div/div/div[2]")
    public WebElement registerAlert;

    public userData(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }public void clickAcceptButton() {
        acceptButton.click();
    }public void clickRegisterButton() {
        registerButton.click();
    }public void clickCreateAccount(){
        createAccount.click();
    }public void fillEmail() {
        email.sendKeys("jurek77779797@o2.pl");
    }public void fillEmail2() {
        email2.sendKeys("jurek77779797@o2.pl");
    }public void fillPassword() {
        password.sendKeys("Jurek1234!");
    }public void fillPassword2() {
        password2.sendKeys("Jurek1234!");
    }public void fillFirstName(String paramFirsName ) {
        firstName.sendKeys(paramFirsName);
    }public void fillLastName(String paramLastName) {
        lastName.sendKeys(paramLastName);
    }public void fillPhone(String paramPhone) {
        phone.sendKeys(paramPhone);
    }public void fillCity(String paramCity) {
        city.sendKeys(paramCity);
    }public void clickAcceptStatute(){
        acceptStatute.click();
    }public void clickRegisterAccountButton() {
        registerAccountButton.click();
    }public void checkVisibleRegisterAlert() {
        registerAlert.isEnabled();

    }}