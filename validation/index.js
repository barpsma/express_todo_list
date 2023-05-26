const { check, validationResult } = require("express-validator");

exports.runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: false,
      message: errors.array()[0].msg,
    });
  }
  next();
};

exports.validationRegister = [
  check("userid", "userid tidak boleh kosong dan harus angka")
    .notEmpty()
    .isLength({ min: 4, max: 4 })
    .withMessage("harus 4 angka")
    .isInt(),
];

exports.validationLogin = [
  check("userid", "userid tidak boleh kosong dan harus angka")
    .notEmpty()
    .isLength({ min: 4, max: 4 })
    .withMessage("harus 4 angka")
    .isInt(),
];

exports.validationAddTodo = [
  check("title", "title tidak boleh kosong").notEmpty(),
];

exports.validationUpdateTodo = [
  check("title", "title tidak boleh kosong").notEmpty(),
  check("completed", "completed tidak boleh kosong")
    .notEmpty()
    .isBoolean()
    .withMessage("isi completed boolean hanya true atau false"),
];
