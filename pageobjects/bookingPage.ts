import Page from "./basePage";
import { User } from "../assets/user";

class BookingPage extends Page {
  /**
   * Booking page Elements
   */
  get bookingMain() {
    return $('div[class="meetings-lib page"]');
  }
  get calendarBodyTable() {
    return $("tbody");
  }

  get availableTimes() {
    return $$('div[class="p-y-1 p-right-1"]');
  }
  get availableTime() {
    return $('div[class="p-y-1 p-right-1"]');
  }

  get chosenDate() {
    return $('h5[class="Heading-o3jnd-0 H5-sc-1ip600u-0 bwJnmE m-bottom-0"]');
  }
  get firstName() {
    return $('input[name="firstName"]');
  }
  get lastName() {
    return $('input[name="lastName"]');
  }
  get email() {
    return $('input[name="email"]');
  }
  get phone() {
    return $('input[name="mobilephone"]');
  }
  get amount() {
    return $('textarea[name="Amount to invest"]');
  }
  get submitButton() {
    return $('button[data-selenium-test="forward-button"]');
  }

  get bookingMessage() {
    return $(
      'h2[class="Heading-o3jnd-0 H2-oefoer-0 eTMEiB headline m-top-4 m-bottom-0 m-x-1 overflow-y-auto success-header"]'
    );
  }
  /**
   * Function to interact with Elements on Booking Page
   */
  async chooseAvailableDate() {
    await this.calendarBodyTable.waitForDisplayed({ timeout: 2000 });
    const weeks = await this.calendarBodyTable.$$("tr");
    for (const week of weeks) {
      await week.waitForDisplayed({ timeout: 2000 });
      const days = await week.$$("td");
      for (const day of days) {
        await day.waitForDisplayed({ timeout: 2000 });
        const isDayAvailable = await day.getAttribute(
          "data-selenium-test-disabled"
        );
        console.log({ isDayAvailable });
        if (isDayAvailable === "false") {
          await day.click();
          break;
        }
      }
      break;
    }

    await this.availableTime.waitForDisplayed({
      timeoutMsg: "No time available",
      timeout: 2000,
    });
    const time = await this.availableTimes;
    await time[0].waitForClickable();
    await time[0].click();
  }

  async getChosenDate() {
    await this.chosenDate.waitForDisplayed();
    const date = this.chosenDate.getText();
    return date;
  }

  async seedBookingForm(user: User) {
    await this.firstName.waitForDisplayed();
    await this.firstName.setValue(user.firstname);
    await this.lastName.waitForDisplayed();
    await this.lastName.setValue(user.lastname);

    await this.email.waitForDisplayed();
    await this.email.setValue(user.email);

    await this.phone.waitForDisplayed();
    await this.phone.setValue(user.phone);

    await this.amount.waitForDisplayed();
    await this.amount.setValue(user.amount);

    await this.submitButton.waitForClickable();
    await this.submitButton.click();
  }

  async bookingUserMessage() {
    await this.bookingMessage.waitForDisplayed({ timeout: 2000 });
    const message = this.bookingMessage.getText();
    return message;
  }
}

export default new BookingPage();
