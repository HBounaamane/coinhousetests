import { Given } from "@wdio/cucumber-framework";
import coinHouseHomePage from "../../pageobjects/coinHouseHomePage";
import assetManagementPage from "../../pageobjects/assetManagementPage";

Given(/^the user is on the asset management point$/, async () => {
  await coinHouseHomePage.open();
  await coinHouseHomePage.acceptCoinHouseCookies();
  await coinHouseHomePage.waitForCoinHomePageToBeReady();
  await coinHouseHomePage.openAssetManagementPage();
  await assetManagementPage.openBookingPage();
  await browser.switchWindow(
    "meetings.hubspot.com/coinhouse-contact/asset-management-uk-private"
  );
});
