import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = asyncHandler(async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
          return res.status(400).json("fill blank input")
        }
      
        // check if user exist
        const userExist = await User.findOne({ email });
        if (userExist) {
          res.status(200);
          throw new Error("user already exist");
        }
      
        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
      
        //create user
        const user = await User.create({
          name,
          email,
          password: hashedPassword,
        });
      
        if (user) {
          res.status(201).json({
            id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            token: generateToken(user._id),
          });
        }
        
    } catch (error) {
        return res.status(500).json(error)
        
    }
 
});

const getUser = asyncHandler(async (req, res) => {
    try {
        
        const user = await User.find({}).sort({ createdAt: -1 });
        if (user) {
          res.status(201).json(user);
        }
    } catch (error) {
        return res.status(500).json(error)
    }
 
});

const logIn = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    //check user email
    // const regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (!email) {
      return res.status(400).send({
        message: "Please provide valid email",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({
        message: "No such user",
      });
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(401).send({
        message: "Password doesn't match",
      });
    }

    return res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      token: generateToken(user._id),
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});

const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export { registerUser, logIn, getMe };
