const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const verifyToken = (req, res, next) => {
  let authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(
      token,
      process.env.JWT_SEC,

      (err, data) => {
        if (err) {
          return res.status(401).json(" Invalid or Expired Token");
        }
        req.uid = data.uid;
        next();
      }
    );
  } else {
    return res.status(401).json("please provide token in headers");
  }
};

module.exports = {
  verifyToken,
};