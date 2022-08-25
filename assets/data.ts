import { User } from "./user";
import { faker } from "@faker-js/faker";

export const coinHouseSectionsTitle = [
  "Find an offer that suits you.",
  "Our services make a difference.",
  "Want to learn more about cryptocurrencies?",
  "Your satisfaction is our priority:\nshare your feedback !",
  "They talk about us.",
];

export const cryptoSavingAccountPageTitle = "The new Savings Accounts.";
export const bookingDate = "Friday, 12 August 2022 17:30";
export const bookingMessage = "Meeting time requested";

export function userData(): User {
  const firstname = faker.name.firstName().replace(/'/g, "");
  const lastname = faker.name.lastName().replace(/'/g, "");
  const email = `${firstname}.${lastname.replace(
    /[^-A-Za-z]/g,
    "."
  )}+${Date.now()}@gmail.com`;
  const phone = faker.phone.phoneNumber("+33 6 6# ## ## ##");
  const amount = Math.floor(
    Math.random() * (2000000 - 5000 + 1) + 5000
  ).toString();

  return new User(firstname, lastname, email, phone, amount);
}
