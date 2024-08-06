const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('../middleware/async');
const Course = require('../models/Course');

// @desc    Get courses
// @route   GET /api/v1/bootcamps/:bootcampId/courses
// @access  Public
exports.getCourses = asyncHandler(async (req, res, next) => {
  const course = await Course.findById(req.params.id).populate({
    path: 'bootcamp',
    select: 'name decription'
  });

  if(!course) {
    return next(
        new ErrorResponse('no course with the id of ${req.params.id'),
    404
);
  }
    res.status(200).json({
        success: true,
        count: courses.length,
        data: courses
    });
});
