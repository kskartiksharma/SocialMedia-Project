const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// var multer = require('multer');

const User = require("../models/user-model");
const post = require("../models/createPost");

const HttpError = require("../utils/HttpError");

const userSignup = async (req, res, next) => {

  const { firstName, lastName, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({
      email: email,
    });
  } catch (err) {
    console.log(err);
    const error = new HttpError("Signup failed, please try later", 500);
    return next(error);
  }
  if (existingUser) {
    const error = new HttpError("Email already in use", 422);
    return next(error);
  }
  // Encrypt password
  let hashedPasswaord;
  try {
    hashedPasswaord = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError("Password encryption failed", 500);
    return next(error);
  }
  // User Create
  const createdUser = new User({
    firstName: firstName,
    lastName:lastName,
    password: hashedPasswaord,
    email: email,
    role: 'User'
  });

  try {
    await createdUser.save();
    
  } catch (err) {
    console.log(err);
    const error = new HttpError("Signup failed", 500);
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      {
        userId: createdUser.id,
        email: createdUser.email
      },
      "userSecretKey",
      { expiresIn: "2h" }
    );

    // console.log(token);
  } catch (err) {
    const error = new HttpError("sign up Failed, Please try later", 403);
    return next(error);
  }

  return res.json({userId: createdUser.id, email: createdUser.email, token: token});



};

const userLogin = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({
      email: email,
    });
  } catch (err) {
    const error = new HttpError("Login failed, Please try later", 500);
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError("Invalid Credentials, Please try later", 403);
    return next(error);
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError("Invalid Credentials, Please try later", 403);
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError("Invalid Credentials, Please try later", 403);
    return next(error);
  }



  let token;
  try {
    token = jwt.sign(
      {
        userId: existingUser.id,
        email: existingUser.email,
      },
      "userSecretKey",
      { expiresIn: "2h" }
    );

  } catch (err) {
    const error = new HttpError("Login Failed, Please try later", 403);
    return next(error);
  }

  res.status(200).json({
    email: existingUser.email,
    age: existingUser.age,
    token: token
  });
};

const userGetInfo = async(req, res, next) => {
  const {email} = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({
      email: email,
    });
  } catch (err) {
    console.log(err);
    const error = new HttpError("no user found", 500);
    return next(error);
  }

    if(existingUser){
      res.json({
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        password: existingUser.password,
        role: existingUser.role
      })
    }
};

const createPost = async (req, res, next) => {
  const { fName,postHeading, postDescription} = req.body;
  const newPost = new post({
    postHeading: postHeading,
    postDescription: postDescription,
  });

  try {
    await newPost.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError("blog uploading failed", 500);
    return next(error);
  }
  return res.json({
    "message": `Post created by user ${fName}`
  });
}

// const getPost = async(req, res, next) => {
//   const {bloguserID} = req.body;
//   await post.find({ name: 'john', age: { $gte: 18 } })

//   let existingBlog;
//   try {
//     existingBlog = await post.findOne({
//       userID: bloguserID ,
//     });
//   } catch (err) {
//     console.log(err);
//     const error = new HttpError("no post found", 500);
//     return next(error);
//   }

//     if(existingBlog){
//       res.json({
//         heading: existingBlog.heading,
//         blog: existingBlog.blog,
//       })
//     }
// };




exports.userSignup = userSignup;
exports.userLogin = userLogin;
exports.userInfo = userGetInfo;
exports.createPost = createPost;
// exports.getPost = getPost;