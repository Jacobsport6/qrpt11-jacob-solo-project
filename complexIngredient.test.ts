import { Key } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { MenuList } from "./soloPage";

// Consts
const chromedriver = require('chromedriver');
const fs = require('fs');
const newMenuList = new MenuList();

test('Add a single item with adavanded ingredients', async () => {
    await newMenuList.navigate();
    await newMenuList.driver.manage().window().maximize();
    await newMenuList.driver.sleep(1000);

    //Go to Combo
    await newMenuList.scrollIntoView(newMenuList.comboLink);
    await newMenuList.clickWithJavaScript(newMenuList.comboLink);
    await newMenuList.scrollIntoView(newMenuList.breakfastSampler);
    await newMenuList.clickWithJavaScript(newMenuList.breakfastSampler);

    //add Breakfast Sampler to 
    await newMenuList.click(newMenuList.nutCookieDismiss);
    await newMenuList.click(newMenuList.bsEggScrambled);
    await newMenuList.click(newMenuList.bsEggScrambledWithCheese);
    await newMenuList.click(newMenuList.bsSaveBtn);
    await newMenuList.driver.sleep(500);
    await newMenuList.click(newMenuList.bs2B2S2H);
    await newMenuList.click(newMenuList.bsHashBrown);
    await newMenuList.click(newMenuList.bsPancakeFlavored);
    await newMenuList.click(newMenuList.bsPancakeNYCheesecake);
    await newMenuList.driver.sleep(500);
    await newMenuList.multiClick(2, newMenuList.bsSaveBtn);
    await newMenuList.driver.sleep(500);
    await newMenuList.scrollIntoView(newMenuList.bsSaveBtn);
    await newMenuList.clickWithJavaScript(newMenuList.bsSaveBtn);
    await newMenuList.click(newMenuList.bsBeverage1);
    await newMenuList.scrollIntoView(newMenuList.bsBeverage2);
    await newMenuList.clickWithJavaScript(newMenuList.bsBeverage2);

    //Make sure price of addons is correct
    let resultsText = await (await newMenuList.getElement(newMenuList.bsTotalPrice)).getText();
        expect(resultsText).toContain("$25.44");
        return resultsText;

    // take a picture of order
    await newMenuList.driver.sleep(1500);
    await fs.writeFile(`${__dirname}/complexIngredient.png`,
     await newMenuList.driver.takeScreenshot(), "base64",
     (e) => {
         if (e) console.error(e)
         else console.log('Save Succesful')
     })
     await newMenuList.driver.sleep(500);

})
afterAll(async () => {
    await newMenuList.driver.quit()
})