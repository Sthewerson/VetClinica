import express from "express";
import { config } from "dotenv";
import { createConnection } from "typeorm";
config();
const app = express();

const port = process.env.PORT || 3000;

createConnection()
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
