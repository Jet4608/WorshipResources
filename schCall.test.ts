import WorRes from "./worResPOM";
const WR = new WorRes();
const fs = require('fs');

describe("WorshipResources.church Schedule a Call & Resources", () => {
   test("Schedule A Call", async () => {
        await WR.navigate();
        await WR.driver.manage().window().maximize();
        await WR.click(WR.schCallHead);
        await WR.driver.sleep(1500)
        await WR.navigate();
        await WR.click(WR.schCallMainArea1);
        await WR.navigate();
        await WR.click(WR.schCallMainArea2);
        await WR.navigate();
        await WR.scrollDown();
        await WR.click(WR.schCallMainArea3);
        await WR.driver.quit();
    })});
