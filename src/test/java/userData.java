import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class userData {
    @FindBy(name = "first_name")
    public WebElement firstName;
    @FindBy(name = "last_name")
    public WebElement lastName;
    @FindBy(name = "email")
    public WebElement email;
    @FindBy(name = "phone")
    public WebElement phone;
    @FindBy(id = "id_pesel")
    public WebElement peselNumber;
    @FindBy(xpath = "//*[@id=\"id_id_numer\"]")
    public WebElement idNumber;
    @FindBy(css = "#id_date")
    public WebElement dateOfBirth;
    @FindBy(xpath = "//*[@id=\"id_date\"]/i")
    public WebElement emptyField;
    @FindBy(id = "form_button_next")
    public WebElement nextButton;
    @FindBy(xpath = "//*[@id=\"fieldgroup_zgoda\"]/div[1]")
    public WebElement agreePage;

    public userData(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }public void fillFirstName(String paramFirstName) {
        firstName.sendKeys(paramFirstName);
    }public void fillLastName(String paramLastName) {
        lastName.sendKeys(paramLastName);
    }public void fillEmail(String paramEmail) {
        email.sendKeys(paramEmail);
    }public void fillPhoneNumber(String paramPhoneNumber) {
        phone.sendKeys(paramPhoneNumber);
    }public void clearPeselNumber() {
        peselNumber.click();
    }public void fillPeselNumber(String paramPeselNumber){
        peselNumber.sendKeys(paramPeselNumber);
    }public void fillIdNumber(String paramIdNumber){
        idNumber.sendKeys(paramIdNumber);
    }public void fillDateOfBirth(String paramDateOfBirth){
        dateOfBirth.sendKeys(paramDateOfBirth);
    }public void clickOnEmptyField(){
        emptyField.click();
    }public void clickOnNextButton2(){
        nextButton.click();
    }public void agreePageIsVisible(){
        agreePage.isEnabled();
    }
}
