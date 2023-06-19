import WorRes from "./worResPOM";
const WR = new WorRes();
const fs = require('fs');

//describe

describe("WorshipResources.church", () => {
/* pausing this for now
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
*/
/*
    test ("3rd Party Resource Links", async () => {
*/
       /* can probably delete this
        await WR.navigate();
        await WR.click(WR.tech)
        await WR.navigate();
        await WR.driver.manage().window().maximize();
        await WR.click(WR.churchMediaDrop);
        await WR.driver.sleep(1500)
        await WR.wrshpRsrcsTabs();
        await WR.navigate();
        await WR.driver.manage().window().maximize();
        await WR.click(WR.creationSwap);
        await WR.driver.sleep(1500)
        await WR.navigate();
        await WR.driver.manage().window().maximize();
        await WR.click(WR.ministryDesigns);
        await WR.driver.sleep(1500)
        await WR.navigate();
        await WR.driver.manage().window().maximize();
        await WR.click(WR.pixelPreacher);
        await WR.driver.sleep(1500)
*/
/*
beforeEach(async () => {
    await WR.navigate();
    await WR.driver.manage().window().maximize();
  });
*/
    test("Navigate to wrResourcesTab and media", async () => {
        await WR.navigate();
        await WR.click(WR.wrResourcesTab);
    //Do I need something to make the card flip? Or should I pull it from the hover drop down menu and if so, how?
    //    await WR.click(WR.churchMediaLib);

/*        await WR.click(WR.churchMediaLib);
        await WR.click(WR.churchMediaDrop);*/
  });
/* still working with this
  test("Navigate to churchMediaDrop and back to media", async () => {
    await WR.click(WR.wrResourcesTab);
    await WR.click(WR.media);
    await WR.click(WR.churchMediaDrop);
    // Perform actions on the churchMediaDrop page
    await WR.click(WR.media);
  });

  test("Navigate to creationSwap and back to media", async () => {
    await WR.click(WR.wrResourcesTab);
    await WR.click(WR.media);
    await WR.click(WR.creationSwap);
    // Perform actions on the creationSwap page
    await WR.click(WR.media);
  });

  test("Navigate to ministryDesigns and back to media", async () => {
    await WR.click(WR.wrResourcesTab);
    await WR.click(WR.media);
    await WR.click(WR.ministryDesigns);
    // Perform actions on the ministryDesigns page
    await WR.click(WR.media);
  });

  test("Navigate to pixelPreacher", async () => {
    await WR.click(WR.wrResourcesTab);
    await WR.click(WR.media);
    await WR.click(WR.pixelPreacher);
    // Perform actions on the pixelPreacher page
  });*/
/*
afterAll(async () => {
    await WR.driver.quit()
})
*/
/*
let compName: Array<string>;
url: string;
constructor(compName: Array<string>, url: string, free: boolean) {
  this.compName = compName;
  this.url = url;
  this.free = free;
  */

  
});