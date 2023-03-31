const express = require('express');
const router = express.Router()
const {getStudent} = require('../controllers/studentController')

 
router.route("/students",).get(getStudent)