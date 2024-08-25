import User from "../models/userModels.js";
import asyncHandler from "../middleware/asyncHandler.js";
import createToken from "../utils/createToken.js";
import bcrypt from "bcrypt";

const createUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  if (!firstname || !lastname || !email || !password) {
    throw new Error("Please fill all the inputs.");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).send("User already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = new User({
    firstname,
    lastname,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    createToken(res, newUser._id);

    res.status(201).json({
      _id: newUser._id,
      firstname: newUser.firstname,
      lastname: newUser.lastname,
      email: newUser.email,
      password: newUser.password,
    });
  } catch (error) {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const existUser = await User.findOne({ email });

  if (existUser) {
    const ispasswordValid = await bcrypt.compare(password, existUser.password);

    if (ispasswordValid) {
      createToken(res, existUser._id);
      res.status(201).json({
        _id: existUser._id,
        firstname: existUser.firstname,
        lastname: existUser.lastname,
        email: existUser.email,
        password: existUser.password,
      });
      return;
    } else {
      res.status(500).json("invalid user password");
    }
  }
});

export { createUser, loginUser };
