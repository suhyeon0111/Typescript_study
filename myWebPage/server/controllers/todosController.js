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

    if (!data[date]) data[date] = [];
    data[date].push(todo);

    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    res.status(201).json({ message: "Todo added" });
  } catch (error) {
    console.error("Error saving todo:", error);
    res.status(500).json({ error: "Failed to save todo" });
  }
};

module.exports = { getTodos, addTodo };
