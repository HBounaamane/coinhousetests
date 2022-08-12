import { Then } from "@wdio/cucumber-framework";
import bookingPage from "../../pageobjects/bookingPage";
import { bookingMessage } from "../../assets/data";

Then(/^the user request is submitted$/, async () => {
  const bookingUserMessage = await bookingPage.bookingUserMessage();

  expect(bookingUserMessage).toEqual(bookingMessage);
});
