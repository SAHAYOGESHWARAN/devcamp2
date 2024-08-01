
const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('../middleware/async');

const Course = require('../models/Course');



//@dec  Get courses
//@route GET/api/v1/bootcamps/:bootcampId/courses
//@access  public