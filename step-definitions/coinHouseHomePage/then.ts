import { Then } from "@wdio/cucumber-framework";
import coinHouseHomePage from "../../pageobjects/coinHouseHomePage";
import { coinHouseSectionsTitle } from "../../assets/data";

Then(/^the coin house home page is displayed$/, async () => {
  await coinHouseHomePage.waitForCoinHomePageToBeReady();

  const coinHomePageSubTitleSection =
    await coinHouseHomePage.getSubTitlesCoinHouseHomePage();

  expect(coinHomePageSubTitleSection).toEqual(coinHouseSectionsTitle);
});
