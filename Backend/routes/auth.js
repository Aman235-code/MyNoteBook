const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser");
const JWT_SECRET = "jsutanormalstring$yeaa";

// ROUTE 1:  Create an User Using: POST "/api/auth/createuser", No Login Required
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

// ROUTE 2: Authenticate a User: POST "/api/auth/loginuser", No Login Required
router.post("/loginuser", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Please try to login with correct credentials" });
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res
        .status(400)
        .json({ message: "Please try to login with correct credentials" });
    }
    const data = {
      user: {
        id: user._id,
      },
    };

    const authToken = jwt.sign(data, JWT_SECRET);
    res.json({ authToken });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error occured");
  }
});

// ROUTE 3: Get User Details: GET "/api/auth/getUser", Login Required
router.get("/getUser", fetchUser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error occured");
  }
});

module.exports = router;
