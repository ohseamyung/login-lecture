const express = require("express");
const app = express();
// const port = 7000;
// app.use(); //미들웨어를 등록하는 함수
app.get("/api", (req, res) => {
  console.log("메인루트입니다");
  res.send("여기는 루트입니다");
  // console.log("여기는루트입니다");
});
app.get("/api/login", (req, res) => {
  res.send("여기는 login입니다");
});
// const http = require("http");
// const port = 7000;
// const app = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
//   if (req.url === "/") {
//     res.end("여기는 HTTP루트입니다");
//   }
// });
// app.listen(port, () => {
//   console.log(`서버가동 ${port}`);
// });
module.exports = app;
