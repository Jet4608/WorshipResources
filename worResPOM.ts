import { Builder, By, Capabilities, until, WebDriver,
     WebElement, Key } from "selenium-webdriver";
import { BasePage } from './basePage'
const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();
//selectors aka what we are manipulating




// export const schCallMainArea: By[] = [
//    By.xpath('(//a[@href="/free30"])[1]'),
//    By.xpath('(//a[@href="/free30"])[2]'),
//    By.xpath('(//a[@href="/free30"])[3]'),
//    By.xpath('(//a[@href="/free30"])[4]'), 
//    By.xpath('(//a[@href="/free30"])[5]'),
//    By.xpath('(//a[@href="/free30"])[6]'),
//    By.xpath('(//a[@href="/free30"])[7]'),
//];

export default class WorRes extends BasePage {
    schCallHead: By = By.xpath('(//a[@class="et_pb_button et_pb_button_0_tb_header et_hover_enabled et_pb_bg_layout_light"])');
    schCallMainArea1: By = By.xpath('(//a[@href="/free30"])[1]');
    schCallMainArea2: By = By.xpath('(//a[@href="/free30"])[2]');
    schCallMainArea3: By = By.xpath('(//a[@href="/free30"])[3]');
    schCallMainArea4: By = By.xpath('(//a[@href="/free30"])[4]');
    schCallMainArea5: By = By.xpath('(//a[@href="/free30"])[5]');
    schCallMainArea6: By = By.xpath('(//a[@href="/free30"])[6]');
    schCallMainArea7: By = By.xpath('(//a[@href="/free30"])[7]');

//Resources main page:
wrResourcesTab: By = By.xpath('(//li[@class="et_pb_menu_page_id-5 menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-55080"])[1]');
/* The Media, Music and Tech are not needed once you're on the Resources page
//1st menu: Media
media: By = By.xpath('(//a[@class="et_pb_button et_pb_button_0 et_hover_enabled et_pb_bg_layout_light"])');
//2nd menu: Music
music: By = By.xpath('(//li[@id="menu-item-55099"])[1]');
//3rd menu: Tech
tech: By = By.xpath('(//li[@id="menu-item-55101"])[1]');
*/
/*Media Sub menu: 
Church Media Libraries
Church Motion Backgrounds
Church Videos (Mini movies)
Church Stock Photos
Church Stock Videos
Church Fonts
Sermon Series Graphics */
churchMediaLib: By = By.xpath('(//a[@class="et_pb_button"])[1]');

/*Music Resources Sub menu:
Church Copyright Resources
Church Muisc Charts & Publishers
Multitracks & Click Tracks
Stock Music Publishers */

/*Tech Resources Sub menu:
Church Management Software
Church Website Builders
Church Sound Training
Worship Leader Training
 */

    //Resources > Media > Church Media Libraries
//Free Church Media Libraries
churchMediaDrop: By = By.xpath('(//h4[@class="et_pb_module_header"])[1]');
creationSwap: By = By.xpath('(//h4[@class="et_pb_module_header"])[2]');
ministryDesigns: By = By.xpath('(//h4[@class="et_pb_module_header"])[3]');
pixelPreacher: By = By.xpath('(//h4[@class="et_pb_module_header"])[4]');

//Paid Church Media Libraries
beamerfilms: By = By.xpath('(//h4[@class="et_pb_module_header"])[5]');
centerlineNewMedia: By = By.xpath('(//h4[@class="et_pb_module_header"])[6]');
churchMotionGraphics: By = By.xpath('(//h4[@class="et_pb_module_header"])[7]');
churchCountdowns: By = By.xpath('(//h4[@class="et_pb_module_header"])[8]');
easyWorship: By = By.xpath('(//h4[@class="et_pb_module_header"])[9]');
floodgateProductions: By = By.xpath('(//h4[@class="et_pb_module_header"])[10]');
freeBridgeMedia: By = By.xpath('(//h4[@class="et_pb_module_header"])[11]');
hyperpixelsMedia: By = By.xpath('(//h4[@class="et_pb_module_header"])[12]');
igniterMedia: By = By.xpath('(//h4[@class="et_pb_module_header"])[13]');
lifeScribeMedia: By = By.xpath('(//h4[@class="et_pb_module_header"])[14]');
motionWorship: By = By.xpath('(//h4[@class="et_pb_module_header"])[15]');
playbackMedia: By = By.xpath('(//h4[@class="et_pb_module_header"])[16]');
sermonCentral: By = By.xpath('(//h4[@class="et_pb_module_header"])[17]');
shareFaith: By = By.xpath('(//h4[@class="et_pb_module_header"])[18]');
shiftWorship: By = By.xpath('(//h4[@class="et_pb_module_header"])[19]');
visualMediaChurch: By = By.xpath('(//h4[@class="et_pb_module_header"])[20]');


