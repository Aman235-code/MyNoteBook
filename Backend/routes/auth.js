const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Create a Using: POST "/api/auth", No Login Required
router.post("/createuser", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "User Already Exists" });
    }
    const newUser = User(req.body);
    newUser.save();
    res.send(newUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error occured");
  }
});

module.exports = router;
