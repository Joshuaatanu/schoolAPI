const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const port = 4000;

connectDB();

// configuration

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes 
app.use('/api/students', require('./routes/studentRoute.js'))

app.listen(port, () => console.log(`Server connected at ${port}`));
