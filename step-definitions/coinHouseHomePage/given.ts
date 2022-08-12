import { Given } from "@wdio/cucumber-framework";
import coinHouseHomePage from "../../pageobjects/coinHouseHomePage";

Given(/^the browser is launched$/, async () => {});

Given(/^the user is at the coin house home page$/, async () => {
  await coinHouseHomePage.open();
  await coinHouseHomePage.acceptCoinHouseCookies();
});
