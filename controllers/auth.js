const db = require("../models");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { userid } = req.body;

  try {
    const existingUser = await db.User.findOne({ where: { userid } });

    if (existingUser) {
      return res.status(400).json({ message: "Userid sudah ada" });
    }

    const newUser = await db.User.create({
      userid,
    });

    return res.status(200).json({ message: "register berhasil" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const dataUser = await db.User.findOne({
      where: {
        userid: req.body.userid,
      },
    });

    if (dataUser) {
      const data = {
        userid: dataUser.userid,
      };

      const token = await jwt.sign(data, process.env.JWT_SECRET);
      return res.status(200).json({
        message: "login berhasil",
        token: token,
      });
    } else {
      return res.status(400).json({
        message: "anda belum terdaftar",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  register,
  login,
};