 /*   //Resources > Media > Church Media Libraries
//Free Church Media Libraries
const churchMediaDrop: By = By.xpath('(//h4[@class="et_pb_module_header"])[1]');
const creationSwap: By = By.xpath('(//h4[@class="et_pb_module_header"])[2]');
const ministryDesigns: By = By.xpath('(//h4[@class="et_pb_module_header"])[3]');
const pixelPreacher: By = By.xpath('(//h4[@class="et_pb_module_header"])[4]');

//Paid Church Media Libraries
const beamerfilms: By = By.xpath('(//h4[@class="et_pb_module_header"])[5]');
const centerlineNewMedia: By = By.xpath('(//h4[@class="et_pb_module_header"])[6]');
const churchMotionGraphics: By = By.xpath('(//h4[@class="et_pb_module_header"])[7]');
const churchCountdowns: By = By.xpath('(//h4[@class="et_pb_module_header"])[8]');
const easyWorship: By = By.xpath('(//h4[@class="et_pb_module_header"])[9]');
const floodgateProductions: By = By.xpath('(//h4[@class="et_pb_module_header"])[10]');
const freeBridgeMedia: By = By.xpath('(//h4[@class="et_pb_module_header"])[11]');
const hyperpixelsMedia: By = By.xpath('(//h4[@class="et_pb_module_header"])[12]');
const igniterMedia: By = By.xpath('(//h4[@class="et_pb_module_header"])[13]');
const lifeScribeMedia: By = By.xpath('(//h4[@class="et_pb_module_header"])[14]');
const motionWorship: By = By.xpath('(//h4[@class="et_pb_module_header"])[15]');
const playbackMedia: By = By.xpath('(//h4[@class="et_pb_module_header"])[16]');
const sermonCentral: By = By.xpath('(//h4[@class="et_pb_module_header"])[17]');
const shareFaith: By = By.xpath('(//h4[@class="et_pb_module_header"])[18]');
const shiftWorship: By = By.xpath('(//h4[@class="et_pb_module_header"])[19]');
const visualMediaChurch: By = By.xpath('(//h4[@class="et_pb_module_header"])[20]');
  //  rsrcsTab: By = By.xpath

*/



    /* Note from Mars: When I do the pricing it will need to be structured like 
    let i = the thing I'm setting the array to as my selector*/
   
    
    //constructor
    constructor () {
        super ({url:"https://www.worshipresources.church/"});
    }

    //methods
    
    async wrshpRsrcsTabs() {
        const handles = await this.driver.getAllWindowHandles();
        if (handles.length > 1) {
            const originalHandle = handles[0];
            const newHandle = handles[1];
            await this.driver.switchTo().window(newHandle);
            await this.driver.close();
            await this.driver.switchTo().window(originalHandle);
            await this.driver.sleep(1500);
    }}
        async scrollDown() {
            await this.driver.executeScript("window.scrollTo(0, document.body.scrollHeight)");
            await this.driver.sleep(1000);
        }
    }