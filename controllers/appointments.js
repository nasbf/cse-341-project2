const appointments = require('../models/appointments');
const Service = require('../models/appointments');


const getAll = async (req, res) => {
  try {
    const services = await Appointments.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving appointments',
      error: error.message
    });
  }
};

module.exports = {
    getAll
};