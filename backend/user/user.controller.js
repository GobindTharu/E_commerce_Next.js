import express from "express";
import bcrypt from "bcrypt";
import UserTable from "./user.model.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// point to remember
// check if user  provided email already exist
// hash password  do not store plain password

router.post(
  "/user/signup/",

  async (req, res) => {
    //   extract new user from req.body
    const newUser = req.body;
    // console.log(newUser);

    // find user with email
    const user = await UserTable.findOne({ email: newUser.email });
    if (user) {
      return res.status(409).send({ message: "User Already exist" });
    }

    // if user throw

    // hash password
    // requirement: plain password , saltRound randomness

    const plainPassword = newUser.password;
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(plainPassword, saltRound);

    newUser.password = hashedPassword;

    await UserTable.create(newUser);

    //   await console.log(newUser);
    return res.status(201).send({ message: "Register Successful" });
  }
);

router.post(
  "/user/login/",

  async (req, res) => {
    // extract user
    const loginCredentials = req.body;
    // find user from database
    const user = await UserTable.findOne({ email: loginCredentials.email });
    // if user not foound throw
    if (!user) {
      return res.status(404).send({ message: "Invalid Credentials" });
    }

    // check the password match
    //requirement = plainPassword and hashPassword

    const plainPassword = loginCredentials.password;
    const hashedPassword = user.password;

    // math the password
    const isPasswordMatch = await bcrypt.compare(plainPassword, hashedPassword);

    // if password not math throw
    if (!isPasswordMatch) {
      return res.status(404).send({ message: "Invalid Credentials" });
    }
    // generate  token
    // payload

    const payload = { email: user.email };
    const secretKey = "qwertyuiop1234";
    const token = jwt.sign(payload, secretKey, {
      expiresIn: "7d",
    });

    // remove password

    user.password = undefined;

    // console.log(token,user);
    return res
      .status(201)
      .send({ message: "Success", accessToken: token, userDetails: user });
  }
);

export { router as userController };
