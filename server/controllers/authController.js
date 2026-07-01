import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

//Register User
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //Check existing user
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    //Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    //Generate Referral Code
    const referralCode =
      name.replace(/\s/g, "").toUpperCase() +
      Math.floor(1000 + Math.random() * 9000);

    //Create User
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      referralCode,
    });

    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
  res.status(500).json({
    message: error.message,
  });
}};

//Login User

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid Creadentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Creadentials" });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    res.json({
      token,
      user,
    });
  } catch (error) {
  res.status(500).json({
    message: error.message,
  });
}};
