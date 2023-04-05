import { Schema, Model, model } from "mongoose";
import { UserDocument } from "../types/user";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    destination: { type: String, required: true },
    travellers: { type: Number, required: true },
    budgetOfPerson: { type: Number, required: true },
    currency: {
      type: String,
      enum: ["USD", "IND", "EUR"],
      default: "USD",
    },
  },
  { versionKey: false, timestamps: true }
);

const userModel: Model<UserDocument> = model<UserDocument>("user", userSchema);

export default userModel;
