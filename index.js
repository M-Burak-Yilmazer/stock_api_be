"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env?.PORT || 8000;
const HOST = process.env?.HOST || "127.0.0.1";

require("express-async-errors");

const { connectDB } = require("./src/configs/dbConnection");
connectDB();

app.use(express.json());

app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to Stock Api",
  });
});

app.use(require("./src/middlewares/errorHandler"));

//run server, listening on port 8000
app.listen(PORT, HOST, () =>
  console.log(`You are listening http://${HOST}:${PORT}`)
);
