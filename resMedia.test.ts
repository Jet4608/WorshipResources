import WorRes from "./worResPOM";
const WR = new WorRes();
const fs = require('fs');

describe("WorshipResources.church Schedule a Call & Resources", () => { 
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
        await WR.scrollDown();
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
        await WR.scrollDown();
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
        await WR.scrollDown();
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
        await WR.driver.quit();
    })});