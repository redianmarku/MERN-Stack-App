const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 4000;
const { errorHandler } = require("./middleware/errorMiddleware");
const colors = require("colors");
const { connectDB } = require("./config/db");

connectDB();

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/goals", require("./routes/goalsRouter"));
app.use(errorHandler);

app.listen(port, () => console.log(`App running in the port ${port}.-.`));
