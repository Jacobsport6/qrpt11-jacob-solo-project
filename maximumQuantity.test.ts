import { BasePage } from "./basePage";
import { MenuList } from "./soloPage";

// Consts
const chromedriver = require('chromedriver');
const fs = require('fs');
const newMenuList = new MenuList();

test('Add multiple items in a cart', async () => {
    //Go to website
    await newMenuList.navigate();
    await newMenuList.driver.sleep(1000);
    await newMenuList.driver.manage().window().maximize();


    //Navigate to juice
    await newMenuList.scrollIntoView(newMenuList.bvBeverages);
    await newMenuList.clickWithJavaScript(newMenuList.bvBeverages);
    await newMenuList.driver.sleep(1000);
    await newMenuList.scrollIntoView(newMenuList.bvFruitJuiceLink);
    await newMenuList.clickWithJavaScript(newMenuList.bvFruitJuiceLink);


    //Increase Qunitity of Juice
    await newMenuList.driver.sleep(1000);
    await newMenuList.click(newMenuList.nutCookieDismiss);
    await newMenuList.click(newMenuList.bvOrangeJuice);
    await newMenuList.multiClick(99, newMenuList.addQuanity);

    //Add to cart
    await newMenuList.click(newMenuList.addToCart);

    // take screenshot of the error 
    await newMenuList.driver.sleep(1000);   
    await fs.writeFile(`${__dirname}/MultipleItems.png`,
     await newMenuList.driver.takeScreenshot(), "base64",
     (e) => {
         if (e) console.error(e)
         else console.log('Save Succesful')
     })
})

afterAll(async () => {
    await newMenuList.driver.quit()
})