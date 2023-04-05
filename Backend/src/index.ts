require("dotenv").config();
import express, { Request, Response, Application } from "express";
import cors from "cors";
import userRoute from "./routes/user.route";
import connect from "./config/db";

const app: Application = express();
const PORT = process.env.PORT || 8001;

// Midelwares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// user Routes
app.use("/user", userRoute);

// Home Route
app.get("/", async (req: Request, res: Response) => {
  res.status(200).send("This is  My Take-Home backend");
});

// App listen on port 8000
app.listen(PORT, async () => {
  await connect();
  console.log(`listening on .....http://localhost:${PORT}`);
});

// Important Note for Script Commands :-
// 1. npm run start:dev => Starts the application in development using nodemon and ts-node to do cold reloading.
// 2. npm run build => Builds the app at build, cleaning the folder first.
// 3. npm run start => Starts the app in production by first building the project with npm run build, and then executing the compiled JavaScript at build/index.js

