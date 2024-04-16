import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("This is bun express test project");
});

app.listen(port, () => {
  console.log("Listening on port " + port.toString());
});