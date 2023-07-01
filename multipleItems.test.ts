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
    await newMenuList.click(newMenuList.nutCookieDismiss);
    await newMenuList.driver.sleep(500);

    // take screenshot of the multiple items in the cart    
    await fs.writeFile(`${__dirname}/MultipleItems1.png`,
     await newMenuList.driver.takeScreenshot(), "base64",
     (e) => {
         if (e) console.error(e)
         else console.log('Save Succesful')
     })
     await newMenuList.driver.sleep(500);


    await newMenuList.click(newMenuList.addToCart);
    await newMenuList.driver.sleep(1500);

    //add other items to cart
    await newMenuList.navigate();
    await newMenuList.scrollIntoView(newMenuList.bvBeverages);
    await newMenuList.clickWithJavaScript(newMenuList.bvBeverages);
    await newMenuList.driver.sleep(1000);
    await newMenuList.scrollIntoView(newMenuList.bvFruitJuiceLink);
    await newMenuList.clickWithJavaScript(newMenuList.bvFruitJuiceLink);


    //Increase Qunitity of Juice
    await newMenuList.driver.sleep(1000);
    await newMenuList.click(newMenuList.bvOrangeJuice);
    await newMenuList.click(newMenuList.addToCart);

    // take screenshot of the multiple items in the cart    
    await fs.writeFile(`${__dirname}/MultipleItems2.png`,
     await newMenuList.driver.takeScreenshot(), "base64",
     (e) => {
         if (e) console.error(e)
         else console.log('Save Succesful')
     })
     await newMenuList.driver.sleep(500);

    //view cart
    await newMenuList.click(newMenuList.chGuestSignUp);
    await newMenuList.click(newMenuList.chPickUpMethod);
    await newMenuList.click(newMenuList.chConfirmRestaurant);
    await newMenuList.click(newMenuList.chContinueToMenu);
    await newMenuList.navigate();

    
     

})
afterAll(async () => {
    await newMenuList.driver.quit()
})