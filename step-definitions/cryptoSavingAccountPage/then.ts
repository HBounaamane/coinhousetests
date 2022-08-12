import { Then } from "@wdio/cucumber-framework";
import cryptoSavingAccount from "../../pageobjects/cryptoSavingAccount";
import { cryptoSavingAccountPageTitle } from "../../assets/data";

Then(/^crypto saving account is displayed$/, async () => {
  const pageTitle = await cryptoSavingAccount.pageTitleText();

  expect(pageTitle).toEqual(cryptoSavingAccountPageTitle);
});
