import { Document } from "mongoose";

export type UserDocument = Document & {
  name: string;
  email: string;
  destination: string;
  travellers: string;
  budgetPerPerson: string;
  currency: string;
};

export type UserInput = {
  name: UserDocument["name"];
  email: UserDocument["email"];
  destination: UserDocument["destination"];
  travellers: UserDocument["travellers"];
  budgetPerPerson: UserDocument["budgetPerPerson"];
  currency: UserDocument["currency"];
};
