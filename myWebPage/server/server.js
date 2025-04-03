// const express = require("express");
// const fs = require("fs");
// const cors = require("cors"); // CORS 해결용
// const path = require("path");

// const app = express();
// const PORT = 5000;
// const filePath = path.join(__dirname, "data.json");

// // 미들웨어 설정
// app.use(express.json()); // JSON 데이터 파싱
// app.use(cors()); // CORS 문제 해결

// // 할 일 추가 API (POST 요청 받기)
// app.post("/add-todo", (req, res) => {
//   const { memName, newTodo } = req.body; // 프론트에서 보낸 데이터 받기

//   // JSON 파일 읽기
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) return res.status(500).json({ error: "파일 읽기 실패" });

//     let jsonData = JSON.parse(data);
//     let user = jsonData.userTodo.find((u) => u.memName === memName);

//     if (user) {
//       user.list.push(newTodo);
//     } else {
//       jsonData.userTodo.push({ memName, list: [newTodo] });
//     }

//     // JSON 파일 업데이트
//     fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), "utf8", (err) => {
//       if (err) return res.status(500).json({ error: "파일 저장 실패" });

//       res.json({ success: true, message: "할 일 추가 완료!" });
//     });
//   });
// });

// // 서버 실행
// app.listen(PORT, () => {
//   console.log(`✅ 서버가 http://localhost:${PORT} 에서 실행 중`);
// });
