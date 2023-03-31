const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoute");
const classRoutes = require("./routes/classRoute");
const resultRoutes = require("./routes/resultRoute");

const port = 4000;

// configuration

mongoose
  .connect("mongodb://localhost:27017/highschool", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => {
    console.log(`Error connecting to database: ${error.message}`);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/students", studentRoutes);
app.use("/class", classRoutes);
app.use("/results", resultRoutes);

app.listen(port, () => console.log(`Server connected at ${port}`));
