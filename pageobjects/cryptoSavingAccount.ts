import Page from "./basePage";

class CryptoSavingAccount extends Page {
  get pageTitle() {
    return $('h1[class="title-page"]');
  }

  async pageTitleText(): Promise<string> {
    await this.pageTitle.waitForDisplayed({ timeout: 2000 });
    const textPage = await this.pageTitle.getText();

    return textPage;
  }
}

export default new CryptoSavingAccount();
