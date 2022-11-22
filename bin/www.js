"use strict";
const app = require("../server");
const port = 7000;

app.listen(port, () => {
  console.log(`서버가동 ${port}`);
});
