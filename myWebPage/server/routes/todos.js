const express = require("express");
const router = express.Router();
const {
  getTodos,
  addTodo,
  updateTodo,
} = require("../controllers/todosController");

// GET /todos?date=2025-04-26
router.get("/", getTodos);

// POST /todos
router.post("/", addTodo);

// delete
router.delete("/todos/:date/:id", deleteTodo);

// update
router.put("todos/:date/:id", updateTodo);

module.exports = router;
