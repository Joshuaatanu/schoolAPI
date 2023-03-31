const Student = require("../model/student");

// @description GET students
//  @route GET /api/students
//  @access private

const getStudent = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createStudent = async (req, res) => {
  const { firstName, lastName, gradeLevel, email, password } = req.body;

  try {
    const student = new Student({
      firstName,
      lastName,
      gradeLevel,
      email,
      password,
    });
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).exports.updateStudent = async (req, res) => {
      try {
        const student = await Student.findById(req.params.id);
        if (!student) {
          return res.status(404).json({ message: "Student not found" });
        }
        student.firstName = req.body.firstName || student.firstName;
        student.lastName = req.body.lastName || student.lastName;
        student.gradeLevel = req.body.gradeLevel || student.gradeLevel;
        student.email = req.body.email || student.email;
        student.password = req.body.password || student.password;

        const updateStudent = await student.save();
        res.join(updateStudent);
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
      }
    };
  }
};

const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    await student.remove();
    res.json({ message: "Student removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getStudent,
  getStudentById,
  deleteStudent,
};
