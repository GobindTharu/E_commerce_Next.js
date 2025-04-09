import express from "express";
import ConnectDb from "./user/user.database.js";
import cors from "cors";
import { userController } from "./user/user.controller.js";
import dotenv from "dotenv"; // Import dotenv using ES Modules syntax

//? create app
const app = express();

//? to make understand
app.use(express.json());
dotenv.config(); // Load the environment variables

app.use(
  cors({
    origin: "",
    methods: ["POST", "GET"],
  })
);

//? connect Database
await ConnectDb();
//?  register Routers / Controller
app.use(userController);

//?Network
const Port = process.env.PORT;

app.listen(Port, () => {
  console.log(`App is listening on port : ${Port}`);
});
