const express = require('express');
const {
    getCourses,
    getCourse,
    addCourse,
    updateCourse,
    deleteCourse
} = require('../controllers/courses');

const router = express.Router({ mergeParams: true });  // This is important to allow nested routes

router.route('/').get(getCourses).post(addCourse);
router.route('/:id').get(getCourse).put(updateCourse).delete(deleteCourse);

module.exports = router;
