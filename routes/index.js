const express = require("express");
const authRoutes = require("./auth");
const todosRoutes = require("./todos");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/todos", todosRoutes);

module.exports = router;
