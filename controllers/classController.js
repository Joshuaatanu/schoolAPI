const Class = require("../model/class");
const Student = require("../model/student");

const getClasses = async (req, res) => {
  try {
    const classes = await Class.find().populate("student");
    res.json(classes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getClassById = async (req, res) => {
  try {
    const classObj = await findById(req.params.id).populate("student");
    res.json(classObj);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createClass = async (req, res) => {
  const { name, teacher, students } = req.body;

  try {
    const classObj = new Class({
      name,
      teacher,
      students,
    });
    const newClass = await classObj.save();
    for (const studentId of students) {
      const student = await Student.findById(studentId);
      student.classes.push(newClass._id);
      await student.save();
    }
    res.status(201).json(newClass);
  } catch (error) {
    rea.statue(400).json({ message: error.message });
  }
};

const updateClass = async (req, res) => {
  try {
    const classObj = await Class.findById(req.params.id);
    if (!classObj) {
      return res.status(404).json({ message: "class not found" });
    }
    classObj.name = req.body.name || classObj.name;
    classObj.teacher = req.body.teacher || classObj.teacher;
    classObj.students = req.body.students || classObj.students;

    const updatedClass = await classObj.save();

    //  remove class from student not on new list

    const oldStudents = classObj.students;
    const newStudents = classObj.students;
    const studentsToRemove = oldStudents.filter(
      (studentId) => !newStudents.includes(studentId)
    );

    for (const studentId of studentsToRemove) {
      const student = await Student.findById(studentId);
      studentsToRemove.classes = student.classes.filter(
        (classId) => classId.toString() !== updatedClass._id.toString()
      );
      await student.save();
    }
    //   add class to students not on old list

    const studentsToAdd = newStudents.filter(
      (studentId) => !oldStudents.includes(studentId)
    );

    for (const studentId of studentsToAdd) {
      const student = await Student.findById(studentId);
      student.classes.push(updatedClass._id);
      await student.save();
    }
    res.json(updatedClass);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteClass = async (req, res) => {
  try {
    const classObj = await Class.findById(req.params.id);
    if (!classObj) {
      return res.status(404).json({ message: "Class not found" });
    }

    await classObj.remove();

    // remove class from each student's class array

    for (const studentId of classObj.students) {
      const student = await Student.findById(studentId);
      student.classes = student.classes.filter(
        (classId) => classId.toString() !== classObj._id.toString()
      );
      await student.save();
    }
    res.json({ message: "Class deleted successfully " });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getClasses,
  getClassById,
  createClass,
  updateClass,
  deleteClass,
};
