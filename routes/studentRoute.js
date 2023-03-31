const express = require("express");
const router = express.Router();
const {
  getStudent,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");
const logger = require("../middleware/logger");

router.use(logger);

router.get("/", getStudent);
router.get("/:id", getStudentById);
router.post("/", createStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
