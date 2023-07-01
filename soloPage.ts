import {By} from "selenium-webdriver"
import {BasePage} from "./basePage"

export class MenuList extends BasePage {
    
//Locators
    searchBar: By = By.name('q');
    

    //Breakfast Sampler Locators
    comboLink: By = By.xpath('//div[@data-reactid = "111"]');
    breakfastSampler: By = By.xpath('//div[@class="subcategory-description"]');
    bsEggScrambled: By = By.xpath('//div[@data-cardname="2 Scrambled"]');
    bsEggScrambledNoCheese: By = By.xpath('//input[@data-toppingid="9326905680"]');
    bsEggScrambledWithCheese: By = By.xpath('//input[@data-toppingid="9326905679"]');
    bsSaveBtn: By = By.xpath ('//button[@id = "comboSaveButton"]');
    bs2B2S2H: By = By.xpath('//div[@data-cardname="2 Bacon, 2 Sausage, 2 Ham"]');
    bsHashBrown: By = By.xpath('//div[@data-cardname="Regular Hash Browns"]');
    bsPancakeRegular: By = By.xpath('//div[@data-cardname="2 Buttermilk"]');
    bsPancakeFlavored: By = By.xpath('//div[@data-cardname="Substitute for Flavored Pancakes"]');
    bsPancakeNYCheesecake: By = By.xpath('//div[@data-toppingid="9326905705"]');
    bsBeverage1: By = By.xpath('//div[@data-reactid="420"]');
    bsBeverage2: By = By.xpath('//div[@data-reactid="434"]');
    bsTotalPrice: By = By.xpath('//span[@class="js-totalprice"]');


    //Omelette Locators
    omeletteLink: By = By.xpath('//div[@data-reactid="120"]');
    omSpicyPoblanoOmelette: By = By.xpath('//div[@class="subcategory-description"]');
    omEggStandard: By = By.xpath('//div[@data-cardname="Standard+"]');
    omToast: By = By.xpath('//div[@data-reactid="120"]');
    omToastWhite: By = By.xpath('//div[@class="col-md-3 col-xs-4 col-sm-3 col-4 js-cart-item-product-img"]');
    omToastButter: By = By.xpath('//div[@data-toppingid="9328757198"]');

    //Family Feast
    familyFeast: By = By.xpath('//div[@data-reactid="94"]');
    ffBreakfast: By = By.xpath('//div[@class="subcategory-description"]');
    ffEgg: By = By.xpath('//div[@data-reactid="85"]');
    ffCal: By = By.xpath('//div[@data-reactid="30"]');
    

    //Beverage Locators
    bvBeverages: By = By.xpath('//div[@data-reactid = "255"]');
    bvFruitJuiceLink: By = By.xpath('//div[@class="subcategory-description"]');
    bvOrangeJuice: By = By.xpath('//div[@data-reactid = "80"]');

    //Cart Locators
    addToCart: By = By.xpath('//button[@data-basketproductid = "0"]');
    addQuanity: By = By.xpath('//button[@data-reactid="54"]');

    //Checkout Locators
    chorderNow: By = By.xpath('//a[@class = "navbar-cta__link navbar-header-order-button js-header-order-button"]');
    chGuestSignUp: By = By.xpath('//div[@data-isbasket="True"]');
    chPickUpMethod: By = By.xpath('//div[@class="details"]');
    chConfirmRestaurant: By = By.xpath('//a[@data-externalid = "39453"]');
    chContinueToMenu: By = By.xpath('//div[@class="col-12 col-sm-9"]');
    chCloseCart: By = By.xpath('//i[class="fal fa-times-circle"]');
    chClickOutside: By = By.xpath('//button[@aria-labelledby="signupForm"]');
    chOpenEmptyCart: By = By.xpath('//img[@class = "img-fluid empty-cart-icon"]');
    chOpenFullCart: By = By.xpath('//img[@class = "img-fluid filled-cart-icon js-ob-filled-icon"]');
    
    //Nutrional Calculator Locators
    nutrionalInfoLink: By = By.xpath('//a[@class="nutrition-header-link"][1]');
    nutrionalCalLnk: By = By.xpath('//a[@class="nutrition-header-link"][2]');
    nutSearchBar: By = By.xpath('//input[@nclass="formText itemsSearchField"]');
    nutCloseCart: By = By.xpath('//section[@class="o-section section section-full "]');
    nutCrepe: By = By.xpath('//td[@headers="inmGrid_c0"][7]');
    nutCrepeCal: By = By.xpath('//td[@aria-label="4,690 Calories"]');
    nutBurger: By = By.xpath('//td[@class="al"]');
    nutBurgerCal: By = By.xpath('//td[@aria-label="4,690 Calories"]');
    nutCookieDismiss: By = By.xpath('//button[@id="onetrust-accept-btn-handler"]');
    nutCalLabel: By = By.xpath('//div[@class="loadingCalculatoData"]');
    nutCalLabelOption: By = By.xpath('//option[@value="2674"]');
    nutCalItem: By = By.xpath('//select[@id="item_id"]');
    nutCalItemOption: By = By.xpath('//option[@value="275996"]');
    nutWindow: By = By.xpath('//section[@class="o-section section section-full "]');
    


    constructor() {
        super({url: "https://www.ihop.com/en/menu"});
    };
    async search(searchTerm: string) {
        return this.setInput(this.searchBar, `${searchTerm}\n`)
    };

}
