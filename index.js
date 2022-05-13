const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello asdfsadfWorld!");
});

app.get("/adios-mundo", (req, res) => {
  res.send("<h1>hola mundo</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
