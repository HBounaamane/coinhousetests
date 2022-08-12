import Page from "./basePage";

class AssetManagementPage extends Page {
  get bookPrivateAppointment() {
    return $(
      'a[class="et_pb_button et_pb_button_0 button-page et_pb_bg_layout_light"]'
    );
  }

  async openBookingPage() {
    await this.bookPrivateAppointment.waitForDisplayed({ timeout: 2000 });
    await this.bookPrivateAppointment.click();
  }
}
export default new AssetManagementPage();
