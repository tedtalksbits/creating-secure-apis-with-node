// import express from "express";
// import dotenv from "dotenv";
const dotenv = require("dotenv");
const express = require("express");
const app = express();
const userRoutes = require("./routes/user.routes.js");

dotenv.config();

app.use(express.json());

app.get("/api/v1", (req, res) => {
  res.send("Hello world");
});
app.use(userRoutes);

const PORT = 3998;

app.listen(PORT, () => console.log(`app is listening on Port : ${PORT}`));
