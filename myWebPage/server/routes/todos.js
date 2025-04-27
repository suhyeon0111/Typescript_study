const express = require("express");
const router = express.Router();
const { getTodos, addTodo } = require("../controllers/todosController");

// GET /todos?date=2025-04-26
router.get("/", getTodos);

// POST /todos
router.post("/", addTodo);

module.exports = router;
