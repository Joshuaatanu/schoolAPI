const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Student",
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Class",
  },
  subject: {
    type: String,
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
});

const Result = mongoose.model("Result", resultSchema);

module.exports = Result;
