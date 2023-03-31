const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const studentRoutes = require('./routes/studentRoute')
const classRoutes = require('./routes/classRoute')

const port = 4000;



// configuration

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes 
app.use ('/students' , studentRoutes)
app.use('/class', classRoutes);

connectDB();
app.listen(port, () => console.log(`Server connected at ${port}`));
