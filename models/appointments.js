const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/ 

  },
  phone: {
    type: String,
    required: true
  },
  date:{
    tyoe: String,
    required: true
  }
  
  
});

module.exports = mongoose.model('Appointments', appointmentSchema);