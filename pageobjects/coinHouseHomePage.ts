import Page from "./basePage";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CoinHouseHomePageHome extends Page {

  /**
   * open the coin house home page
   */
  public open() {
    return super.open("coinhouse");
  }
  /**
   * define selectors using getter methods
   */
  public get investmentMenu() {
    return $("#menu-item-40124");
  }

  public get cryptoSavingsAccountSubMenu() {
    return $("#menu-item-40125");
  }

  public get assetManagementSubMenu() {
    return $("#menu-item-40126");
  }

  public get mainContent() {
    return $("#main-content");
  }
  public get cookiesAcceptButton() {
    return $("#cookie_action_close_header");
  }

  public get cookiesBar() {
    return $("#cookie-law-info-bar");
  }

  public get subTitles() {
    return $$('h2[class="h2-2"]');
  }
  /**
   * Methods interacting with elements
   */

  public async acceptCoinHouseCookies() {
    try {
      const isCookiesBarDisplayed = await this.cookiesBar.waitForDisplayed({
        timeout: 4000,
      });
      if (isCookiesBarDisplayed) {
        const acceptCookies = await this.cookiesAcceptButton;
        await acceptCookies.waitForClickable({ timeout: 1500 });
        await acceptCookies.click();
      }
      await this.cookiesBar.waitForDisplayed({ reverse: true });
    } catch (e) {}
  }

  public async waitForCoinHomePageToBeReady() {
    const coinHouseHomePage = await this.mainContent;
    await coinHouseHomePage.waitForDisplayed({
      timeout: 5000,
      timeoutMsg: "coin house home page is not ready",
    });
  }

  public async openCryptoSavingPage() {
    await this.investmentMenu.waitForDisplayed({ timeout: 1000 });
    await this.investmentMenu.moveTo();
    await this.cryptoSavingsAccountSubMenu.waitForDisplayed({
      timeout: 2000,
      timeoutMsg: "The crypto saving accout subMenu is not displayed !!!",
    });
    await this.cryptoSavingsAccountSubMenu.click();
  }


  async getSubTitlesCoinHouseHomePage(): Promise<string[]> {
    const textArray: string[] = [];
    const textElems = await this.subTitles;
    for (const text of textElems) {
      await text.waitForExist({ timeout: 5000 });
      const linkText = await text.getText();
      await textArray.push(linkText);
      console.log("this is the text array of all coin house sub sections", textArray);
    }
    return textArray;
  }

  public async openAssetManagementPage() {
    await this.investmentMenu.waitForDisplayed({ timeout: 1000 });
    await this.investmentMenu.moveTo();
    await this.assetManagementSubMenu.waitForDisplayed({
      timeout: 2000,
      timeoutMsg: "The asset management subMenu is not displayed !!!",
    });
    await this.assetManagementSubMenu.click();
  }


}

export default new CoinHouseHomePageHome();
