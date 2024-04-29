const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

const JWT_SECRET = "jsutanormalstring$yeaa";

// Create a Using: POST "/api/auth", No Login Required
router.post("/createuser", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "User Already Exists" });
    }
    const salt = await bcrypt.genSalt(10);

    const secPass = await bcrypt.hash(req.body.password, salt);
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    });

    const data = {
      user: {
        id: newUser._id,
      },
    };
    const authToken = jwt.sign(data, JWT_SECRET);

    res.json({ authToken });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error occured");
  }
});

module.exports = router;
