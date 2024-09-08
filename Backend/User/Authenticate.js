const jwt = require("jsonwebtoken");
const jwtSecret = "LETSEARNTOGETHERBYDOINGTASK";

const authenticateUser = (req, res, next) => {
  console.log("hello");
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.userId = decoded.user.id;
    console.log(decoded.user.id);
    next();
  } catch (error) {
    console.log("lll");
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

module.exports = authenticateUser;
