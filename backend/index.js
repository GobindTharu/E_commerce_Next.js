import cors from "cors";
import dotenv from "dotenv"; // Import dotenv using ES Modules syntax
import express from "express";
import { userController } from "./user/user.controller.js";
import ConnectDb from "./user/user.database.js";

//? create app
const app = express();

//? to make understand
app.use(express.json());
dotenv.config(); // Load the environment variables

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001" ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


app.post("/login", (req, res) => {
  res.json({ message: "Login successful" });
});

//? connect Database
await ConnectDb();
//?  register Routers / Controller
app.use(userController);

//?Network
const Port = process.env.PORT;

app.listen(Port, () => {
  console.log(`App is listening on port : ${Port}`);
});
