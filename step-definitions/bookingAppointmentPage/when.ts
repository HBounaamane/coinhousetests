import { When } from "@wdio/cucumber-framework";
import bookingPage from "../../pageobjects/bookingPage";
import { bookingDate, userData } from "../../assets/data";

When(/^the user books an available appointment$/, async () => {
  await bookingPage.chooseAvailableDate();
  const date = await bookingPage.getChosenDate();
  // expect(date).toEqual(bookingDate);
  const user = userData();
  await bookingPage.seedBookingForm(user);
});
