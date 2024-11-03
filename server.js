import express from "express";
import "./loadEnvironment.js";
import { connectToDatabase } from "./db/connection.js";
const port = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

(async () => {
  try {
    await connectToDatabase();
    app.listen(port, () => {
      console.log(`Server is runnig on port ${port}`);
    });
  } catch (error) {
    console.error("Faild to start the server :", error);
  }
})();
