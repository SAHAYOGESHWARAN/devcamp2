const express = require('express');
const {
    getCourses,
    getCourse,
    addCourse
} = require('../controllers/courses');

const router = express.Router({mergeParams: true});


router.route('/:id')
.get(getCourse)
.post(addCourse);
router.route('/:id').get(getCourses);

module.exports = router;
