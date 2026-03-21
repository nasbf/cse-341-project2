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
  date: {
    type: Date,
    required:true,
    validate: {
    validator: function(value) {
      return value >= new Date();
    },
    message: 'Date must be today or in the future'
  }
}
  
  
});

module.exports = mongoose.model('Appointments', appointmentSchema);