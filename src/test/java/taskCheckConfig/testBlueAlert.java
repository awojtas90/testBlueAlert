package taskCheckConfig;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.By;

public class testBlueAlert {

        public static void main(String[] args) {
            System.setProperty("webdriver.chrome.driver",
                    "src/test/resources/drivers/chromedriver.exe");
            WebDriver driver = new ChromeDriver();
            driver.manage().window().maximize();
            driver.get("https://app.bluealert.pl/ba/form/formularz-testowy");

            String firstName = "first_name";
            String lastName = "last_name";
            String email = "email";
            String phone = "phone";
            String peselNumber = "id_pesel";
            String idNumber = "//*[@id=\"id_id_numer\"]";
            String dateOfBirth = "#id_date";
            String field = "//*[@id=\"id_date\"]/i";
            String submitButton = "form_button_next";
            String consent1 = "//*[@id=\"fieldgroup_zgoda__fields\"]/div[1]/div[1]/div/label";
            String consent2 = "//*[@id=\"fieldgroup_zgoda__fields\"]/div[2]/div[1]/div/label";
            String submitButton2 = "form_button_next";

            driver.findElement(By.name(firstName)).sendKeys("Jan");
            driver.findElement(By.name(lastName)).sendKeys("Kowalski");
            driver.findElement(By.name(email)).sendKeys("jaek@98989.pl");
            driver.findElement(By.name(phone)).sendKeys("765948277");
            driver.findElement(By.id(peselNumber)).click();
            driver.findElement(By.id(peselNumber)).sendKeys("85042959495");
            driver.findElement(By.xpath(idNumber)).sendKeys("MMU816702");
            driver.findElement(By.cssSelector(dateOfBirth)).sendKeys("1990-07-09");
            driver.findElement(By.xpath(field)).click();
            driver.findElement(By.id(submitButton)).click();
            driver.findElement(By.xpath(consent1)).click();
            driver.findElement(By.xpath(consent2)).click();
            driver.findElement(By.id(submitButton2)).click();
//            driver.close();
        }
    }

