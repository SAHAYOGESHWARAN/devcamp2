const express = require('express');
const {
   getCourses,getCourse 
} = require('../controllers/courses');

const router = express.Router();

router.route('/:id').get(getCourses);

module.exports = router;