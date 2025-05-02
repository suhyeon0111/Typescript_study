const express = require("express");
const router = express.Router();
const {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todosController");

// GET /todos?date=2025-04-26
router.get("/", getTodos);

// POST /todos
router.post("/", addTodo);

// delete /todos
router.delete("/:date/:id", deleteTodo);

// update /todos
router.put("/:date/:id", updateTodo);

module.exports = router;
