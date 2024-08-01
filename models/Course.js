const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title:{
    type: String,
    trim: true,
    required:[true,'please add a course title']
  },
  description:{
    type: String,
    required:[true,'please add description']
  }
});