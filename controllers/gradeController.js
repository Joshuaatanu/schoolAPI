const Grade = require("../model/grade");

const getGrades = async (req, res) => {
  try {
    const grade = await Grade.find().populate("student");
    res.json(grade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getGradeById = async (req, res) => {
  try {
    const grade = await Grade.findById(req.params.id).populate("student");
    res.json(grade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createGrade = async (req, res) => {
  const { student, course, score, teacher } = req.body;
  try {
    const grade = new Grade({
      student,
      course,
      score,
      teacher,
    });
    const newGrade = await grade.save();
    res.status(201).json(newGrade);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateGrade = async (req, res) => {
  try {
    const grade = await Grade.findById(req.params.id);
    if (!grade) {
      return res.status(404).json({ message: "Grade not found" });
    }
    grade.student = req.body.student || grade.student;
    grade.course = req.body.course || grade.course;
    grade.score = req.body.score || grade.score;
    grade.teacher = req.body.teacher || grade.teacher;

    const updatedGrade = await grade.save();
    res.json(updatedGrade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const deleteGrade = async (Req, res) => {
  try {
    const grade = await Grade.findById(Req.params.id);
    if (!grade) {
      return res.status(404).json({ message: "Grade not found" });
    }
    await grade.remove();
    res.json({ message: "Grade removed successfully" });
  } catch (error) {
    res.status(500).json({
      message: console.error.message,
    });
  }
};

module.exports = {
  getGrades,
  getGradeById,
  createGrade,
  updateGrade,
  deleteGrade,
};
