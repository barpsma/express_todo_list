const express = require("express");
const authController = require("../controllers/auth");
const {
  runValidation,
  validationRegister,
  validationLogin,
} = require("../validation");

const router = express.Router();

router.post(
  "/register",
  validationRegister,
  runValidation,
  authController.register
);
router.post("/login", validationLogin, runValidation, authController.login);

module.exports = router;
