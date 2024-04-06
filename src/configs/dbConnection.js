"use strict";

const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log(" * DB Connected "))
    .catch((error) => console.log("* DB Connection Error", error));
};
module.exports = { mongoose, connectDB };
