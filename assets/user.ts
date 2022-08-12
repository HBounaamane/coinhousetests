export class User {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  amount: string;

  constructor(
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    age: string
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
    this.amount = age;
  }

  getFullName(): string {
    return this.lastname.toUpperCase() + " " + this.firstname;
  }

  getInitialsName(): string {
    return `${this.firstname.charAt(0)}${this.lastname.charAt(0)}`;
  }
}
