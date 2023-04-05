import { Document } from "mongoose";

export type UserDocument = Document & {
  name: string;
  email: string;
  destination: string;
  travellers: number;
  budgetOfPerson: number;
  currency: string;
};

export type UserInput = {
  name: UserDocument["name"];
  email: UserDocument["email"];
  destination: UserDocument["destination"];
  travellers: UserDocument["travellers"];
  budgetOfPerson: UserDocument["budgetOfPerson"];
  currency: UserDocument["currency"];
};
