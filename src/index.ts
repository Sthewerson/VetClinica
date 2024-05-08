import express from "express";
import { config } from "dotenv";

config();
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});
