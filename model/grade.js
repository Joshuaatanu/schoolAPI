const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  course: { type: String, required: true },
  score: { type: Number, required: true },
  teacher: { type: String, required: true },
});

module.exports = mongoose.model('Grade', gradeSchema);
