const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, "../db/data.json");

// todos 가져오기
const getTodos = (req, res) => {
  const date = req.query.date;

  try {
    const rawData = fs.readFileSync(dataPath, "utf8");
    const data = JSON.parse(rawData);

    res.json(data[date] || []);
  } catch (error) {
    console.error("Error reading data:", error);
    res.status(500).json({ error: "Failed to load todos" });
  }
};

// todo 추가하기
const addTodo = (req, res) => {
  const { date, todo } = req.body;

  try {
    const rawData = fs.readFileSync(dataPath, "utf8");
    const data = JSON.parse(rawData);

    if (!data[date]) data[date] = []; // 해당 날짜가 없으면 배열로 초기화
    data[date].push(todo); // 날짜 배열에 todo 추가

    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    res.status(201).json({ message: "Todo added" });
  } catch (error) {
    console.error("Error saving todo:", error);
    res.status(500).json({ error: "Failed to save todo" });
  }
};

// todo 삭제하기
const deleteTodo = (req, res) => {
  const { date, id } = req.params;

  try {
    const rawData = fs.readFileSync(dataPath, "utf8");
    const data = JSON.parse(rawData);

    if (!data[date]) {
      return res.status(404).json({ error: "Date not found" });
    }

    // 해당 날짜에서 id가 일치하지 않는 항목만 남김
    const updatedTodos = data[date].filter((todo) => todo.id !== id);

    data[date] = updatedTodos;
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

    res.status(200).json({ message: "Todo deleted" });
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ error: "Failed to delete todo" });
  }
};

module.exports = { getTodos, addTodo, deleteTodo };
