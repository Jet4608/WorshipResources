import WorRes from "./worResPOM";
const WR = new WorRes();
const fs = require('fs');

//describe

describe("WorshipResources.church Schedule a Call & Resources", () => {
   test("Schedule A Call", async () => {
        await WR.navigate();
        await WR.driver.manage().window().maximize();
        await WR.click(WR.schCallHead);
        await WR.driver.sleep(1500)
        await WR.navigate();
        await WR.click(WR.schCallMainArea1);
        await WR.navigate();
        await WR.scrollDown();
        await WR.click(WR.schCallMainArea2);
        await WR.navigate();
        await WR.scrollDown();
        await WR.scrollDown();
        await WR.click(WR.schCallMainArea3);

    });


/* 
  await WR.navigate();
  await WR.click(WR.tech)
  await WR.driver.manage().window().maximize();
*/

/*
beforeEach(async () => {
    await WR.navigate();
    await WR.driver.manage().window().maximize();
    /*
afterAll(async () => {
    await WR.driver.quit()
})
*/
 

    test("Resources > Media > Church Media Libraries > each 3rd party listed - Free", async () => {
        await WR.navigate();
        await WR.click(WR.wrResourcesTab);
        await WR.click(WR.churchMediaLibFlip);
        await WR.click(WR.churchMediaLib);
        await WR.click(WR.churchMediaDrop);
        await WR.driver.sleep(1500)
        await WR.wrshpRsrcsTabs();
        await WR.click(WR.creationSwap);
        await WR.driver.sleep(1500)
        await WR.wrshpRsrcsTabs();
        await WR.click(WR.ministryDesigns);
        await WR.driver.sleep(1500)
        await WR.wrshpRsrcsTabs();
        await WR.click(WR.pixelPreacher);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
    });

    test("Resources > Media > Church Media Libraries > each 3rd party listed - Paid", async () => {
        await WR.click(WR.beamerfilms);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.click(WR.centerlineNewMedia);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.click(WR.churchMotionGraphics);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.click(WR.churchCountdowns);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.click(WR.easyWorship);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.click(WR.floodgateProductions);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.click(WR.freeBridgeMedia);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.click(WR.hyperpixelsMedia);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.click(WR.igniterMedia);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.click(WR.lifeScribeMedia);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.click(WR.motionWorship);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.click(WR.playbackMedia);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.click(WR.sermonCentral);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.click(WR.shareFaith);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.click(WR.shiftWorship);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.click(WR.visualMediaChurch);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
    });

    test("Resources > Media > Church Motion Backgrounds", async () => {
//add ""> each 3rd party listed Free & Paid" later
        await WR.navigate();
        await WR.click(WR.wrResourcesTab);
        await WR.click(WR.churchMotionBkgrndsFlip);
        await WR.click(WR.churchMotionBkgrnds);
//3rd party link        await WR.click(WR.);
        await WR.driver.sleep(1500)
    });


    test("Resources > Media > Church Videos", async () => {
// add  "> each 3rd party listed Free & Paid" later
        await WR.navigate();
        await WR.click(WR.wrResourcesTab);
        await WR.click(WR.churchVidsFlip);
        await WR.click(WR.churchVids);
//3rd party link        await WR.click(WR.);
        await WR.driver.sleep(1500)
    });

    test("Resources > Media > Church Stock Photos", async () => {
// add  "> each 3rd party listed Free & Paid" later
        await WR.navigate();
        await WR.click(WR.wrResourcesTab);
        await WR.click(WR.churchStockPhtsFlip);
        await WR.click(WR.churchStockPhts);
//3rd party link        await WR.click(WR.);        
        await WR.driver.sleep(1500)   
    });

    test("Resources > Media > Church Stock Videos", async () => {
// add  "> each 3rd party listed Free & Paid" later    
        await WR.navigate();
        await WR.click(WR.wrResourcesTab);
        await WR.click(WR.churchStockVidsFlip);
        await WR.click(WR.churchStockVids);
//3rd party link        await WR.click(WR.);
        await WR.driver.sleep(1500)
    });


    test("Resources > Media > Church Fonts", async () => {
// add  "> each 3rd party listed Free & Paid" later
        await WR.navigate();
        await WR.click(WR.wrResourcesTab);
        await WR.click(WR.churchFontsFlip);
        await WR.click(WR.churchFonts);
//3rd party link        await WR.click(WR.);
        await WR.driver.sleep(1500)
    });

    test("Resources > Media > Sermon Series Graphics", async () => {
// add  "> each 3rd party listed Free & Paid" later
        await WR.navigate();
        await WR.click(WR.wrResourcesTab);
        await WR.click(WR.sermonSeriesGrphcsFlip);
        await WR.click(WR.sermonSeriesGrphcs);
//3rd party link        await WR.click(WR.);
        await WR.driver.sleep(1500)
        await WR.driver.quit();

    });


/*
Use something along these lines for the pricing if I want to automate that.
let compName: Array<string>;
url: string;
constructor(compName: Array<string>, url: string, free: boolean) {
  this.compName = compName;
  this.url = url;
  this.free = free;
  */
 
});