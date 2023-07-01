import { Key } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { MenuList } from "./soloPage";

// Consts
const chromedriver = require('chromedriver');
const fs = require('fs');
const newMenuList = new MenuList();

test('Add a single item with simple', async () => {
    await newMenuList.navigate();
    await newMenuList.driver.manage().window().maximize();
    await newMenuList.driver.sleep(1000);

    //Go to Omelette
    await newMenuList.scrollIntoView(newMenuList.omeletteLink);
    await newMenuList.clickWithJavaScript(newMenuList.omeletteLink);

    //add Omelette to cart
    await newMenuList.click(newMenuList.omSpicyPoblanoOmelette);
    await newMenuList.click(newMenuList.omEggStandard);
    await newMenuList.click(newMenuList.omToast);
    await newMenuList.click(newMenuList.omToastWhite);
    await newMenuList.multiClick(2, newMenuList.bsSaveBtn);
    await newMenuList.driver.sleep(1500);
    

    // take screenshot of the multiple items in the cart    
    await fs.writeFile(`${__dirname}/simpleIngredient.png`,
     await newMenuList.driver.takeScreenshot(), "base64",
     (e) => {
         if (e) console.error(e)
         else console.log('Save Succesful')
     })
     await newMenuList.driver.sleep(500);
     //await newMenuList.click(newMenuList.addToCart);
     await newMenuList.driver.sleep(500);


})
afterAll(async () => {
    await newMenuList.driver.quit()
})