import nodemailer from "nodemailer";
import express from "express";
import bcrypt from "bcrypt";
import UserTable from "./user.model.js";
import jwt from "jsonwebtoken";
import validateReqBody from "../middleware/validate.req.body.middleware..js";
import {
  loginCredentialsSchema,
  signupCredentialSchema,
} from "./user.validation.js";

const router = express.Router();

// point to remember
// check if user  provided email already exist
// hash password  do not store plain password

router.post(
  "/user/signup/",
  validateReqBody(signupCredentialSchema),
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
  validateReqBody(loginCredentialsSchema),

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
    const secretKey = process.env.JWT_SECRET;
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

// otp verify

router.post("/user/send-otp/", async (req, res) => {
  let otpStore = {};

  const { email } = req.body;

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid email address" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore[email] = otp;
  console.log(otp);

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "gobind9822@gmail.com",
        pass: "qwerty12345",
      },
    });

    await transporter.sendMail({
      from: "gobind9822@gmail.com",
      to: email,
      subject: "Password Reset OTP",
      html: `<p>Your OTP is <strong>${otp}</strong>. It is valid for 5 minutes.</p>`,
    });

    return res
      .status(200)
      .json({ success: true, message: "Otp Send to your email", otpStore });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "Some thing went wrong !" });
  }
});

router.post("/user/verify-otp/", async (req, res) => {
  const { email, otp } = req.body;

  // Check if OTP exists in the storage
  if (otpStorage[email] && otpStorage[email] === otp) {
    // OTP is valid, proceed with password reset or further steps
    delete otpStorage[email]; // Clean up OTP after successful verification
    return res.json({ success: true, message: "OTP verified successfully" });
  } else {
    return res.status(400).json({ success: false, message: "Invalid OTP" });
  }
});

export { router as userController };
