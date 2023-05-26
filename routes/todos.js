const express = require("express");
const todosController = require("../controllers/todos");
const { authUser } = require("../utils/auth");
const {
  runValidation,
  validationAddTodo,
  validationUpdateTodo,
} = require("../validation");

const router = express.Router();

router.get("/", authUser, todosController.getTodos);
router.post(
  "/",
  authUser,
  validationAddTodo,
  runValidation,
  todosController.createTodo
);
router.put(
  "/:id",
  authUser,
  validationUpdateTodo,
  runValidation,
  todosController.updateTodo
);
router.delete("/:id", authUser, todosController.deleteTodo);

module.exports = router;
