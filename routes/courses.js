const express = require('express');
const {
    getCourses,
    getCourse
} = require('../controllers/courses');

const router = express.Router();

// Route to get all courses
router.route('/').get(getCourses);

// Route to get a single course by id
router.route('/:id').get(getCourse);

module.exports = router;
