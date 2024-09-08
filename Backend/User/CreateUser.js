const express = require("express");
const router = express.Router();
const User = require("../struct/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "LETSEARNTOGETHERBYDOINGTASK";

router.post(
  "/createuser",
  body("name").isLength({ min: 3 }),
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    let isemail = req.body.email;
    let check = await User.findOne({ email: isemail });
    if (check) {
      return res.status(400).json({ message: "Email already exists" });
    } else {
      console.log("no");
    }

    const salt = await bcrypt.genSalt(10);
    const encodepassword = await bcrypt.hash(req.body.password, salt);
    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: encodepassword,
      }).then(res.json({ success: true }));
    } catch (err) {
      console.log("oops!err while creating user");
      res.json({ success: false });
    }
  }
);

router.post("/loginuser", [
  body("email").isEmail(),
  body("password", "Incorrect Password").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let email = req.body.email;
    try {
      let userData = await User.findOne({ email });
      if (!userData) {
        console.log("hello");
        return res.status(400).json({ errors: "Invalid email" });
      }
      const decodepassword = await bcrypt.compare(
        req.body.password,
        userData.password
      );
      if (!decodepassword) {
        console.log("helloo");
        return res.status(400).json({ errors: "Invalid password" });
      }
      const data = {
        user: {
          id: userData._id,
        },
      };
      console.log(data.user.id);
      const authtoken = jwt.sign(data, jwtSecret);
      return res.json({ success: true, authtoken: authtoken });
    } catch (error) {
      console.log("yuuppp", error);
      res.json({ success: false });
    }
  },
]);

module.exports = router;
