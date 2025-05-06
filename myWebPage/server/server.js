const express = require("express");
const cors = require("cors");
const todosRoutes = require("./routes/todos");
const scheduleRoutes = require("./routes/scheduleRoutes");

const app = express();
const PORT = 3001;

// 미들웨어 등록
app.use(cors());
app.use(express.json());

// todos 관련 라우터
app.use("/todos", todosRoutes);
app.use("/api", scheduleRoutes);

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
