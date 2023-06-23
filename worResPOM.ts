import { Builder, By, Capabilities, until, WebDriver,
     WebElement, Key } from "selenium-webdriver";
import { BasePage } from './basePage'
const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

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
// The Media, Music and Tech may not be necessary once you're on the 
//Resources page but may help scroll.
wrResourcesTab: By = By.xpath('(//li[@id="menu-item-55080"])[1]');
//1st menu: Media
media: By = By.xpath('(//li[@id="menu-item-55100"])[1]');
//2nd menu: Music
music: By = By.xpath('(//li[@id="menu-item-55099"])[1]');
//3rd menu: Tech
tech: By = By.xpath('(//li[@id="menu-item-55101"])[1]');

/*Media Sub menu: 
Church Media Libraries
Church Motion Backgrounds
Church Videos (Mini movies)
Church Stock Photos
Church Stock Videos
Church Fonts
Sermon Series Graphics */
churchMediaLibFlip: By = By.xpath('(//div[@class="et_pb_module dsm_flipbox_child dsm_flipbox_child_0 et_pb_bg_layout_dark dsm_flipbox_icon_position_top"])');
churchMediaLib: By = By.xpath('(//a[@href="https://www.worshipresources.church/church-resources/church-media-libraries/"])[3]');
churchMotionBkgrndsFlip: By = By.xpath('(//div[@class="et_pb_module dsm_flipbox_child dsm_flipbox_child_2 et_pb_bg_layout_dark dsm_flipbox_icon_position_top"])');
//
churchMotionBkgrnds: By = By.xpath('(//a[@href="https://www.worshipresources.church/church-resources/church-motion-backgrounds/"])[3]');
churchVidsFlip: By = By.xpath('(//div[@class="et_pb_module dsm_flipbox_child dsm_flipbox_child_4 et_pb_bg_layout_dark dsm_flipbox_icon_position_top"])');
churchVids: By = By.xpath('(//a[@href="https://www.worshipresources.church/church-resources/church-videos/"])[3]');
churchStockPhtsFlip: By = By.xpath('(//div[@class="et_pb_module dsm_flipbox_child dsm_flipbox_child_6 et_pb_bg_layout_dark dsm_flipbox_icon_position_top"])');
churchStockPhts: By = By.xpath('(//a[@href="https://www.worshipresources.church/church-resources/church-stock-photos/"])[3]');
churchStockVidsFlip: By = By.xpath('(//div[@class="et_pb_module dsm_flipbox_child dsm_flipbox_child_8 et_pb_bg_layout_dark dsm_flipbox_icon_position_top"])');
churchStockVids: By = By.xpath('(//a[@href="https://www.worshipresources.church/church-resources/church-stock-videos/"])[3]');
churchFontsFlip: By = By.xpath('(//div[@class="et_pb_module dsm_flipbox_child dsm_flipbox_child_10 et_pb_bg_layout_dark dsm_flipbox_icon_position_top"])');
churchFonts: By = By.xpath('(//a[@href="https://www.worshipresources.church/church-resources/church-fonts/"])[3]');
sermonSeriesGrphcsFlip: By = By.xpath('(//div[@class="et_pb_module dsm_flipbox_child dsm_flipbox_child_12 et_pb_bg_layout_dark dsm_flipbox_icon_position_top"])');
sermonSeriesGrphcs: By = By.xpath('(//a[@href="https://www.worshipresources.church/church-resources/sermon-series-graphics/"])[3]');

//Music Resources Sub menu:
//Church Copyright Resources
chrchCpyrghtResFlip: By = By.xpath('(//div[@class="et_pb_module dsm_flipbox_child dsm_flipbox_child_14 et_pb_bg_layout_dark dsm_flipbox_icon_position_top"])');
chrchCpyrghtRes: By = By.xpath('(//a[@href="https://www.worshipresources.church/church-resources/church-copyright-resources/"])[3]');

//Church Muisc Charts & Publishers
chrchMscChrtsFlip: By = By.xpath('(//div[@class="et_pb_module dsm_flipbox_child dsm_flipbox_child_16 et_pb_bg_layout_dark dsm_flipbox_icon_position_top"])');
churchMscChrts: By = By.xpath('(//a[@href="https://www.worshipresources.church/church-resources/church-music-charts/"])[3]');
//this is the bug from the Resources page under Music (not from the header)

//Multitracks & Click Tracks
multitrcksClckTrcksFlip: By = By.xpath('(//div[@class="et_pb_module dsm_flipbox_child dsm_flipbox_child_18 et_pb_bg_layout_dark dsm_flipbox_icon_position_top"])');
multitrcksClckTrcks: By = By.xpath('(//a[@href="https://www.worshipresources.church/church-sound-training/"])[3]');

//Stock Music Publishers
stckMscPblshrsFlip: By = By.xpath('(//div[@class="et_pb_module dsm_flipbox_child dsm_flipbox_child_20 et_pb_bg_layout_dark dsm_flipbox_icon_position_top"])');
stckMscPblshrs: By = By.xpath('(//a[@href="https://www.worshipresources.church/church-resources/sermon-series-graphics/"])[4]');


/*Tech Resources Sub menu:
Church Management Software
chrchMngmntSftwrFlip: By = By.xpath('(//div[@class="et_pb_module dsm_flipbox_child dsm_flipbox_child_22 et_pb_bg_layout_dark dsm_flipbox_icon_position_top"])');
chrchMngmntSftwr

Church Website Builders
chrchWbstBldrsFlip: By = By.xpath('(//div[@class="et_pb_module dsm_flipbox_child dsm_flipbox_child_24 et_pb_bg_layout_dark dsm_flipbox_icon_position_top"])');
chrchWbstBldrs

Church Sound Training
chrchSndTrnngFlip: By = By.xpath('(//div[@class="et_pb_module dsm_flipbox_child dsm_flipbox_child_26 et_pb_bg_layout_dark dsm_flipbox_icon_position_top"])');
ChrchSndTrnng

Worship Leader Training
wrshpLdrTrnFlip: By = By.xpath('(//div[@class="et_pb_module dsm_flipbox_child dsm_flipbox_child_28 et_pb_bg_layout_dark dsm_flipbox_icon_position_top"])');
wrshpLdrTrn
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

    constructor () {
        super ({url:"https://www.worshipresources.church/"});
    };
    
    async wrshpRsrcsTabs() {
        const handles = await this.driver.getAllWindowHandles();
        if (handles.length > 1) {
            const originalHandle = handles[0];
            const newHandle = handles[1];
            await this.driver.switchTo().window(newHandle);
            await this.driver.close();
            await this.driver.switchTo().window(originalHandle);
            await this.driver.sleep(1500);
    }};
        async scrollDown() {
            await this.driver.executeScript("window.scrollTo(0, document.body.scrollHeight)");
            await this.driver.sleep(1000);
        }};