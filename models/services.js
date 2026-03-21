const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  service: {
    type: String,
    required: true
  },
  vehicleType: {
    type: String,
    required: true
  },
  category: {
    type: String,

  },
  technician: {
    type: String,
    required: true
  },
  location:{
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('Service', serviceSchema);