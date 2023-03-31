const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
  students :[{
    type : mongoose.Schema.Types.ObjectId, ref: 'Student'
  }]
});

module.exports = mongoose.model('class', classSchema)
