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
  },
  weeks:{
    type: String,
    required:[true,'please add number of weeks']
  },
  tution:{
    type: Number,
    required:[true,'please add description']
  },
  minimumSkill:{
    type: String,
    required:[true,'please add minimum skil'],
    enum:['beginner','intermediate','advanced']
  },
 scholarshipAvailable:{
    type: Boolean,
    default:false
  },
  createdAt:{
    type:Date,
    default:Date.now
  },
  bootcamp:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'bootcamp',
    required:true
  }

});


module.exports = mongoose.model('Course',CourseSchema);