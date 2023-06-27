import WorRes from "./worResPOM";
const WR = new WorRes();
const fs = require('fs');

describe("Resources Media Categories", () => { 
    test("Resources > Media > Church Media Libraries", async () => {
        await WR.navigate();
        await WR.click(WR.wrResourcesTab);
        await WR.click(WR.churchMediaLibFlip);
        await WR.click(WR.churchMediaLib);
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

});

/*
describe("Resources Muisic Categories", () => { 
    test("Resources > Music > Church Copyright Resources", async () => {

    })});
    */

/*
describe("Resources Tech Categories", () => { 
    test("Resources > Tech > Church Management Software", async () => {

    })});
*/