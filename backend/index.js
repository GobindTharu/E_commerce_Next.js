import express from "express";
import ConnectDb from "./user/user.database.js";
import cors from "cors";
import { userController } from "./user/user.controller.js";

//? create app
const app = express();

//? to make understand
app.use(express.json());
app.use(cors({
  origin: "http://localhost/3000"
}
));

//? connect Database
await ConnectDb();
//?  register Routers / Controller
app.use(userController)


//?Network
const PORT = 8002;

app.listen(PORT, () => {
  console.log(`App is listening on port : ${PORT}`);
});
