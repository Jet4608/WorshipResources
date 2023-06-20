import WorRes from "./worResPOM";
const WR = new WorRes();
const fs = require('fs');

//describe

describe("WorshipResources.church", () => {
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
  await WR.navigate();
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
 

    test("Resources > Media > Church Media Libraries > each 3rd party listed", async () => {
        await WR.navigate();
        await WR.click(WR.wrResourcesTab);
        await WR.click(WR.churchMediaLibFlip);
        await WR.click(WR.churchMediaLib);
        await WR.click(WR.churchMediaDrop);
        await WR.driver.sleep(1500)
        await WR.wrshpRsrcsTabs();
        await WR.navigate();
//        await WR.click(WR.wrResourcesTab);
//        await WR.click(WR.churchMediaLibFlip);
//        await WR.click(WR.churchMediaLib);
        await WR.click(WR.creationSwap);
        await WR.driver.sleep(1500)
        await WR.wrshpRsrcsTabs();
        await WR.navigate();
//        await WR.click(WR.wrResourcesTab);
//        await WR.click(WR.churchMediaLibFlip);
//        await WR.click(WR.churchMediaLib);
        await WR.click(WR.ministryDesigns);
        await WR.driver.sleep(1500)
        await WR.wrshpRsrcsTabs();
        await WR.navigate();
//        await WR.click(WR.wrResourcesTab);
//        await WR.click(WR.churchMediaLibFlip);
//        await WR.click(WR.churchMediaLib);
        await WR.click(WR.pixelPreacher);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.navigate();
//        await WR.click(WR.wrResourcesTab);
//        await WR.click(WR.churchMediaLibFlip);
//        await WR.click(WR.churchMediaLib);
/*        await WR.click(WR.beamerfilms);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.navigate();
        await WR.click(WR.centerlineNewMedia);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.navigate();
        await WR.click(WR.churchMotionGraphics);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.navigate();
        await WR.click(WR.churchCountdowns);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.navigate();
        await WR.click(WR.easyWorship);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.navigate();
        await WR.click(WR.floodgateProductions);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.navigate();
        await WR.click(WR.freeBridgeMedia);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.navigate();
        await WR.click(WR.hyperpixelsMedia);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.navigate();
        await WR.click(WR.igniterMedia);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.navigate();
        await WR.click(WR.lifeScribeMedia);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.navigate();
        await WR.click(WR.motionWorship);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.navigate();
        await WR.click(WR.playbackMedia);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.navigate();
        await WR.click(WR.sermonCentral);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.navigate();
        await WR.click(WR.shareFaith);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.navigate();
        await WR.click(WR.shiftWorship);
        await WR.driver.sleep(1500);
        await WR.wrshpRsrcsTabs();
        await WR.navigate();
        await WR.click(WR.visualMediaChurch);
*/
        await WR.driver.quit();
    });
  });
        //end of church media libraries
/*
    test("Resources > Media > Church Motion Backgrounds > each 3rd party listed", async () => {
        await WR.navigate();
        await WR.click(WR.wrResourcesTab);
        await WR.click(WR.churchMotionBkgrndsFlip);

    });

    test("Resources > Media > Church Videos > each 3rd party listed", async () => {
        await WR.navigate();
        await WR.click(WR.wrResourcesTab);
        await WR.click(WR.churchVidsFlip);

    });

    test("Resources > Media > Church Stock Photos > each 3rd party listed", async () => {
        await WR.navigate();
        await WR.click(WR.wrResourcesTab);
        await WR.click(WR.churchStockPhtsFlip);

        await WR.driver.sleep(1500)
   
    });

    test("Resources > Media > Church Stock Videos > each 3rd party listed", async () => {
        await WR.navigate();
        await WR.click(WR.wrResourcesTab);
        await WR.click(WR.churchStockVidsFlip);

        await WR.driver.sleep(1500)
        await WR.wrshpRsrcsTabs();
        await WR.navigate();
        await WR.click(WR.churchFontsFlip);

        await WR.driver.sleep(1500)
        await WR.wrshpRsrcsTabs();
        await WR.navigate();
        await WR.click(WR.sermonSeriesGrphcsFlip);

        await WR.driver.sleep(1500)
        await WR.wrshpRsrcsTabs();
        await WR.navigate();


  });
  */

/*
let compName: Array<string>;
url: string;
constructor(compName: Array<string>, url: string, free: boolean) {
  this.compName = compName;
  this.url = url;
  this.free = free;
  */
