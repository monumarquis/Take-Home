import express, { Request, Response, IRouter } from "express";
import userModel from "../models/user.model";
import { UserDocument, UserInput } from "../types/user";

const app: IRouter = express.Router();

// first endpoint will receive data from the form on the first page in frontend
app.post("/", async (req: Request, res: Response) => {
  const {
    name,
    email,
    destination,
    travellers,
    budgetOfPerson,
    currency,
  }: {
    name: string;
    email: string;
    destination: string;
    travellers: number;
    budgetOfPerson: number;
    currency: string;
  } = req.body;
  console.log({
    name,
    email,
    destination,
    travellers,
    budgetOfPerson,
    currency,
  })
  if (
    !name ||
    !email ||
    !destination ||
    !travellers ||
    !budgetOfPerson ||
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
    budgetOfPerson,
    currency,
  };
  const user: UserDocument = new userModel(userInput);
  await user.save();

  return res
    .status(201)
    .send({ user, message: "Your Details Added Successfully" });
});

// The second endpoint will retrieve existing form submissions from the data base.
app.get("/", async (req: Request, res: Response) => {

  const user: UserDocument[] = await userModel.find({});
  return res
    .status(201)
    .send({ user, message: "Your Details retrieved Successfully" });
});

export default app;
