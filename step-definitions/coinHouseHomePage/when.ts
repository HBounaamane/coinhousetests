import { When } from "@wdio/cucumber-framework";
import coinHouseHomePage from "../../pageobjects/coinHouseHomePage";

When(/^the user access the coin house site$/, async () => {
  await coinHouseHomePage.open();
  await coinHouseHomePage.acceptCoinHouseCookies();
});

When(/^open the crypto saving account via the investment menu$/, async () => {
  await coinHouseHomePage.openCryptoSavingPage();
});
