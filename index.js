import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());

app.get("/api/v1", (req, res) => {
  res.send("Hello world");
});
