import { Key } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { MenuList } from "./soloPage";

// Consts
const chromedriver = require('chromedriver');
const fs = require('fs');
const newMenuList = new MenuList();



test('Verify that calorie inforamtaion is correct', async () => {

    //get information for Family Feast Pancake
    await newMenuList.driver.manage().window().maximize();
    await newMenuList.navigate("https://www.ihop.com/en/nutrition");
    await newMenuList.click(newMenuList.nutrionalInfoLink);
    await newMenuList.click(newMenuList.nutCookieDismiss);
    await newMenuList.driver.sleep(1000);

    //take a picture of guideline
    await newMenuList.driver.sleep(1500);
    await fs.writeFile(`${__dirname}/nutritionalVerify1.png`,
    await newMenuList.driver.takeScreenshot(), "base64",
    (e) => {
         if (e) console.error(e)
         else console.log('Save Succesful')
    })
    await newMenuList.driver.sleep(500);

    //Open application
    await newMenuList.navigate();
    await newMenuList.scrollIntoView(newMenuList.familyFeast);
    await newMenuList.clickWithJavaScript(newMenuList.familyFeast);
    await newMenuList.clickWithJavaScript(newMenuList.ffBreakfast);
    await newMenuList.clickWithJavaScript(newMenuList.ffEgg);
    let ffBreakfastCal = await (await newMenuList.getElement(newMenuList.ffCal)).getText();
        expect(ffBreakfastCal).toContain("4690 Calories");
        return ffBreakfastCal;

    // take a picture of order
    await newMenuList.driver.sleep(1500);
    await fs.writeFile(`${__dirname}/nutritionalVerify2.png`,
    await newMenuList.driver.takeScreenshot(), "base64",
    (e) => {
         if (e) console.error(e)
         else console.log('Save Succesful')
    })
    await newMenuList.driver.sleep(500);
    await newMenuList.scrollIntoView(newMenuList.addToCart);

 })

afterAll(async () => {
    await newMenuList.driver.quit()
})