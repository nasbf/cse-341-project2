const Appointment = require('../models/appointments');



const getAll = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving appointments',
      error: error.message
    });
  }
};

const createAppointment = async (req, res) => {
    
    try {
        const appointment = new Appointment(req.body);
        const data = await appointment.save();

        res.status(201).json({
            message: 'Appointment created succesfully',
            data: data});
    } catch (error) {
        res.status(400).json({
        message: 'Error creating appointment',
        error: error.message
    });
  }
};

const updateAppointment = async (req, res) => {
    
    try {
        const update = await Appointment.findByIdAndUpdate(
            req.params.id, req.body, 
            {new: true, 
             runValidators: true
            });
        
        if (!update) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        
        res.status(200).json({
            message: 'Appointment updated succesfully',
            data: update});

    } catch (error) {
        res.status(500).json({
        message: 'Error updating appointment',
        error: error.message
    });
  }
}

const deleteAppointment = async (req, res) => {
    
    try {
        const deleteId = await Appointment.findByIdAndDelete(
            req.params.id, req.body, 
            {new: true});
        
        if (!deleteId) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        
        res.status(200).json({
            message: 'Appointment deleted saccesfully',
            data: deleteId});

    } catch (error) {
        res.status(500).json({
        message: 'Error updating Appointment',
        error: error.message
    });
  }
}



module.exports = {
    getAll,
    createAppointment,
    updateAppointment,
    deleteAppointment
};