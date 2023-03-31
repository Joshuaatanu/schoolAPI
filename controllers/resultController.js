const Result = require("../model/result");

const getAllResults = async (req, res) => {
  try {
    const results = await Result.find();
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getResultById = async (req, res) => {
  try {
    const result = await Result.findById(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Result not found" });
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createResult = async (req, res) => {
  const result = new Result({
    studentId: req.body.studentId,
    classId: req.body.classId,
    subject: req.body.subject,
    marks: req.body.marks,
  });

  try {
    const newResult = await result.save();
    res.status(201).json(newResult);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateResult = async (req, res) => {
  try {
    const result = await Result.findById(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Result not found" });
    }
    result.studentId = req.body.studentId || result.studentId;
    result.classId = req.body.classId || result.classId;
    result.subject = req.body.subject || result.subject;
    result.marks = req.body.marks || result.marks;

    const updatedResult = await result.save();
    res.json(updatedResult);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteResult = async (req, res) => {
  try {
    const result = await Result.findById(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Result not found" });
    }
    await result.remove();
    res.json({ message: "Result deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllResults,
  getResultById,
  createResult,
  updateResult,
  deleteResult,
};
