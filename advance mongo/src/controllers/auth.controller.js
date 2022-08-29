const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();
const { uid } = require("uid");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

// Register
router.post(
  "/register",
  body("email")
    .not()
    .isEmpty()
    .withMessage("email can't be empty")
    .custom(async (value) => {
      const email = await User.findOne({ email: value });
      if (email) {
        throw new Error("Email already registered");
      }
      return true;
    }),
  body("mobile")
    .not()
    .isEmpty()
    .withMessage("mobile can't be empty")
    .isLength(10)
    .withMessage("mobile number should be 10 digit")
    .custom(async (value) => {
      const mobile = await User.findOne({ mobile: value });
      if (mobile) {
        throw new Error("Mobile already registered");
      }
      return true;
    }),
  body("password")
    .not()
    .isEmpty()
    .withMessage("password can't be empty")
    .custom((value) => {
      const passw = "^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{8,}$";

      if (!value.match(passw)) {
        throw new Error(
          "Passwords should have 8 char long, 1 uppercase and 1 special character required"
        );
      }
      return true;
    }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(501).json({ errors: errors.array() });
    }
    try {
      // HASHING THE PASSWORD
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      const newUser = new User({
        uid: uid(13),
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        mobile: req.body.mobile,
        password: hashedPassword,
        role: req.body.role,
        status: req.body.status,
      });

      const savedUser = await newUser.save();
      res.status(200).json("Account successfully created");
    } catch (error) {
      res.status(501).json(error.message);
    }
  }
);

// LOGIN

router.post(
  "/login",
  body("email").not().isEmpty().withMessage("email can't be empty"),
  body("password").not().isEmpty().withMessage("password can't be empty"),
  body("role").not().isEmpty().withMessage("role can't be empty"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(501).json({ errors: errors.array() });
      }

      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(501).json("user does not exist");
      } else if (user.role !== req.body.role) {
        return res.status(501).json("role does not matched");
      }

      // COMPARING PASSWORD
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      // IF PASSWORD DOES NOT MATCH THEN
      if (!validPassword) {
        return res.status(501).json("wrong password");
      }

      // GENERATING ACCESS TOKEN
      const accessToken = jwt.sign(
        {
          uid: user.uid,
          email:user.email
        },
        process.env.JWT_SEC,
        { expiresIn: "30d" }
      );

      return res.status(200).json({
        status: 200,
        message: "Logged in successfully",
        data: user,
        token: accessToken,
      });
    } catch (error) {
      return res.status(501).json(error);
    }
  }
);

module.exports = router;