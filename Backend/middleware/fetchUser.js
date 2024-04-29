const jwt = require("jsonwebtoken");
const JWT_SECRET = "jsutanormalstring$yeaa";

fetchUser = (req, res, next) => {
  // Get the user from the jwt token & add id to req obj
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ message: "Please Use a valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ message: "Please Use a valid token" });
  }
};

module.exports = fetchUser;
