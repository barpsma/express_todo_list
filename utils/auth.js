const jwt = require("jsonwebtoken");
const config = require("../config/config.json");

const authUser = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(400).json({
      message: "Silahkan Login Dahulu",
    });
  }

  const decode = jwt.verify(token, process.env.JWT_SECRET);
  req.userid = decode.userid;
  next();
};

module.exports = {
  authUser,
};
