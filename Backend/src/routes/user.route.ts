import express, { Request, Response, IRouter } from "express";
import userModel from "../models/user.model";
import { UserDocument, UserInput } from "../types/user";

const app: IRouter = express.Router();

app.post("/", async (req: Request, res: Response) => {
  const {
    name,
    email,
    destination,
    travellers,
    budgetPerPerson,
    currency,
  }: {
    name: string;
    email: string;
    destination: string;
    travellers: string;
    budgetPerPerson: string;
    currency: string;
  } = req.body;
  if (
    !name ||
    !email ||
    !destination ||
    !travellers ||
    !budgetPerPerson ||
    !currency
  )
    return res.status(403).send({ message: "Please Enter All Details" });

  const exist: UserDocument | null = await userModel.findOne({ email });
  if (exist)
    return res
      .status(404)
      .send({ message: "User Already Created Try Logging in" });

  let userInput: UserInput = {
    name,
    email,
    destination,
    travellers,
    budgetPerPerson,
    currency,
  };
  const user: UserDocument = new userModel(userInput);
  await user.save();

  return res
    .status(201)
    .send({ user, message: "Your Details Added Successfully" });
});

export default app;
